import React from 'react';
import { useQuery } from 'react-query';
import './Comiccarousel.css';

const Comiccarousel = () => {
  
  const fetchComicCharacters = async () => {
    try {
      const response = await fetch('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=b46dcb3807f5d2a379ca19811966bd86&hash=7059e924505f11b0b4897e398d677916');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data?.data?.results; 
    } catch (error) {
      throw new Error('Failed to fetch comic characters');
    }
  };

  const { data: comicCharacters, isLoading, error } = useQuery('comicCharacters', fetchComicCharacters);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="Comiccarousel">
      {comicCharacters.map(character => (
        <div key={character.id} className="comic-frame">
          <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
         
        </div>
      ))}
    </div>
  );
}

export default Comiccarousel;