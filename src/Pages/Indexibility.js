import React, { useState } from 'react';
import axios from 'axios';
import { Doughnut, Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function IndexibilityAnalyzer() {
  const [url, setUrl] = useState('');
  const [indexibilityData, setIndexibilityData] = useState(null);
  const [error, setError] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);
  const [showLinks, setShowLinks] = useState(null); // State to control which links to display
  const [loading, setLoading] = useState(false); // State to control loading spinner

  const fetchIndexibility = async () => {
    setLoading(true); // Set loading to true when starting fetch
    try {
      const response = await axios.get('http://localhost:8000/indexibility/', {
        params: { url: url }
      });
      setIndexibilityData(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch indexibility data.');
      setIndexibilityData(null);
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim() !== '') {
      fetchIndexibility();
    } else {
      setError('Please enter a valid URL.');
    }
  };

  const handleCardClick = (cardName) => {
    setSelectedCard(cardName);
    setShowLinks(cardName); // Set showLinks state based on cardName
  };

  const renderLinks = (links) => {
    return (
      <ul>
        {links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    );
  };

  const doughnutData = {
    labels: ['Indexable', 'Non-Indexable', 'Non-Indexable (Duplicate)'],
    datasets: [
      {
        data: [
          indexibilityData ? indexibilityData.indexable_pages.length : 0,
          indexibilityData ? indexibilityData.non_indexable_pages.length : 0,
          indexibilityData ? indexibilityData.indexable_to_non_indexable.length : 0,
        ],
        backgroundColor: ['green', 'lightblue', 'red'],
        hoverBackgroundColor: ['darkgreen', 'blue', 'darkred'],
      },
    ],
  };

  const barData = {
    labels: ['Indexable', 'Non-Indexable', 'Non-Indexable (Duplicate)'],
    datasets: [
      {
        label: 'Pages',
        data: [
          indexibilityData ? indexibilityData.indexable_pages.length : 0,
          indexibilityData ? indexibilityData.non_indexable_pages.length : 0,
          indexibilityData ? indexibilityData.indexable_to_non_indexable.length : 0,
        ],
        backgroundColor: ['green', 'lightblue', 'red'],
        borderColor: ['darkgreen', 'blue', 'darkred'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container-fluid">
      <div className="container-analyse">

        <h1>Indexibility Analyzer</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
          />
          <button type="submit">Analyze Indexibility</button>
        </form>

      </div>
      {error && <p>{error}</p>}

      {loading && <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>}

      {indexibilityData && (
        <div>

          <div className="card-container row">
            <div
              className={`card col-md-3 ${selectedCard === 'indexable' ? 'active' : ''}`}
              onClick={() => handleCardClick('indexable')}
            >
              <p>Indexable Pages: {indexibilityData.indexable_pages.length}</p>
            </div>
            <div
              className={`card col-md-3 ${selectedCard === 'nonIndexable' ? 'active' : ''}`}
              onClick={() => handleCardClick('nonIndexable')}
            >
              <p>Non-Indexable Pages: {indexibilityData.non_indexable_pages.length}</p>
            </div>
            <div
              className={`card col-md-3 ${selectedCard === 'duplicate' ? 'active' : ''}`}
              onClick={() => handleCardClick('duplicate')}
            >
              <p>Non-Indexable (Duplicate) Pages: {indexibilityData.indexable_to_non_indexable.length}</p>
            </div>
          </div>
          <div className="col-md-4">

            <div className="card">
              <Doughnut data={doughnutData} />
            </div>
          </div>

          <div className="col-md-10">
            
              <Bar data={barData} />
           
          </div>

          {/* Display links when showLinks state is set */}
          <div className="row">
            {showLinks === 'indexable' && (
              <div className="col-md-12">
                <h3 className="label">Indexable Links</h3>
                {renderLinks(indexibilityData.indexable_pages)}
              </div>
            )}
            {showLinks === 'nonIndexable' && (
              <div className="col-md-12">
                <h3 className="label">Non-Indexable Links</h3>
                {renderLinks(indexibilityData.non_indexable_pages)}
              </div>
            )}
            {showLinks === 'duplicate' && (
              <div className="col-md-12">
                <h3 className="label">Non-Indexable (Duplicate) Links</h3>
                {renderLinks(indexibilityData.indexable_to_non_indexable)}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default IndexibilityAnalyzer;
