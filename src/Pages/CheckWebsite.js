// CheckWebsite.js
import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { checkwebsite } from '../api';

Chart.register(ArcElement, Tooltip, Legend);

const CheckWebsite = () => {
  const [url, setUrl] = useState('');
  const [details, setDetails] = useState(null);
  const [messages, setMessages] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const fetchData = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const data = await checkwebsite(url);
      setDetails(data);
      setError(null); // Clear any previous errors
    } catch (error) {
      setError(error.message);
      setDetails(null); // Clear details if there's an error
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    if (details) {
      setMessages(details);
    }
  }, [details]);

  const getPieChartData = (message) => {
    if (message === 'The webpage is accessible') {
      return [100, 0];
    } else {
      return [0, 100];
    }
  };

  const accessibilityData = getPieChartData(messages.accessibility);
  const dnsData = getPieChartData(messages.dns);

  const data = {
    labels: ['Accessible', 'Not Accessible'],
    datasets: [
      {
        label: 'Accessibility',
        data: accessibilityData,
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const dnsChartData = {
    labels: ['Accessible', 'Not Accessible'],
    datasets: [
      {
        label: 'DNS',
        data: dnsData,
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div>
      <h1>Check Website</h1>
      <form onSubmit={fetchData}>
        <input
          type="text"
          value={url}
          onChange={handleInputChange}
          placeholder="Enter website URL"
        />
        <button type="submit" disabled={loading}>
          Check Website
        </button>
      </form>
      {loading && <CircularProgress />}
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      {messages.accessibility && !error && (
        <div>
          <h2>Accessibility Message</h2>
          <p>{messages.accessibility}</p>
          <div className='col-md-4'>
            <Pie data={data} options={options} />
          </div>
        </div>
      )}
      {messages.dns && !error && (
        <div>
          <h2>DNS Message</h2>
          <p>{messages.dns}</p>
          <div className='col-md-4'>
            <Pie data={dnsChartData} options={options} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckWebsite;
