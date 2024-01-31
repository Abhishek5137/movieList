// ShowDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './ShowsDetails.css';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [bookingSectionOpen, setBookingSectionOpen] = useState(false);
  const [bookedTickets, setBookedTickets] = useState([]);

  const navigate = useNavigate();

  const handleBooking = () => {
    setBookingSectionOpen(true);
  };

  const handleBookTicket = (userDetails) => {
    setBookedTickets((prevTickets) => [
      ...prevTickets,
      {
        showName: show.name,
        userDetails: userDetails,
      },
    ]);

    setBookingSectionOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShow(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <div className='details'>
        <div className='image'>{show.image && <img src={show.image.medium} alt={show.name} />}</div>
        <div>
          <h1>{show.name}</h1>
          <h2>Summary</h2>
          <p>
            <div dangerouslySetInnerHTML={{ __html: show.summary }} />
          </p>
          {/* Add other details you want to display */}
          <Link to="/">
            <button>Back to Shows</button>
          </Link>

          {/* Book button */}
          <button onClick={handleBooking}>Book Movie</button>

          {bookingSectionOpen && (
            <div className='booking-section'>
              <h2>Booking Section</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const name = e.target.elements.name.value;
                  const email = e.target.elements.email.value;
                  handleBookTicket({ name, email });
                }}
              >
                <label className='inputSec'>
                  Name:
                  <input type='text' name='name' required />
                </label>
                <br />
                <label className='inputSec'>
                  Email: 
                  <input type='email' name='email' required />
                </label>
                <br />
                <button type='submit' className='btnbookTicket'>Book Ticket</button>
              </form>
            </div>
          )}

          {bookedTickets.length > 0 && (
            <div className='booked-tickets-section'>
              <h2>Booked Tickets</h2>
              <ul>
                {bookedTickets.map((ticket, index) => (
                  <li key={index}>
                    <strong>{ticket.showName}</strong> - Booked by {ticket.userDetails.name} ({ticket.userDetails.email})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
