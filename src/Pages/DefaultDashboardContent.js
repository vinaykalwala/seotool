import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import { FaChartLine, FaCog, FaRocket } from 'react-icons/fa';
import { CanvasJSChart } from 'canvasjs-react-charts';
import { Box, Typography } from '@mui/material';
import { Bar as BarChartJS } from 'react-chartjs-2';
import  { useEffect, useState } from 'react';

const seoData = [
  { name: 'Jan', keywordRank: 20, traffic: 400 },
  { name: 'Feb', keywordRank: 25, traffic: 500 },
  { name: 'Mar', keywordRank: 15, traffic: 600 },
  { name: 'Apr', keywordRank: 30, traffic: 700 },
  { name: 'May', keywordRank: 10, traffic: 800 },
];

const cardsData = [
  {
    icon: <FaChartLine size={50} color="#4caf50" />,
    heading: 'Analytics',
    text: '75.5%',
  },
  {
    icon: <FaCog size={50} color="#ff9800" />,
    heading: 'Optimization',
    text: '82.6%',
  },
  {
    icon: <FaRocket size={50} color="#2196f3" />,
    heading: 'Performance',
    text: '92.3%',
  },
  {
    icon: <FaRocket size={50} color="#2196f3" />,
    heading: 'Performance',
    text: '101.3%',
  },
];

const pieOptions = {
  exportEnabled: true,
  animationEnabled: true,
  title: {
    text: "Website Traffic Sources"
  },
  data: [{
    type: "pie",
    startAngle: 75,
    toolTipContent: "<b>{label}</b>: {y}%",
    showInLegend: "true",
    legendText: "{label}",
    indexLabelFontSize: 16,
    indexLabel: "{label} - {y}%",
    dataPoints: [
      { y: 18, label: "Direct" },
      { y: 49, label: "Organic Search" },
      { y: 9, label: "Paid Search" },
      { y: 5, label: "Referral" },
      { y: 19, label: "Social" }
    ]
  }]
};

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Word',
      data: [20000, 15000, 10000, 15000, 25000, 10000, 15000, 5000, 15000, 40000, 10000, 20000],
      backgroundColor: 'rgba(54, 162, 235, 0.6)', // Blue color
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
    {
      label: 'Image',
      data: [10000, 20000, 15000, 10000, 20000, 15000, 10000, 5000, 10000, 25000, 5000, 15000],
      backgroundColor: 'rgba(255, 159, 64, 0.6)', // Orange color
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 1,
    },
  ],
};



const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 10000,
      },
    },
  },
};

const generatedContentOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 10000,
      },
    },
  },
};

const SEOStats = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    setUsername(storedUsername);
  }, []);

  return (
    <div className='container-fluid' style={{ color: 'orangered', padding: '20px' }}>
      <h3>Welcome {username}!!!</h3>
      <p className='lead'>Here are your current SEO metrics and trends:</p>

      <div className='card-container'>
        <div className='row'>
          {cardsData.map((card, index) => (
            <div key={index} className='col-md-3'>
              <div className='card'>
                <div className='card-icon'>{card.icon}</div>
                <h5 className='card-heading'>{card.heading}</h5>
                <p className='card-text'>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='row'>
        <div className='col-md-6'>
          <h4>Keyword Rankings</h4>
          <LineChart
            width={500}
            height={300}
            data={seoData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="keywordRank" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </div>
        <div className='col-md-6'>
          <h4>Traffic Trends</h4>
          <LineChart
            width={500}
            height={300}
            data={seoData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="traffic" stroke="#82ca9d" activeDot={{ r: 8 }} />
          </LineChart>
        </div>
      </div>

      <div className='row mt-4'>
        <div className='col-md-12'>
          <h4>SEO Insights</h4>
          <ul>
            <li><strong>Top Performing Keywords:</strong> Keyword A, Keyword B, Keyword C</li>
            <li><strong>Areas for Improvement:</strong> Keyword D, Keyword E</li>
            <li><strong>Monthly Growth:</strong> 15% increase in organic traffic</li>
          </ul>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h4>SEO Bar Chart</h4>
            <BarChart
              width={500}
              height={300}
              data={seoData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="keywordRank" fill="#8884d8" />
              <Bar dataKey="traffic" fill="#82ca9d" />
            </BarChart>
          </div>
          <div className='col-md-6'>
            <h4>Website Traffic Sources</h4>
            <CanvasJSChart options={pieOptions} />
          </div>
        </div>
      </div>
      
      <Box p={2} width="100%" height="400px">
        <Typography variant="h6" mb={2}>
          Generated Content
        </Typography>
        <BarChartJS data={data} options={generatedContentOptions} />
      </Box>
    </div>
 );
};

export default SEOStats;