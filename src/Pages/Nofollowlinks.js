import React, { useEffect, useState } from 'react';
import { Typography, Card, CardContent, CardActions, Button, Grid, Container, Box } from '@mui/material';

const NofollowLinks = () => {
    const [nofollowLinks, setNofollowLinks] = useState([]);

    useEffect(() => {
        const storedNofollowLinks = localStorage.getItem('nofollow');
        if (storedNofollowLinks) {
            try {
                setNofollowLinks(JSON.parse(storedNofollowLinks));
            } catch (error) {
                console.error('Error parsing nofollow links:', error);
            }
        }
    }, []);

    return (
        <div className="nofollow-links">
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
                        Nofollow Links
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#fff' }}>
                        Nofollow links are hyperlinks with a `rel="nofollow"` attribute, instructing search engines not to follow these links. They do not pass on SEO benefits but are still valuable in certain contexts.
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {nofollowLinks.length > 0 ? (
                        nofollowLinks.map((link, index) => (
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
                        <Typography>No Nofollow links found.</Typography>
                    )}
                </Grid>
            </Container>
        </div>
    );
};

export default NofollowLinks;
