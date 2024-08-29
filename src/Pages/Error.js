import React, { useState } from 'react';

function ErrorLinkExtractor() {
    const [url, setUrl] = useState('');
    const [totalLinks, setTotalLinks] = useState(0);
    const [brokenLinks, setBrokenLinks] = useState({});
    const [error, setError] = useState('');

    const extractErrorLinks = async () => {
        try {
            if (!url.trim()) {
                throw new Error('URL is required');
            }
            const response = await fetch(`http://localhost:8000/errorlinks/?url=${encodeURIComponent(url)}`);
            if (!response.ok) {
                throw new Error('Failed to fetch error links');
            }
            const data = await response.json();
            setTotalLinks(data.total_links);
            setBrokenLinks(data.broken_links);
            setError('');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={url} 
                onChange={(e) => setUrl(e.target.value)} 
                placeholder="Enter URL" 
            />
            <button onClick={extractErrorLinks}>Extract Error Links</button>
            {error && <p>Error: {error}</p>}
            <p>Total Links: {totalLinks}</p>
            <h2>Broken Links:</h2>
            <ul>
                {Object.entries(brokenLinks).map(([link, status]) => (
                    <li key={link}>{link} - Status: {status}</li>
                ))}
            </ul>
        </div>
    );
}

export default ErrorLinkExtractor;
