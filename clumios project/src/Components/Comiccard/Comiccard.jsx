import React, {useState, useEffect } from 'react';

import './Comiccard.css';

const Comiccards = (props) => {
  
  const maxComics = 8;
  const [totalPages, setTotalPages] = useState();
  const [totalComics, setTotalComics] = useState();
  const [page, setPage] = useState(1);
  const [currentComics, setCurrentComics] = useState();

  useEffect(() => {
    if(page != undefined) {
      console.log(i)
      let newArr = [];
      var count = 0;
      for(var i=(page-1)*maxComics;i<totalComics && count<maxComics;i++) {
        console.log("i ", i)
        newArr.push(props.comics[i]);
        count+=1;
      }
      setCurrentComics(newArr);
    }
  }, [page]);

  useEffect(() => {
    if(props.comics) {
      console.log("props.comics -> ", props.comics)
      setTotalComics(props.comics.length)
      setTotalPages(props.comics.length%maxComics === 0 ? props.comics.length/maxComics : (props.comics.length/maxComics + 1))
    }
    setPage(2);
  }, [props.comics]);
 
  const pagination = () => {
    var items = [];
    for(let i=1;i<=totalPages;i++){
      items.push(<div className='item' onClick={()=> {
        setPage(i)
      }}>{i}{page === i ? <>*</>  : <></>}</div>);
    }

    return items;
  }

  return (
    <div className="Comiccards">
      {currentComics && currentComics.map(comic => (
        <div key={comic.id} className="comic-card">
          <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
          <div>{comic.title}</div>
        </div>
      ))}
      {totalPages && <div className="pagination-wrapper">
        {pagination()}
      </div>}
    </div>
  );
}

export default Comiccards;
