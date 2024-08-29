// src/components/SitemapsAnalyzer.js
import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { fetchSitemaps } from '../api';

function SitemapsAnalyzer() {
  const [url, setUrl] = useState('');
  const [sitemapData, setSitemapData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchSitemapsData = async () => {
    try {
      setLoading(true);
      const data = await fetchSitemaps(url);
      setSitemapData(data);
      setError('');
    } catch (err) {
      setError('Failed to fetch sitemaps data.');
      setSitemapData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim() !== '') {
      fetchSitemapsData();
    } else {
      setError('Please enter a valid URL.');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Sitemaps Analyzer</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Analyze Sitemaps</button>
      </form>

      {loading && <CircularProgress style={styles.loader} />}
      {error && <p style={styles.error}>{error}</p>}

      {sitemapData && (
        <div style={styles.resultsContainer}>
          <h2>Number of Sitemaps found: {sitemapData.num_sitemaps}</h2>
          <h2>Pages in Sitemaps: {sitemapData.pages_in_sitemaps}</h2>
          <h2>Not Indexable Pages in Sitemaps: {sitemapData.not_indexable_pages_in_sitemaps}</h2>
          <h2>Indexable Pages not in Sitemaps: {sitemapData.indexable_pages_not_in_sitemaps}</h2>

          <h2>Pages in Multiple Sitemaps:</h2>
          <ul>
            {Object.entries(sitemapData.pages_in_multiple_sitemaps).map(([page, count]) => (
              <li key={page}>{page}: {count} times</li>
            ))}
          </ul>

          <h2>Pages Removed from Sitemaps:</h2>
          <ul>
            {sitemapData.pages_removed_from_sitemaps.map((page, index) => (
              <li key={index}>{page}</li>
            ))}
          </ul>

          <h2>Broken Sitemaps:</h2>
          <ul>
            {sitemapData.broken_sitemaps.map((sitemap, index) => (
              <li key={index}>{sitemap}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  header: {
    fontSize: '2.5rem',
    color: '#333',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    width: '60%',
    marginRight: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  loader: {
    marginTop: '20px',
  },
  error: {
    color: 'red',
    marginTop: '20px',
  },
  resultsContainer: {
    textAlign: 'left',
  },
};

export default SitemapsAnalyzer;
