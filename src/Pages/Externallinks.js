import React, { useEffect, useState } from 'react';
import { Typography, Card, CardContent, CardActions, Button, Grid, Container, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Externallinks = () => {
  const [externalLinks, setExternalLinks] = useState([]);

  useEffect(() => {
    const storedExternalLinks = localStorage.getItem('externalLinks');
    if (storedExternalLinks) {
      setExternalLinks(JSON.parse(storedExternalLinks));
    }
  }, []);

  // Dummy data for graphs and tables
  const linkQualityData = [
    { name: 'January', quality: 80 },
    { name: 'February', quality: 85 },
    { name: 'March', quality: 90 },
    { name: 'April', quality: 95 },
    { name: 'May', quality: 92 },
    { name: 'June', quality: 88 },
    { name: 'July', quality: 94 },
  ];

  const linkAnalysisData = [
    { link: 'https://example.com', anchorText: 'Example', context: 'Blog post', quality: 'High' },
    { link: 'https://example.org', anchorText: 'Example Org', context: 'Reference', quality: 'Medium' },
    { link: 'https://example.net', anchorText: 'Example Net', context: 'Resource', quality: 'High' },
    { link: 'https://example.edu', anchorText: 'Example Edu', context: 'Academic', quality: 'Very High' },
  ];

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
            External Links
          </Typography>
          <Typography variant="body1" sx={{ color: '#fff' }}>
            External links are hyperlinks that point from one website to another, helping to establish credibility, drive traffic, and enhance the user experience. 
            They are also a critical component of SEO, contributing to a website's authority and relevance in search engine rankings.
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
          {externalLinks.length > 0 ? (
            externalLinks.map((link, index) => (
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
            <Typography>No external links found.</Typography>
          )}
        </Grid>

        <Box sx={{ marginTop: '40px' }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Link Quality Over Time
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={linkQualityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="quality" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </Box>

     

        <Box sx={{ marginTop: '40px' }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Mastering External Links: Enhance Your Site's Authority and Connectivity
          </Typography>
          <Typography variant="body1" paragraph>
            External links, also known as outbound links, are hyperlinks that point from your website to another domain. These links are crucial for SEO as they help establish your site’s credibility and relevance by connecting it to other authoritative sources.
          </Typography>
          <Typography variant="body1" paragraph>
            Proper management and optimization of external links can significantly impact your search engine rankings and overall site authority.
          </Typography>
        </Box>

        <Box sx={{ marginTop: '20px' }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Why External Links Matter
          </Typography>
          <Typography variant="body1" paragraph>
            1. **Boost Site Authority**: Linking to high-quality, authoritative sites can enhance your site’s credibility and contribute to a better ranking in search engine results. It shows that you are providing valuable resources to your audience.
          </Typography>
          <Typography variant="body1" paragraph>
            2. **Enhance Content Relevance**: External links to relevant and authoritative sites can improve the context and relevance of your content, providing additional value to your readers and boosting your SEO.
          </Typography>
          <Typography variant="body1" paragraph>
            3. **Encourage Reciprocal Linking**: High-quality external links can lead to reciprocal linking opportunities, where other sites may link back to your content, further enhancing your site’s authority and visibility.
          </Typography>
          <Typography variant="body1" paragraph>
            4. **Improve User Experience**: External links can provide additional resources and information for your users, enriching their experience and keeping them engaged with your content.
          </Typography>
        </Box>



        <Box sx={{ marginTop: '40px' }}>
          <Typography variant="h5" component="h2" gutterBottom>
            External Link Analysis
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: '#0288d1' }}>
                <TableRow>
                  <TableCell sx={{ color: '#fff' }}>Link</TableCell>
                  <TableCell sx={{ color: '#fff' }} align="right">Anchor Text</TableCell>
                  <TableCell sx={{ color: '#fff' }} align="right">Context</TableCell>
                  <TableCell sx={{ color: '#fff' }} align="right">Quality</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {linkAnalysisData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      <a href={row.link} target="_blank" rel="noopener noreferrer">
                        {row.link}
                      </a>
                    </TableCell>
                    <TableCell align="right">{row.anchorText}</TableCell>
                    <TableCell align="right">{row.context}</TableCell>
                    <TableCell align="right">{row.quality}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>










        <Box sx={{ marginTop: '20px' }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Key Metrics to Analyze External Links
          </Typography>
          <Typography variant="body1" paragraph>
            1. **Link Quality**: Assess the authority and trustworthiness of the sites you’re linking to. High-quality, reputable sites are more beneficial for your SEO.
          </Typography>
          <Typography variant="body1" paragraph>
             2. **Relevance**: Ensure that the external links are relevant to your content. Irrelevant links can confuse readers and harm your site’s credibility.
          </Typography>
          <Typography variant="body1" paragraph>
             3. **Link Diversity**: A variety of external links from different domains can strengthen your site’s authority and help it appear more credible in the eyes of search engines.
          </Typography>
          <Typography variant="body1" paragraph>
             4. Broken Links: Identify and address any broken external links that may lead to 404
errors or irrelevant pages, ensuring a smooth user experience.

          </Typography>
          <Typography variant="body1" paragraph>
             5. Link Distribution: Analyze how external links are distributed across your site to
             maintain a balanced and natural link profile.
          </Typography>
        </Box>
      </Container>


      <section id="features">
      <div class="container">
        <h2>How to Use Our SEO Tool for External Link Analysis</h2>
        <p>Our SEO tool offers comprehensive features to manage and optimize your external links effectively:</p>
        <ul>
          <li><strong>External Link Overview:</strong> Get a complete view of all external links on your site, including their quality and relevance.</li>
          <li><strong>Link Quality Assessment:</strong> Evaluate the authority and trustworthiness of external sites to which you are linking.</li>
          <li><strong>Anchor Text Review:</strong> Analyze the anchor text of your external links to ensure relevance and proper context.</li>
          <li><strong>Broken Link Detection:</strong> Identify and fix broken external links to improve user experience and SEO performance.</li>
          <li><strong>Link Context Analysis:</strong> Review the context of external links within your content to enhance relevance and user engagement.</li>
        </ul>
      </div>
    </section>
    
    <section id="best-practices">
      <div class="container">
        <h2>Best Practices for Managing External Links</h2>
        <ul>
          <li><strong>Link to Authoritative Sources:</strong> Always link to high-quality, authoritative sites to boost your site’s credibility and SEO.</li>
          <li><strong>Use Descriptive Anchor Text:</strong> Ensure that anchor text is relevant and descriptive, providing context about the linked content.</li>
          <li><strong>Monitor for Broken Links:</strong> Regularly check for and fix any broken external links to maintain a positive user experience.</li>
          <li><strong>Balance External Links:</strong> Distribute external links naturally across your content to avoid overloading any single page.</li>
        </ul>
      </div>
    </section>
    
    <section id="conclusion">
      <div class="container">
        <h2>Conclusion</h2>
        <p>Effective management of external links is essential for enhancing your site’s authority, improving user experience, and boosting search engine rankings. By using our advanced tools to analyze and optimize your external links, you can ensure that your site remains credible, relevant, and well-connected. Start optimizing your external links today to achieve superior SEO performance and drive more value to your audience!</p>
      </div>
    </section>
    
    <section id="contact">
      <div class="container">
        <h2>Take Control of Your External Links Today!</h2>
        <p>Ensure your external links are effectively managed and optimized to maximize your SEO potential. Our advanced tools make it easy to analyze, validate, and enhance your external links. Start optimizing your external links today to improve your site’s authority and search engine rankings!</p>
        <a href="explore.html" class="cta-button">Explore Our SEO Tool</a>
        <a href="contact.html" class="cta-button">Contact Us for More Information</a>
      </div>
    </section>







    </div>
  );
};

export default Externallinks;
