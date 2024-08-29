import React, { useEffect, useState } from 'react';
import { Typography, Card, CardContent, CardActions, Button, Grid } from '@mui/material';
import { Container, Box, List, ListItem, ListItemText, Divider } from '@mui/material';
import organic from '../assets/organic.svg';

const InternalLinks = () => {
  const [internalLinks, setInternalLinks] = useState([]);

  useEffect(() => {
    // Retrieve internal links from local storage
    const storedLinks = localStorage.getItem('internalLinks');
    if (storedLinks) {
      setInternalLinks(JSON.parse(storedLinks));
    }
  }, []); // Empty dependency array ensures this runs only on component mount

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Contact Us', path: '/contact-us' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
  ];

  const data = [
    { domain: 'lwb.com', results: 10, serpFeatures: 5, pa: 50, links: 100, sov: 20 },
    { domain: 'play.google.com', results: 15, serpFeatures: 8, pa: 70, links: 200, sov: 30 },
    { domain: 'www.ebay.com', results: 20, serpFeatures: 10, pa: 60, links: 150, sov: 25 },
    { domain: 'www.amazon.com', results: 25, serpFeatures: 12, pa: 80, links: 250, sov: 35 },
  ];
  const seoTips = [
    "Link to Important Pages: Ensure that your most important pages, such as those with high conversion rates or valuable content, receive multiple internal links.",
    "Use Descriptive Anchor Text: Instead of using 'click here,' use descriptive anchor text that includes relevant keywords to improve both usability and SEO.",
    "Avoid Overloading Pages with Links: While internal linking is beneficial, avoid adding too many links on a single page, as this can overwhelm users and dilute link equity.",
    "Regularly Update Internal Links: As your site grows, periodically review and update internal links to ensure they are still relevant and pointing to the best content.",
  ];
  return (
    <div className="internal-links">
      <div style={{ marginBottom: '20px' }}>
        <nav style={{ display: 'flex', gap: '10px' }}>
          {/* Navigation buttons can go here */}
        </nav>
      </div>

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
            Internal Links
          </Typography>
          <Typography variant="body1" style={{ color: '#fff' }}>
            External links are hyperlinks that point from one website to another, helping to establish credibility, drive traffic, and enhance the user experience. 
            They are also a critical component of SEO, contributing to a website's authority and relevance in search engine rankings.
          </Typography>
        </Box>
      <br /><br />

      <Grid container spacing={2}>
        {internalLinks.length > 0 ? (
          internalLinks.map((link, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="body2" color="textSecondary">
                    {link}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href={link} target="_blank">
                    Open Link
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography>No internal links found.</Typography>
        )}
      </Grid>

      <div className="container">
        <h5>Why AGS?</h5>
        <p>You will be part of a company that values your talent and motivates you to push boundaries and grow.</p>
        <p><strong>Join Us if you are up for</strong></p>
        <div className="benefits">
          <div className="benefit">Dynamic</div>
          <div className="benefit">Youthful Culture</div>
          <div className="benefit">Merit-based work environment</div>
          <div className="benefit">Fair compensation & benefits</div>
          <div className="benefit">Working for Industry Leaders</div>
        </div>
      </div>

      <div className="container1">
        <div className="serp-analysis">
          <h5>SERP Analysis</h5>
          <table>
            <thead>
              <tr>
                <th>Domain</th>
                <th>Results</th>
                <th>SERP Features</th>
                <th>PA</th>
                <th>Links</th>
                <th>Share of Voice</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.domain}</td>
                  <td>{item.results}</td>
                  <td>{item.serpFeatures}</td>
                  <td>{item.pa}</td>
                  <td>{item.links}</td>
                  <td>{item.sov}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div><br /><br />

        <div className="row">
          <div className="col-md-6">
            <h5>Analyze competitors on the SERP</h5>
            <p>Analyze the SEO signals of your competition in the results:</p>
            <ul>
              <li>Page Authority Score</li>
              <li>Referring domains</li>
              <li>Backlinks</li>
              <li>Search Traffic</li>
            </ul>
          </div>
          <div className="col-md-6">
            <img src={organic} alt="Description of the image" />
          </div>
        </div>

        <Container maxWidth="md" style={{ marginTop: '30px' }}>
          <Box sx={{ backgroundColor: '#FFA500', padding: '20px', borderRadius: '8px' }}>
            <Typography variant="h4" component="h1" gutterBottom style={{ color: 'white', textAlign: 'center' }}>
              Internal Links
            </Typography>
            <Typography variant="body1" style={{ color: 'white', marginTop: '10px', textAlign: 'center' }}>
              Explore the different sections of our website through the links below. Internal linking helps you navigate seamlessly and allows search engines to crawl our site more effectively.
            </Typography>
          </Box>
          <List component="nav" aria-label="internal links" sx={{ marginTop: '20px' }}>
            {links.map((link, index) => (
              <React.Fragment key={index}>
                <ListItem button component="a" href={link.path}>
                  <ListItemText primary={link.name} />
                </ListItem>
                {index < links.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
          <Box sx={{ marginTop: '40px' }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Why Internal Links are Important for SEO
            </Typography>
            <Typography variant="body1" paragraph>
              Internal links are essential for both user experience and SEO. They guide visitors through your website, helping them find the information they need. At the same time, internal links allow search engines to discover and index your content more efficiently.
            </Typography>
            <Typography variant="body1" paragraph>
              By linking related content, you can distribute page authority and ranking power across different pages. This ensures that even deeper pages get indexed and have the opportunity to rank in search engine results pages (SERPs).
            </Typography>
            <Typography variant="body1" paragraph>
              Use internal links strategically by linking to important pages from your homepage, navigation menus, and within your content. This not only improves navigation but also enhances the overall SEO performance of your website.
            </Typography>
          </Box>
        </Container>


        <Container maxWidth="md" style={{ marginTop: '30px' }}>
        <Box sx={{ backgroundColor: '#FFA500', padding: '20px', borderRadius: '8px' }}>
          <Typography variant="h4" component="h1" gutterBottom style={{ color: 'white', textAlign: 'center' }}>
            Why Internal Links Matter
          </Typography>
          <Typography variant="body1" style={{ color: 'white', marginTop: '10px', textAlign: 'center' }}>
            Internal links are a powerful tool in your SEO arsenal, helping both users and search engines navigate your site more effectively.
          </Typography>
        </Box>

        <List component="nav" aria-label="internal links" sx={{ marginTop: '20px' }}>
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <ListItem button component="a" href={link.path}>
                <ListItemText primary={link.name} />
              </ListItem>
              {index < links.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>

        <Box sx={{ marginTop: '40px' }}>
          <Typography variant="h5" component="h2" gutterBottom>
            How to Optimize Internal Links
          </Typography>
          <Typography variant="body1" paragraph>
            Internal links are not just about linking random pages. They should be used strategically to enhance the user experience and improve your site's SEO performance.
          </Typography>
          <List>
            {seoTips.map((tip, index) => (
              <ListItem key={index}>
                <ListItemText primary={tip} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box sx={{ marginTop: '40px' }}>
          <Typography variant="h5" component="h2" gutterBottom>
            The Role of Internal Links in SEO
          </Typography>
          <Typography variant="body1" paragraph>
            Internal links help distribute page authority and ranking power across your site. By linking related content, you can help search engines understand the structure of your site and prioritize your most valuable pages.
          </Typography>
          <Typography variant="body1" paragraph>
            They also play a crucial role in user engagement. Well-placed internal links keep visitors on your site longer by guiding them to related content, reducing bounce rates, and increasing the likelihood of conversions.
          </Typography>
          <Typography variant="body1" paragraph>
            Regularly reviewing and updating your internal links is key to maintaining a healthy, well-optimized website. Ensure that all links are functional, relevant, and pointing to the most up-to-date content.
          </Typography>
        </Box>
      </Container>
      </div>
    </div>
  );
};

export default InternalLinks;
