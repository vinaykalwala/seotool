import React, { useEffect, useState } from 'react';
import { Typography, Card, CardContent, Grid, Container,Box } from '@mui/material';

const NonHtmlLinks = () => {
    const [nonHtmlLinks, setNonHtmlLinks] = useState([]);

    useEffect(() => {
        const storedNonHtmlLinks = localStorage.getItem('nonHtmlLinks');
        if (storedNonHtmlLinks) {
            setNonHtmlLinks(JSON.parse(storedNonHtmlLinks));
        }
    }, []);

    return (
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
          <Typography variant="h4" component="h1" gutterBottom style={{ color: '#fff' }}>
Non Htmlfiles          </Typography>
          <Typography variant="body1" style={{ color: '#fff' }}>
            External links are hyperlinks that point from one website to another, helping to establish credibility, drive traffic, and enhance the user experience. 
            They are also a critical component of SEO, contributing to a website's authority and relevance in search engine rankings.
          </Typography>
        </Box>
            <Grid container spacing={4}>
  {nonHtmlLinks.length > 0 ? (
    nonHtmlLinks.map((link, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Card
          sx={{
            backgroundColor: '#ff6b6b',
            color: '#fff',
            borderRadius: '15px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <CardContent>
            <Typography
              variant="body2"
              color="inherit"
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              {link}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))
  ) : (
    <Typography variant="body2" sx={{ color: '#999', fontStyle: 'italic' }}>
      No non-HTML links found.
    </Typography>
  )}
</Grid>

            {/* Additional Content Section */}
            <Typography variant="h6" sx={{ marginTop: '40px', color: '#ff6347' }} gutterBottom>
            Optimize Your Non-HTML Pages for Better Web Performance
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Card sx={{ backgroundColor: '#f5f5f5', color: '#333' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Ensure Your Non-HTML Assets Are Properly Managed for SEO and User Experience
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Non-HTML pages refer to web assets and content that are not written in HTML. These include files like PDFs, images, videos, JavaScript files, CSS files, and other multimedia or document types that are crucial to your website’s functionality and user experience.
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                Why Non-HTML Pages Matter
                            </Typography>
                            <Typography variant="body2">
                                1. Search Engine Indexing: Non-HTML pages can be indexed by search engines.
                                <br />
                                2. Content Accessibility: Optimized non-HTML content ensures accessibility.
                                <br />
                                3. Load Times and Performance: Large files can slow down your website.
                                <br />
                                4. Security and Compliance: Files must be secured and optimized.
                                <br />
                                5. File Optimization: Compressing files reduces bandwidth usage.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card sx={{ backgroundColor: '#e0e0e0', color: '#333' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Key Metrics to Analyze Non-HTML Pages
                            </Typography>
                            <Typography variant="body2">
                                1. File Size and Compression: Monitor and optimize file sizes.
                                <br />
                                2. Metadata and Alt Text: Ensure proper metadata for SEO.
                                <br />
                                3. Crawlability: Ensure accessibility to search engine crawlers.
                                <br />
                                4. Security Settings: Secure sensitive documents.
                                <br />
                                5. Mobile Optimization: Optimize for mobile devices.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card sx={{ backgroundColor: '#d1c4e9', color: '#333' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Best Practices for Optimizing Non-HTML Pages
                            </Typography>
                            <Typography variant="body2">
                                1. Optimize File Sizes: Compress files for faster load times.
                                <br />
                                2. Use Descriptive Metadata: Improve SEO with proper metadata.
                                <br />
                                3. Manage Crawlability: Control indexing with robots.txt.
                                <br />
                                4. Enhance Security: Secure files to prevent unauthorized access.
                                <br />
                                5. Mobile Optimization: Ensure a seamless experience on mobile.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default NonHtmlLinks;
