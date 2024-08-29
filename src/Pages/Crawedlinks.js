import React, { useEffect, useState } from 'react';
import { Typography, Card, CardContent, CardActions, Button, Grid, Container, Box, Paper, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import aboutcard2 from '../assets/aboutcard2.png';
import aboutcard3 from '../assets/aboutcard3.png';
import image from '../assets/image.png';

const Canonicallinks = () => {
  const [crawledLinks, setCrawledLinks] = useState([]);
  const [crawledLinksCount, setCrawledLinksCount] = useState(0);

  useEffect(() => {
    const storedCrawledLinks = localStorage.getItem('crawledLinks');
    const storedCrawledLinksCount = localStorage.getItem('crawledLinksCount');

    if (storedCrawledLinks) {
      setCrawledLinks(JSON.parse(storedCrawledLinks));
    }

    if (storedCrawledLinksCount) {
      setCrawledLinksCount(parseInt(storedCrawledLinksCount, 10));
    }
  }, []);

  return (
    <div className="external-links">
      <Container maxWidth="lg" sx={{ marginTop: '60px' }}>
        {/* Header Section */}
        <Box
          sx={{
            backgroundColor: '#0288d1',
            padding: '30px',
            borderRadius: '8px',
            textAlign: 'center',
            marginBottom: '40px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#fff' }}>
            Optimize Your SEO Strategy with Comprehensive Crawled Link Analysis
          </Typography>
          <Typography variant="body1" sx={{ color: '#fff', maxWidth: '800px', margin: 'auto' }}>
            Discover, Analyze, and Improve Your Website’s Crawled Links for Maximum Search Engine Visibility. Master the art of managing crawled links to ensure every valuable page on your site is indexed and ranked.
          </Typography>
        </Box>

        {/* Navigation Buttons */}
        <Box
  sx={{
    marginBottom: '40px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Box shadow added here
    backgroundColor: '#f5f5f5' // Optional: Add a background color for better contrast
  }}
>
          <nav style={{ display: 'inline-flex', gap: '10px' }}>
            <Button variant="outlined" href="#links">
              Links
            </Button>
            <Link to="/admin/fullcontent/canonicallinks">
              <Button variant="outlined">Crawled Links</Button>
            </Link>
            <Button variant="outlined" href="#solution">
              Solution
            </Button>
          </nav>
        </Box>



        <Divider sx={{ marginBottom: '20px' }} />
<Typography
  variant="h5"
  component="div"
  sx={{
    marginBottom: '20px',
    textAlign: 'center',
    color: '#0288d1', // Added color for better emphasis
    fontWeight: 'bold', // Bold font for the title
  }}
>
  Total Crawled Links Count: {crawledLinksCount}
</Typography>

<Grid container spacing={4}>
  {crawledLinks.length > 0 ? (
    crawledLinks.map((link, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Card
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#ff9800',
            color: '#fff',
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px', // Rounded corners for the card
            transition: 'transform 0.3s', // Smooth hover effect
            '&:hover': {
              transform: 'scale(1.05)', // Scale up on hover
            },
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              component="div"
              sx={{
                marginBottom: '10px',
                fontWeight: 'bold', // Bold font for the link title
                textTransform: 'uppercase', // Uppercase text for emphasis
              }}
            >
              Link {index + 1}
            </Typography>
            <Typography
              variant="body2"
              color="inherit"
              sx={{
                wordBreak: 'break-word',
                lineHeight: '1.5', // Increased line height for better readability
              }}
            >
              {link}
            </Typography>
          </CardContent>
          <CardActions sx={{ marginTop: 'auto' }}>
            <Button
              size="small"
              color="inherit"
              href={link}
              target="_blank"
              sx={{
                textTransform: 'none',
                fontWeight: 'bold',
                backgroundColor: '#fff', // White background for the button
                color: '#ff9800', // Button text color
                borderRadius: '4px', // Rounded corners for the button
                padding: '5px 15px', // Padding inside the button
                transition: 'background-color 0.3s', // Smooth color transition
                '&:hover': {
                  backgroundColor: '#0288d1', // Change color on hover
                  color: '#fff', // Change text color on hover
                },
              }}
            >
              Open Link
            </Button>
          </CardActions>
        </Card>
      </Grid>
    ))
  ) : (
    <Grid item xs={12}>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: '#0288d1', // Emphasize the no links message
          fontStyle: 'italic', // Italicize the message
        }}
      >
        No crawled links found.
      </Typography>
    </Grid>
  )}
</Grid>















        {/* Image Section */}
        <Grid container spacing={4} sx={{ marginBottom: '40px' }}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ borderRadius: '8px' }}>
              <img src={aboutcard2} alt="SEO Analysis" style={{ width: '100%', borderRadius: '8px' }} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ borderRadius: '8px' }}>
              <img src={aboutcard3} alt="Link Crawling" style={{ width: '100%', borderRadius: '8px' }} />
            </Paper>
          </Grid>
        </Grid>

        {/* Content Section */}
        <Box
  sx={{
    marginBottom: '40px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Box shadow added here
    backgroundColor: '#f5f5f5' // Optional: Add a background color for better contrast
  }}
