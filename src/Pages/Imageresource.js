import React, { useState } from 'react';
import { fetchAnalyzedResources } from '../api';
import CircularProgress from '@mui/material/CircularProgress';

function ImageResources() {
  const [url, setUrl] = useState('');
  const [details, setDetails] = useState({
    total_images: 0,
    image_links: [],
    too_large_images: [],
    broken_images: [],
    pages_with_broken_images: [],
    redirecting_images: [],
    pages_with_redirecting_images: [],
    alternative_text_missing_pages: [],
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const fetchData = async () => {
    if (!url || !/^https?:\/\/.+\..+/.test(url)) {
      setError('Please enter a valid URL.');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const data = await fetchAnalyzedResources(url);
      setDetails({
        total_images: data.total_images || 0,
        image_links: data.image_links || [],
        too_large_images: data.too_large_images || [],
        broken_images: data.broken_images || [],
        pages_with_broken_images: data.pages_with_broken_images || [],
        redirecting_images: data.redirecting_images || [],
        pages_with_redirecting_images: data.pages_with_redirecting_images || [],
        alternative_text_missing_pages: data.alternative_text_missing_pages || [],
      });
    } catch (error) {
      setError(error.message);
      setDetails({
        total_images: 0,
        image_links: [],
        too_large_images: [],
        broken_images: [],
        pages_with_broken_images: [],
        redirecting_images: [],
        pages_with_redirecting_images: [],
        alternative_text_missing_pages: [],
      });
    } finally {
      setLoading(false);
    }
  };

  // Inline CSS styles
  const styles = {
    container: {
      padding: '20px',
      maxWidth: '800px',
      margin: 'auto',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: '24px',
      marginBottom: '20px',
      color: '#333',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonDisabled: {
      backgroundColor: '#6c757d',
      cursor: 'not-allowed',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    error: {
      color: 'red',
      marginTop: '10px',
    },
    results: {
      marginTop: '20px',
    },
    resultsTitle: {
      fontSize: '20px',
      marginBottom: '10px',
      color: '#333',
    },
    ul: {
      paddingLeft: '20px',
    },
    li: {
      marginBottom: '5px',
    },
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Image Resources</h3>
      <input 
        type="text" 
        value={url} 
        onChange={handleInputChange} 
        placeholder="Enter URL" 
        style={styles.input}
      />
         <button onClick={fetchData}>Fetch Details</button>
      {loading && <CircularProgress />}
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      {details && details.error && (
        <div style={{ color: 'red' }}>Error: {details.error}</div>
      )}
      {details && (
        <div style={styles.results}>
          <h3 style={styles.resultsTitle}>Analysis Results</h3>
          <p>Total Images: {details.total_images}</p>
          <p>Image Links:</p>
          <ul style={styles.ul}>
            {details.image_links.length > 0 ? (
              details.image_links.map((link, index) => (
                <li key={index} style={styles.li}>{link}</li>
              ))
            ) : (
              <li>No image links found.</li>
            )}
          </ul>
          <p>Too Large Images:</p>
          <ul style={styles.ul}>
            {details.too_large_images.length > 0 ? (
              details.too_large_images.map((link, index) => (
                <li key={index} style={styles.li}>{link}</li>
              ))
            ) : (
              <li>No too large images found.</li>
            )}
          </ul>
          <p>Broken Images:</p>
          <ul style={styles.ul}>
            {details.broken_images.length > 0 ? (
              details.broken_images.map((link, index) => (
                <li key={index} style={styles.li}>{link}</li>
              ))
            ) : (
              <li>No broken images found.</li>
            )}
          </ul>
          <p>Pages with Broken Images:</p>
          <ul style={styles.ul}>
            {details.pages_with_broken_images.length > 0 ? (
              details.pages_with_broken_images.map((page, index) => (
                <li key={index} style={styles.li}>{page}</li>
              ))
            ) : (
              <li>No pages with broken images found.</li>
            )}
          </ul>
          <p>Redirecting Images:</p>
          <ul style={styles.ul}>
            {details.redirecting_images.length > 0 ? (
              details.redirecting_images.map((link, index) => (
                <li key={index} style={styles.li}>{link}</li>
              ))
            ) : (
              <li>No redirecting images found.</li>
            )}
          </ul>
          <p>Pages with Redirecting Images:</p>
          <ul style={styles.ul}>
            {details.pages_with_redirecting_images.length > 0 ? (
              details.pages_with_redirecting_images.map((page, index) => (
                <li key={index} style={styles.li}>{page}</li>
              ))
            ) : (
              <li>No pages with redirecting images found.</li>
            )}
          </ul>
          <p>Alternative Text Missing Pages:</p>
          <ul style={styles.ul}>
            {details.alternative_text_missing_pages.length > 0 ? (
              details.alternative_text_missing_pages.map((page, index) => (
                <li key={index} style={styles.li}>{page}</li>
              ))
            ) : (
              <li>No pages with missing alternative text found.</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ImageResources;
