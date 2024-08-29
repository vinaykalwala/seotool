import React, { useState, useEffect } from 'react';
import { Typography, Card, CardContent, CardActions, Button, Grid, Container, Box } from '@mui/material';

const IndexedUrls = () => {
  const [indexedUrls, setIndexedUrls] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('index');
    if (storedData) {
      setIndexedUrls(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="indexed-urls">
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
            Indexed URLs
          </Typography>
          <Typography variant="body1" sx={{ color: '#fff' }}>
            These URLs have been successfully indexed by search engines.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {indexedUrls.length > 0 ? (
            indexedUrls.map((link, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'green', color: '#fff' }}>
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
            <Typography>No Indexed URLs found.</Typography>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default IndexedUrls;
