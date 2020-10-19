import React from 'react';
import './movieCard.css';

export default function MovieCard(props) {
    const {m} = props;
    return(
        <div className="card" key={m.id}>
        <img className="card--image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${m.poster_path}`} alt={m.title + " poster"}/>
        <div className="card--content">
            <h3 className="card--title">{m.title}</h3>
            <p><small>RELEASE DATE: {m.release_date}</small></p>
            <p><small>RATING: {m.vote_average}</small></p>
            <p className="card--desc">{m.overview}</p>
        </div>
    </div>
    )
}