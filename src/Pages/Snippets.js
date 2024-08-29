import React, { useState } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

const CheckSnippets = () => {
    const [url, setUrl] = useState('');
    const [snippets, setSnippets] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false); // Add loading state

    const handleFetchSnippets = async () => {
        setLoading(true); // Start loading
        try {
            const response = await axios.get(`http://localhost:8000/check_snippets/`, {
                params: { url }
            });
            setSnippets(response.data);
            setError(null);
        } catch (error) {
            setError(error.message);
            setSnippets(null);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    const containerStyle = {
        padding: '20px',
        maxWidth: '600px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center' // Center align the content
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
            <h1 style={{ color: '#333' }}>Check Snippets</h1>
            <input 
                type="text" 
                value={url} 
                onChange={(e) => setUrl(e.target.value)} 
                placeholder="Enter URL" 
                style={inputStyle}
            />
            <button 
                onClick={handleFetchSnippets} 
                style={buttonStyle}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
            >
                Fetch Snippets
            </button>
            {loading && <CircularProgress style={{ margin: '20px 0' }} />}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {snippets && (
                <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', textAlign: 'left', color: '#333' }}>
                    {JSON.stringify(snippets, null, 2)}
                </pre>
            )}
        </div>
    );
};

export default CheckSnippets;
