import React, { useEffect, useState } from 'react';

const TotalHtmlPages = () => {
  const [data, setData] = useState({ count: 0, links: [] });

  useEffect(() => {
    const storedData = localStorage.getItem('totalHtmlPages');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div>
      <h1>Total HTML Pages</h1>
      <p>Total HTML Pages Count: {data.count}</p>
      <h2>Links:</h2>
      <ul>
        {data.links.map((link, index) => (
          <li key={index}>
            <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TotalHtmlPages;