>
          <Typography variant="h4" component="h2" sx={{ marginBottom: '20px' }}>
            What Are Crawled Links?
          </Typography>
          <Typography variant="body1" paragraph>
            Crawled links are the URLs that search engine bots have accessed, analyzed, and included in their index. When a search engine "crawls" a link, it follows the link to discover and index the content of the page it leads to. Effective management of your crawled links ensures that all important pages on your website are indexed and accessible to users via search engine results.
          </Typography>
          <Typography variant="h4" component="h2" sx={{ marginBottom: '20px' }}>
            Why Crawled Links Matter
          </Typography>
          <ul style={{ marginLeft: '20px' }}>
            <li>
              <Typography variant="body1" paragraph>
                <strong>Maximize Search Engine Visibility:</strong> Ensuring that all critical pages are crawled and indexed by search engines is essential for maximizing your site’s visibility in search results. Uncrawled links can result in important content being missed by search engines.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                <strong>Identify Crawling Issues:</strong> Analyzing crawled links can help you identify issues that prevent certain pages from being crawled, such as blocked URLs, incorrect robots.txt rules, or server errors.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                <strong>Optimize Crawl Budget:</strong> Search engines allocate a limited crawl budget to each website. By understanding which links are being crawled, you can optimize your site structure to prioritize the crawling of high-value pages.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                <strong>Ensure Content Discovery:</strong> Regularly monitoring your crawled links ensures that all your valuable content is being discovered and indexed by search engines, increasing the chances of ranking well.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                <strong>Improve User Experience:</strong> By ensuring that all important pages are crawled and indexed, you help users find the most relevant content on your site through search engines, improving their overall experience.
              </Typography>
            </li>
          </ul>
        </Box>

        {/* New Added Section - Best Practices */}
        <Box
  sx={{
    marginBottom: '40px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Box shadow added here
    backgroundColor: '#f5f5f5' // Optional: Add a background color for better contrast
  }}
>
  <Typography variant="h4" component="h2" sx={{ marginBottom: '20px' }}>
    Best Practices for Managing Crawled Links
  </Typography>
  <Typography variant="body1" paragraph>
    To ensure your website is fully optimized for search engines, follow these best practices for managing crawled links:
  </Typography>
  <ul style={{ marginLeft: '20px' }}>
    <li>
      <Typography variant="body1" paragraph>
        <strong>Regularly Update Your Sitemap:</strong> Ensure your XML sitemap is always up to date, so search engines are aware of all the pages on your site that need to be crawled.
      </Typography>
    </li>
    <li>
      <Typography variant="body1" paragraph>
        <strong>Monitor Crawl Errors:</strong> Use tools like Google Search Console to monitor and fix any crawl errors that search engines encounter.
      </Typography>
    </li>
    <li>
      <Typography variant="body1" paragraph>
        <strong>Optimize Internal Linking:</strong> A strong internal linking structure helps search engines discover and crawl all the important pages on your website.
      </Typography>
    </li>
    <li>
      <Typography variant="body1" paragraph>
        <strong>Use Robots.txt Wisely:</strong> Ensure that your robots.txt file is correctly configured to allow search engines to crawl important pages while blocking those that should remain private.
      </Typography>
    </li>
    <li>
      <Typography variant="body1" paragraph>
        <strong>Reduce Duplicate Content:</strong> Minimize duplicate content on your site to avoid wasting your crawl budget on unnecessary pages.
      </Typography>
    </li>
  </ul>
</Box>

        {/* Crawled Links Section */}
   
      </Container>
    </div>
  );
};

export default Canonicallinks;
