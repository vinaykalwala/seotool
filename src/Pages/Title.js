import React, { useState } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

const WebsiteCrawler = () => {
    const [url, setUrl] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setUrl(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get('http://localhost:8000/get_title/', {
                params: { url }
            });
            setResults(response.data);
        } catch (err) {
            setError('Failed to fetch data');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Title Crawler</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="text"
                    value={url}
                    onChange={handleInputChange}
                    placeholder="Enter website URL"
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Crawl</button>
            </form>

            {loading && <CircularProgress style={styles.loader} />}
            {error && <p style={styles.error}>{error}</p>}
            {results.length > 0 && (
                <div style={styles.resultsContainer}>
                    <h2 style={styles.resultsHeader}>Results</h2>
                    <ul style={styles.resultsList}>
                        {results.map((result, index) => (
                            <li key={index} style={styles.resultItem}>
                                <h3 style={styles.resultUrl}>{result.url}</h3>
                                {result.error ? (
                                    <p style={styles.error}>Error: {result.error}</p>
                                ) : (
                                    <div>
                                        <p><strong>Title:</strong> {result.title || 'N/A'}</p>
                                        <p><strong>H1 Tag:</strong> {result.h1_tag || 'N/A'}</p>
                                        <p><strong>Meta Description:</strong> {result.meta_description || 'N/A'}</p>
                                        <p><strong>Word Count:</strong> {result.words_count}</p>
                                        <h4>Issues:</h4>
                                        <ul>
                                            {Object.entries(result.issues).map(([key, value]) => (
                                                <li key={key}>{value}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
    },
    header: {
        fontSize: '2.5rem',
        color: '#333',
    },
    form: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
    },
    input: {
        padding: '10px',
        fontSize: '1rem',
        width: '60%',
        marginRight: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '1rem',
        color: '#fff',
        backgroundColor: '#007BFF',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
    },
    loader: {
        marginTop: '20px',
    },
    error: {
        color: 'red',
        marginTop: '20px',
    },
    resultsContainer: {
        textAlign: 'left',
    },
    resultsHeader: {
        fontSize: '2rem',
        color: '#333',
        marginBottom: '10px',
    },
    resultsList: {
        listStyle: 'none',
        padding: '0',
    },
    resultItem: {
        padding: '10px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    resultUrl: {
        fontSize: '1.2rem',
        color: '#007BFF',
    }
};

export default WebsiteCrawler;
