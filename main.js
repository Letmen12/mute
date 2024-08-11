// main.js
const API_URL = 'https://example.com/hotels'; // Replace with your actual server URL

async function fetchHotels() {
    try {
        const response = await fetch(API_URL);
        const hotels = await response.json();
        return hotels;
    } catch (error) {
        console.error('Error fetching hotels:', error);
    }
}

function createHotelCard(hotel) {
    const card = document.createElement('div');
    card.className = 'hotel-card';

    card.innerHTML = `
        <img src="${hotel.hotelImg}" alt="${hotel.name}">
        <h2>${hotel.name}</h2>
        <p>Rating: ${hotel.rate}</p>
        <p>Distance: ${hotel.totalRoad} km</p>
        <p>Price: ${hotel.totalAmount} MNT</p>
        <p>Category: ${hotel.category.join(', ')}</p>
        <p>Views: ${hotel.views}</p>
    `;

    return card;
}

function displayHotels(hotels) {
    const container = document.getElementById('hotels-container');
    container.innerHTML = '';
    hotels.forEach(hotel => {
        const card = createHotelCard(hotel);
        container.appendChild(card);
    });
}

function filterHotels(hotels, nameFilter, categoryFilter) {
    return hotels.filter(hotel => {
        const matchesName = hotel.name.toLowerCase().includes(nameFilter.toLowerCase());
        const matchesCategory = categoryFilter === '' || hotel.category.includes(categoryFilter);
        return matchesName && matchesCategory;
    });
}

async function init() {
    const hotels = await fetchHotels();
    if (!hotels) return;

    const nameFilterInput = document.getElementById('filter-name');
    const categoryFilterSelect = document.getElementById('filter-category');

    function applyFilters() {
        const nameFilter = nameFilterInput.value;
        const categoryFilter = categoryFilterSelect.value;
        const filteredHotels = filterHotels(hotels, nameFilter, categoryFilter);
        displayHotels(filteredHotels);
    }

    nameFilterInput.addEventListener('input', applyFilters);
    categoryFilterSelect.addEventListener('change', applyFilters);

    displayHotels(hotels);
}

init();
