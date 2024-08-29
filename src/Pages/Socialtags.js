// src/components/SocialTags.js
import React, { useState } from 'react';
import { fetchSocialTags } from '../api';
import { ThreeDots } from 'react-loader-spinner';
import { Pie } from 'react-chartjs-2';

const SocialTags = () => {
  const [url, setUrl] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  const handleFetch = async () => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const data = await fetchSocialTags(url);
      setData(data);
      setLoading(false);
    } catch (err) {
      setError(err.response ? err.response.data : 'Error fetching data');
      setLoading(false);
    }
  };

  const handleCardClick = (card) => {
    setExpandedCard(expandedCard === card ? null : card);
  };

  const generatePieData = (labels, values) => ({
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: ['#FF6347', '#FFA07A', '#FF4500', '#FFD700', '#FF1493', '#FF8C00'],
      },
    ],
  });

  return (
    <div>
      <h1>Social Tags Analyzer</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
      />
      <button onClick={handleFetch}>Fetch Social Tags</button>

      {loading && (
        <div className="spinner">
          <ThreeDots color="#00BFFF" height={80} width={80} />
        </div>
      )}

      {error && <div style={{ color: 'red' }}>{error}</div>}

      {data && (
        <div className="card-container">
          <div className="card">
            <h2 onClick={() => handleCardClick('indexable_pages')}>Indexable Pages ({data.indexable_pages.length})</h2>
            {expandedCard === 'indexable_pages' && (
              <ul>
                {data.indexable_pages.map((page, index) => (
                  <li key={index}>
                    <a href={page.url} target="_blank" rel="noopener noreferrer">{page.title || page.url}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="card">
            <h2 onClick={() => handleCardClick('incomplete_og_tags')}>Incomplete Open Graph Tags ({data.incomplete_og_tags.length})</h2>
            {expandedCard === 'incomplete_og_tags' && (
              <ul>
                {data.incomplete_og_tags.map((page, index) => (
                  <li key={index}>
                    <a href={page.url} target="_blank" rel="noopener noreferrer">{page.title || page.url}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="card">
            <h2 onClick={() => handleCardClick('incomplete_twitter_cards')}>Incomplete Twitter Cards ({data.incomplete_twitter_cards.length})</h2>
            {expandedCard === 'incomplete_twitter_cards' && (
              <ul>
                {data.incomplete_twitter_cards.map((page, index) => (
                  <li key={index}>
                    <a href={page.url} target="_blank" rel="noopener noreferrer">{page.title || page.url}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="card">
            <h2 onClick={() => handleCardClick('pages_missing_social_tags')}>Pages Missing Social Tags ({data.pages_missing_social_tags.length})</h2>
            {expandedCard === 'pages_missing_social_tags' && (
              <ul>
                {data.pages_missing_social_tags.map((page, index) => (
                  <li key={index}>
                    <a href={page.url} target="_blank" rel="noopener noreferrer">{page.title || page.url}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {data && (
            <div>
              <div className="chart-container">
                <h2>Basic Open Graph Tags Implementation Status</h2>
                <Pie
                  data={generatePieData(['Implemented', 'Not Implemented'], [
                    data.basic_og_implemented || 0,
                    data.basic_og_not_implemented || 0,
                  ])}
                  options={{ maintainAspectRatio: false }}
                />
              </div>

              {data.og_types && data.og_types.labels && (
                <div className="chart-container">
                  <h2>Open Graph Type Distribution</h2>
                  <Pie
                    data={generatePieData(data.og_types.labels, data.og_types.values)}
                    options={{ maintainAspectRatio: false }}
                  />
                </div>
              )}

              {data.og_tags && data.og_tags.labels && (
                <div className="chart-container">
                  <h2>Open Graph Tags Distribution</h2>
                  <Pie
                    data={generatePieData(data.og_tags.labels, data.og_tags.values)}
                    options={{ maintainAspectRatio: false }}
                  />
                </div>
              )}

              <div className="chart-container">
                <h2>Basic Twitter Card Tags Implementation Status</h2>
                <Pie
                  data={generatePieData(['Implemented', 'Not Implemented'], [
                    data.basic_twitter_implemented || 0,
                    data.basic_twitter_not_implemented || 0,
                  ])}
                  options={{ maintainAspectRatio: false }}
                />
              </div>

              {data.twitter_types && data.twitter_types.labels && (
                <div className="chart-container">
                  <h2>Twitter Card Types Distribution</h2>
                  <Pie
                    data={generatePieData(data.twitter_types.labels, data.twitter_types.values)}
                    options={{ maintainAspectRatio: false }}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SocialTags;
