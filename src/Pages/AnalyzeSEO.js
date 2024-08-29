// src/components/AnalyzeSEO.js
import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

const AnalyzeSEO = () => {
  const [url, setUrl] = useState('');
  const [analysisResults, setAnalysisResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };



  

  const handleAnalyzeSEO = async () => {
    setLoading(true);
    setError(null);
    setAnalysisResults([]);
    try {
      const response = await axios.get(`http://localhost:8000/analyze-seo/`, {
        params: { url }
      });
      setAnalysisResults(response.data);
    } catch (error) {
      setError(error.response?.data?.error || 'An error occurred');
    }
    setLoading(false);
  };











  return (
    <div>
      <h1>Analyze SEO</h1>
      <input
        type="text"
        value={url}
        onChange={handleInputChange}
        placeholder="Enter website URL"
      />
      <button onClick={handleAnalyzeSEO} disabled={loading}>
        Analyze
      </button>
      
      {loading && <CircularProgress />}
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      {analysisResults.length > 0 && (
        <div>
          <h2>Analysis Results</h2>
          {analysisResults.map((result, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <h3>Page: {result.page}</h3>
              <p>Title: {result.title}</p>
              <p>Broken Links: {result.broken_links.join(', ') || 'None'}</p>
              <p>No Outgoing Links: {result.no_outgoing_links ? 'Yes' : 'No'}</p>
              <p>Incoming Links to Canonical URL: {result.incoming_links_to_canonical.join(', ') || 'None'}</p>
              <p>Internal HTTP Links on HTTPS Page: {result.internal_http_links_on_https_page.join(', ') || 'None'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnalyzeSEO;
