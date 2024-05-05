import React , {useState, useEffect} from 'react';
import { useQuery } from 'react-query';
import Navbar from '../Navbar/Navbar';
import Comiccards from '../Comiccard/Comiccard';
import Comiccarousel from '../Comic-carousel/Comiccarousel';

 

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState();
  const fetchComics = async () => {
    try {
      let url='https://gateway.marvel.com/v1/public/comics?ts=1&apikey=b46dcb3807f5d2a379ca19811966bd86&hash=7059e924505f11b0b4897e398d677916'
      if(searchQuery != undefined && searchQuery.length>0){
        url += '&titleStartsWith=' + searchQuery;
      }
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data?.data?.results; 
    } catch (error) {
      console.log("error -> " + error)
      throw new Error('Failed to fetch comics');
    }
  };
  const { data: comics, isLoading, error, refetch} = useQuery('comics', fetchComics);
  useEffect(()=>{
   
    refetch();
  },[searchQuery])
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;


  return (
    
      <div className="App">
        <Navbar searchQuery = {searchQuery} setSearchQuery = {setSearchQuery} /> 
        <Comiccarousel /> 
        <Comiccards searchQuery = {searchQuery} setSearchQuery = {setSearchQuery} comics ={comics}/> 
      </div>
    
  );
}

export default HomePage;
