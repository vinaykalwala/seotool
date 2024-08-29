import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

function PageLoadingSpeed() {
  const [url, setUrl] = useState('');
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const fetchData = async () => {
    setLoading(true); // Start loading
    try {
      const response = await axios.post('http://localhost:8000/page_loading_speed/', { base_url: url });
      setDetails(response.data);
      setError(null); // Clear any previous errors
    } catch (error) {
      setError(error.response?.data?.error || error.message);
      setDetails(null); // Clear details if there's an error
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px'
  };

  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#0056b3'
  };

  const errorStyle = {
    color: 'red',
    marginTop: '10px'
  };

  const listStyle = {
    listStyleType: 'none',
    padding: '0'
  };

  const listItemStyle = {
    padding: '10px',
    borderBottom: '1px solid #ddd',
    fontSize: '16px'
  };

  return (
    <div style={containerStyle}>
      <h3>Page Loading Speed</h3>
      <input
        type="text"
        value={url}
        onChange={handleInputChange}
        placeholder="Enter website URL"
        style={inputStyle}
      />
      <button
        onClick={fetchData}
        style={buttonStyle}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
      >
        Fetch Loading Speed
      </button>
      {loading && <CircularProgress style={{ margin: '20px' }} />}
      {error && <div style={errorStyle}>Error: {error}</div>}
      {details && (
        <div>
          {Object.keys(details).length === 0 ? (
            <p>No pages found or error occurred.</p>
          ) : (
            <ul style={listStyle}>
              {Object.entries(details).map(([page, speed], index) => (
                <li key={index} style={listItemStyle}>
                  {page}: {speed}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default PageLoadingSpeed;
