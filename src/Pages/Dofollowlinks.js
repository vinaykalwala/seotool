import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent,Box } from '@mui/material';

const Dofollow= () => {
  const [dofollowLinks, setDofollowLinks] = useState([]);

  useEffect(() => {
    const storedDofollowLinks = localStorage.getItem('dofollow');
    if (storedDofollowLinks) {
      setDofollowLinks(JSON.parse(storedDofollowLinks));
    }
  }, []);

  return (
    <Container maxWidth="lg" sx={{ marginTop: '40px' }}>
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
          <Typography variant="h4" component="h1" gutterBottom style={{ color: '#fff' }}>
          Do followlinks
          </Typography>
          <Typography variant="body1" style={{ color: '#fff' }}>
            External links are hyperlinks that point from one website to another, helping to establish credibility, drive traffic, and enhance the user experience. 
            They are also a critical component of SEO, contributing to a website's authority and relevance in search engine rankings.
          </Typography>
        </Box>
      <Grid container spacing={4}>
        {dofollowLinks.length > 0 ? (
          dofollowLinks.map((link, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#ff9800',
                  color: '#fff',
                  boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.1)',
                }}
              >
                <CardContent>
                  <Typography variant="h6" component="div">
                    Link {index + 1}
                  </Typography>
                  <Typography variant="body2" color="inherit" sx={{ wordBreak: 'break-word' }}>
                    {link}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="body1" align="center">
              No dofollow links found.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Dofollow;
