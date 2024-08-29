import React, { useState } from 'react';
import axios from 'axios';

const CrawlWebsite = () => {
  const [url, setUrl] = useState('');
  const [maxPages, setMaxPages] = useState(50);
  const [crawlData, setCrawlData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCrawl = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('http://localhost:8000/headings/', {
        params: {
          url: url,
          max_pages: maxPages
        }
      });
      setCrawlData(response.data.crawl_data);
    } catch (err) {
      setError('An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Crawl Website</h1>
      <div>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
        />
        <input
          type="number"
          value={maxPages}
          onChange={(e) => setMaxPages(e.target.value)}
          placeholder="Max Pages"
        />
        <button onClick={handleCrawl}>Fetch Data</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {crawlData && (
        <div>
          <h2>Crawled Data</h2>
          {crawlData.map((page, index) => (
            <div key={index}>
              <h3>{page.url}</h3>
              <p><strong>Headings:</strong></p>
              <ul>
                {Object.entries(page.headings).map(([level, count]) => (
                  <li key={level}>{level}: {count}</li>
                ))}
              </ul>
              <p><strong>Meta Tags:</strong></p>
              <ul>
                {Object.entries(page.meta_tags).map(([tag, count]) => (
                  <li key={tag}>{tag}: {count}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CrawlWebsite;
