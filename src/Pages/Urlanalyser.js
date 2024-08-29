// src/components/URLAnalyzer.js
import React, { useState } from 'react';
import { fetchPageAnalysis } from '../api'; // Adjust the path as needed

function URLAnalyzer() {
  const [url, setUrl] = useState('');
  const [pageAnalysis, setPageAnalysis] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (url.trim() !== '') {
      try {
        const data = await fetchPageAnalysis(url);
        setPageAnalysis(data);
        setError('');
      } catch (err) {
        setError('Failed to fetch page analysis data.');
        setPageAnalysis(null);
      }
    } else {
      setError('Please enter a valid URL.');
    }
  };

  return (
    <div>
      <h1>URL Analyzer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
        />
        <button type="submit">Analyze URL</button>
      </form>

      {error && <p>{error}</p>}

      {pageAnalysis && (
        <div>
          <h2>Page Analysis:</h2>
          <ul>
            {Object.keys(pageAnalysis).map((title, index) => (
              <li key={index}>
                <strong>{title}</strong>
                <ul>
                  <li>Duplicate Content: {pageAnalysis[title].duplicate_content ? 'Yes' : 'No'}</li>
                  <li>Orphan Page: {pageAnalysis[title].orphan_page ? 'Yes' : 'No'}</li>
                  <li>Redirect URL: {pageAnalysis[title].redirect_url ? 'Yes' : 'No'}</li>
                  <li>Status Code 200: {pageAnalysis[title].status_code_200 ? 'Yes' : 'No'}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default URLAnalyzer;
