import React, { useState, useEffect } from 'react';
import { Typography, Card, CardContent, CardActions, Button, Grid, Container, Box } from '@mui/material';

const NonIndexedUrls = () => {
  const [nonIndexedUrls, setNonIndexedUrls] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('nonIndex');
    if (storedData) {
      setNonIndexedUrls(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="non-indexed-urls">
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
          <Typography variant="h5" component="h1" gutterBottom sx={{ color: '#fff' }}>
            Non-Indexed URLs
          </Typography>
          <Typography variant="body1" sx={{ color: '#fff' }}>
            These URLs have not been indexed by search engines.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {nonIndexedUrls.length > 0 ? (
            nonIndexedUrls.map((link, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'orange', color: '#fff' }}>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {index + 1}
                    </Typography>
                    <Typography variant="body2" color="inherit" sx={{ wordBreak: 'break-word' }}>
                      {link}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ marginTop: 'auto' }}>
                    <Button size="small" color="inherit" href={link} target="_blank" sx={{ textTransform: 'none', fontWeight: 'bold' }}>
                      Open Link
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography>No Non-Indexed URLs found.</Typography>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default NonIndexedUrls;
