import React, { useState } from 'react';
import { fetchImagesData } from '../api';
import { MDBBtn } from 'mdb-react-ui-kit';
import CircularProgress from '@mui/material/CircularProgress';

const ImageChecker = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await fetchImagesData(url);
      setData(result);
      setError(null);
    } catch (error) {
      setError(error.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div>
      <h3>Image links</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Enter URL:
          <input type="text" value={url} onChange={handleChange} />
        </label>
        <MDBBtn type="submit" color='info'>
          Submit
        </MDBBtn>
      </form>

      {loading && (
        <div className="loading-container">
          <CircularProgress />
        </div>
      )}

      {error && <div>Error: {error}</div>}
      
      {data && !loading && (
        <div>
          <h3>Image and Link Check Results</h3>
          <p>Total Images: {data.total_images}</p>
          <p>Broken Images: {data.broken_images}</p>
          <p>Total Links: {data.total_links}</p>
          <p>Broken Links: {data.broken_links}</p>
          <h4>Broken Image Links</h4>
          <ul>
            {data.broken_image_links.map((link, index) => (
              <li key={index}><a href={link}>{link}</a></li>
            ))}
          </ul>
          <h4>Valid Image Links</h4>
          <ul>
            {data.valid_image_links.map((link, index) => (
              <li key={index}><a href={link}>{link}</a></li>
            ))}
          </ul>
          <h4>Broken Link URLs</h4>
          <ul>
            {data.broken_link_urls.map((link, index) => (
              <li key={index}><a href={link}>{link}</a></li>
            ))}
          </ul>
          <h4>Valid Link URLs</h4>
          <ul>
            {data.valid_link_urls.map((link, index) => (
              <li key={index}><a href={link}>{link}</a></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImageChecker;
