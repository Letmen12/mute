
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const HotelPage = () => {
    const { name } = useParams();
    const [hotel, setHotel] = useState(null);

    useEffect(() => {
        const fetchHotel = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/hotels/${name}`);
                setHotel(response.data);
            } catch (error) {
                console.error("Error fetching the hotel data", error);
            }
        };

        fetchHotel();
    }, [name]);

    if (!hotel) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{hotel.name}</h1>
            <img src={hotel.hotelImg} alt={hotel.name} />
            <p>Rate: {hotel.rate}</p>
            <p>Total Road: {hotel.totalRoad} km</p>
            <p>Total Amount: {hotel.totalAmount} MNT</p>
            <p>Views: {hotel.views}</p>
            <h2>Categories:</h2>
            <ul>
                {hotel.category.map((cat, index) => (
                    <li key={index}>{cat}</li>
                ))}
            </ul>
        </div>
    );
};

export default HotelPage;

