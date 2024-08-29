import React, { useEffect, useState } from 'react';
import { Typography, Card, CardContent, CardActions, Button, Grid, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const NonCanonicallinks = () => {
    const [nonCanonicalLinks, setNonCanonicalLinks] = useState([]);

    useEffect(() => {
        // Update the key to 'nonCanonicalLinks' to match the key used when saving to localStorage
        const storedNonCanonicalLinks = localStorage.getItem('nonCanonicalLinks');
        if (storedNonCanonicalLinks) {
            setNonCanonicalLinks(JSON.parse(storedNonCanonicalLinks));
        }
    }, []);

    return (
        <div className="non-canonical-links">
            <Container maxWidth="lg" sx={{ marginTop: '60px' }}>
                <Box
                    sx={{
                        backgroundColor: '#0288d1',
                        padding: '20px',
                        borderRadius: '8px',
                        textAlign: 'center',
                        marginBottom: '30px',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#fff' }}>
                        Non-canonical Links
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#fff' }}>
                        Non-canonical links are hyperlinks that do not follow the standard or preferred URL structure. 
                        Proper management of these links can help in maintaining site integrity and improving SEO performance.
                    </Typography>
                </Box>

                <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
                    <nav style={{ display: 'inline-flex', gap: '10px' }}>
                        <Button variant="outlined" href="#links">
                            Links
                        </Button>
                        <Link to="/admin/fullcontent/externallinks">
                            <Button variant="outlined">External Links</Button>
                        </Link>
                        <Button variant="outlined" href="#solution">
                            Solution
                        </Button>
                    </nav>
                </Box>

                <Grid container spacing={4}>
                    {nonCanonicalLinks.length > 0 ? (
                        nonCanonicalLinks.map((link, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        backgroundColor: 'orange',
                                        color: '#fff',
                                        boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.1)',
                                    }}
                                >
                                    <CardContent>
                                        <Typography variant="h6" component="div">
                                            {index + 1}
                                        </Typography>
                                        <Typography variant="body2" color="inherit" sx={{ wordBreak: 'break-word' }}>
                                            {link}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ marginTop: 'auto' }}>
                                        <Button
                                            size="small"
                                            color="inherit"
                                            href={link}
                                            target="_blank"
                                            sx={{ textTransform: 'none', fontWeight: 'bold' }}
                                        >
                                            Open Link
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))
                    ) : (
                        <Typography>No non-canonical links found.</Typography>
                    )}
                </Grid>
            </Container>
        </div>
    );
};

export default NonCanonicallinks;
