// src/components/WebsiteDetails.js
import React, { useState } from 'react';
import { fetchWebsiteDetails } from '../api'; // Adjust the path as needed

function WebsiteDetails() {
  const [url, setUrl] = useState('');
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const fetchData = async () => {
    try {
      const data = await fetchWebsiteDetails(url);
      setDetails(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setDetails(null);
    }
  };

  return (
    <div>
      <input type="text" value={url} onChange={handleInputChange} />
      <button onClick={fetchData}>Fetch Details</button>
      {error && <div>Error: {error}</div>}
      {details && details.error && (
        <div>Error: {details.error}</div>
      )}
      {details && details.success && (
        <div>
          <h2>Title: {details.title}</h2>
          <p>H1 Tag: {details.h1}</p>
          <p>Meta Description: {details.meta_description}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
}

export default WebsiteDetails;
