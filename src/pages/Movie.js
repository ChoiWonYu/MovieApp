import React from 'react';
import {useLocation, useParams, useSearchParams} from 'react-router-dom';
import { getMovie } from './MovieData';
const Movie = () => {
    //URL 파라미터 사용
    const params=useParams();           //url 파라미터의 값을 조회해준다. 
    const movie=getMovie(parseInt(params.movieId));
    //파라미터 값을 통해 id를 얻어와, 영화 정보를 얻음

    //쿼리 스트링 사용
    const location=useLocation();
    //useLocation 은 쿼리 파라미터의 값들을 보여준다. hash, key, pathname 등
    console.log(location);
    const [searchParams,setSearchParams]=useSearchParams();
    // searchParams 쿼리파라미터의 상태 setSearchParams는 쿼리파라미터의 상태를 업데이트해준다.
    console.log(searchParams);
    const detail=searchParams.get('detail');

    const handleClick=()=>{
        setSearchParams({detail: detail==='true'?false:true});
        console.log(detail);
    };
    
    return (
        <div>
            <h2>{movie.title}</h2>
            <p>감독 : {movie.director}</p>
            <p>카테고리 : {movie.category}</p>
            <button onClick={handleClick}>자세히</button>
            {detail==='true'?<p>{movie.detail}</p>:null}
        </div>
    );
};

export default Movie;