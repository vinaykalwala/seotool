import React, { useState } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { seoanalysis } from '../api';

const SeoAnalysis = () => {
    const [url, setUrl] = useState('');
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading
        try {
            const data = await seoanalysis(url);
            setDetails(data);
            setError(null); // Clear any previous errors
        } catch (error) {
            setError(error.message);
            setDetails(null); // Clear details if there's an error
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h3 style={{ textAlign: 'center' }}>SEO Analysis</h3>
            <form onSubmit={fetchData} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter URL"
                    style={{
                        width: '300px',
                        padding: '10px',
                        marginBottom: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc'
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: '10px 20px',
                        borderRadius: '5px',
                        border: 'none',
                        backgroundColor: '#007BFF',
                        color: 'white',
                        cursor: 'pointer'
                    }}
                >
                    Analyze
                </button>
            </form>

            {loading && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <CircularProgress />
                </div>
            )}
            {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}
            {details && (
                <div style={{ marginTop: '20px' }}>
                    <h3>SEO Analysis Results:</h3>
                    <pre style={{
                        whiteSpace: 'pre-wrap',
                        wordWrap: 'break-word',
                        backgroundColor: '#f7f7f7',
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc'
                    }}>
                        {JSON.stringify(details, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
};

export default SeoAnalysis;
