import React, { useEffect, useState } from 'react';
import { Typography, Card, CardContent, CardActions, Button, Grid, Container, Box } from '@mui/material';

const BrokenLinks = () => {
    const [brokenLinks, setBrokenLinks] = useState([]);

    useEffect(() => {
        const storedBrokenLinks = localStorage.getItem('brokenLinks');
        if (storedBrokenLinks) {
            try {
                setBrokenLinks(JSON.parse(storedBrokenLinks));
            } catch (error) {
                console.error('Error parsing broken links:', error);
            }
        }
    }, []);

    return (
        <div className="external-links">
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
                        Broken Links
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#fff' }}>
                        External links are hyperlinks that point from one website to another, helping to establish credibility, drive traffic, and enhance the user experience. 
                        They are also a critical component of SEO, contributing to a website's authority and relevance in search engine rankings.
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {brokenLinks.length > 0 ? (
                        brokenLinks.map((link, index) => (
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
                        <Typography>No Broken links found.</Typography>
                    )}
                </Grid>
            </Container>
        </div>
    );
};

export default BrokenLinks;
