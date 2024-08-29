import React, { useState } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import aboutcard from '../assets/aboutcard.png';

const AnalyzeOptimization = () => {
  const [url, setUrl] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetchAnalysis = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8000/analyze_optimization/', {
        params: { url }
      });
      setResults(response.data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setResults(null);
    } finally {
      setLoading(false);
    }
  };

  const containerStyle = {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px'
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    margin: '10px 0'
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3'
  };

  return (
    <div style={containerStyle}>
      <h1>SEO Optimization Analysis</h1>
      <input 
        type="text" 
        value={url} 
        onChange={(e) => setUrl(e.target.value)} 
        placeholder="Enter URL" 
        style={inputStyle}
      />
      <button 
        onClick={handleFetchAnalysis} 
        style={buttonStyle}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
      >
        Fetch Analysis
      </button>
      {loading && <CircularProgress style={{ margin: '20px 0' }} />}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {results && (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Indexability
                  {<img src={aboutcard} alt="Description of the image" />}   

                </Typography>
                <Typography variant="body2">
                  {results.indexability}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Page Load Time
                </Typography>
                <Typography variant="body2">
                  {results.page_load_time}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Mobile Friendly
                </Typography>
                <Typography variant="body2">
                  {results.mobile_friendly}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Secure Connection
                </Typography>
                <Typography variant="body2">
                  {results.secure_connection}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default AnalyzeOptimization;
