// ShowsList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ShowsList.css'
const ShowsList = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
                const data = await response.json();
                setShows(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='container'>

            <h1> Welcome To Show List</h1>

            {shows.map(({ show }) => (
                <div className='card'>
                    <div key={show.id}>
                        <div className='card1'>
                            {/* Add other details you want to display */}

                            <div className='image'> {show.image && <img src={show.image.medium} alt={show.name} />}
                            </div>

                            
                            <div className='information'>
                                <h2>{show.name}</h2>
                                <div className='showInfo'>
                                    <h3>Show Info</h3>
                                    <p> Rating :{show.rating.average}</p>
                                    <p>Genre :{show.genres.map((genre, index) => (<span> {genre}</span>))}</p>
                                    <p> Show Type : {show.type}</p>
                                    <p> Language : {show.language}</p>
                                    <p>Satus : {show.status}</p>
                                    <p>OfficialSite : <Link>{show.officialSite} </Link></p>
                                </div>
                            </div>
                        </div>
                        <div className='btn'>
                        <Link to={`/show/${show.id}`}>
                            <button>View Details</button>
                        </Link>
                        <Link to={show.url} > <button>Go To Offcial Page</button></Link>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default ShowsList;
