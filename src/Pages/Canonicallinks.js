import React, { useEffect, useState } from 'react';
import { Typography, Card, CardContent, CardActions, Button, Grid, Container, Box, } from '@mui/material';
import { Link } from 'react-router-dom';
import social3 from '../assets/canonical1.png';
import '../Css/Canonical.css'; // Ensure this path is correct based on your project structure


const Canonicallinks = () => {
    const [canonicalLinks, setCanonicalLinks] = useState([]);

  useEffect(() => {
    const storedCanonicalLinks = localStorage.getItem('canonicalLinks');
    if (storedCanonicalLinks) {
        setCanonicalLinks(JSON.parse(storedCanonicalLinks));
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
            Canonical Links
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
          {canonicalLinks.length > 0 ? (
            canonicalLinks.map((link, index) => (
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
            <Typography>No canonical links found.</Typography>
          )}
        </Grid>

       
     

        
     
      </Container>


    
      <div className="canonical-container">
    <div className="canonical-header">
      <h4 className="title">
        <i className="fas fa-link"></i>
        Master Your Website’s Canonical Linking for Superior SEO Performance
      </h4>
      <h3 className="subtitle">
        Analyze, Optimize, and Track Your Canonical Links to Boost Search Rankings
      </h3>
    </div>
  
    <div className="canonical-content">
      <div className="card">
        <h3 className="content-title">
          Mastering Canonical Links: Ensure Your Content Is Properly Indexed
        </h3>
        <div className="canonical-description">
          <h4 className="description-title">
            <i className="fas fa-question-circle"></i>
            What Are Canonical Links?
          </h4>
          <p className="description-text">
            Canonical links, or canonical URLs, are a crucial component of SEO that help prevent issues
            with duplicate content. They are specified using a <code>&lt;link rel="canonical"&gt;</code> tag in the
            HTML of a webpage to indicate the preferred version of a page among duplicate or similar
            content. This tag tells search engines which version of a page should be considered the
            authoritative source, thereby consolidating the ranking signals to that version.
          </p>
        </div>
      </div>
    </div>
    <br></br>




    <div className="canonical-reasons-container">
  <h2 className="reasons-title1">Why Canonical Links Matter</h2>
  <div className="reasons-layout">
    <div className="reasons-row">
      <div className="reason-card">
        <div className="card-icon-wrapper">
          <i className="fas fa-clone"></i>
        </div>
        <div className="card-content1">
          <h3 className="card-title1">Avoid Duplicate Content Issues</h3>
          <p className="card-text-1">
            Duplicate content can arise when multiple URLs present the same or very similar content.
            This can confuse search engines and dilute the ranking signals. Canonical links resolve this
            issue by specifying a single version of the content to rank.
          </p>
        </div>
      </div>

      <div className="reason-card">
        <div className="card-icon-wrapper">
          <i className="fas fa-link"></i>
        </div>
        <div className="card-content1">
          <h3 className="card-title1">Preserve Link Equity</h3>
          <p className="card-text-1">
            When multiple versions of a page exist, backlinks may be spread across these versions,
            weakening the overall link equity. Canonical links help consolidate link equity to the
            preferred page, improving its authority and ranking.
          </p>
        </div>
      </div>

      <div className="reason-card">
        <div className="card-icon-wrapper">
          <i className="fas fa-search"></i>
        </div>
        <div className="card-content1">
          <h3 className="card-title1">Improve Crawl Efficiency</h3>
          <p className="card-text-1">
            Search engines have a limited crawl budget. By specifying canonical URLs, you ensure that
            search engines focus on the most important pages, optimizing crawl efficiency and indexation.
          </p>
        </div>
      </div>
    </div>

    <div className="reasons-row">
      <div className="reason-card full-width-card">
        <div className="card-icon-wrapper">
          <i className="fas fa-user-check"></i>
        </div>
        <div className="card-content1">
          <h3 className="card-title">Enhance User Experience</h3>
          <p className="card-text-1">
            Users who encounter duplicate content are often confused. Canonical links help ensure that
            users are directed to the most relevant version of a page, improving their browsing experience.
          </p>
        </div>
      </div>

      <div className="image-cover">
      {<img src={social3} alt="Social Media Marketing"  />}
      </div>
    </div>
  </div>
</div>
<div className="canonical-metrics-container">
  <h2 className="metrics-title">Key Metrics to Analyze Canonical Links</h2>
  <div className="metrics-layout">
    <div className="metric-card">
      <div className="metric-icon-wrapper">
        <i className="fas fa-check-circle"></i>
      </div>
      <div className="metric-content">
        <h3 className="metric-title">Canonical URL Implementation</h3>
        <p className="metric-text">
          Ensure that the canonical link is correctly implemented on each page. It should point to the preferred version of the content.
        </p>
      </div>
    </div>

    <div className="metric-card">
      <div className="metric-icon-wrapper">
        <i className="fas fa-link"></i>
      </div>
      <div className="metric-content">
        <h3 className="metric-title">Canonical vs. Actual URL</h3>
        <p className="metric-text">
          Verify that the canonical URL matches the actual URL of the content. Mismatches can lead to indexing issues and impact SEO.
        </p>
      </div>
    </div>

    <div className="metric-card">
      <div className="metric-icon-wrapper">
        <i className="fas fa-shield-alt"></i>
      </div>
      <div className="metric-content">
        <h3 className="metric-title">Canonical Link Validation</h3>
        <p className="metric-text">
          Check that the canonical link is not pointing to a non-existent or irrelevant page. This ensures that search engines and users are directed to valid and valuable content.
        </p>
      </div>
    </div>

    <div className="metric-card">
      <div className="metric-icon-wrapper">
        <i className="fas fa-exchange-alt"></i>
      </div>
      <div className="metric-content">
        <h3 className="metric-title">Canonical Chain Detection</h3>
        <p className="metric-text">
          Identify and address any canonical chains where multiple pages point to a single canonical URL through a chain of redirects. Ideally, each page should point directly to the canonical URL.
        </p>
      </div>
    </div>

    <div className="metric-card">
      <div className="metric-icon-wrapper">
        <i className="fas fa-code"></i>
      </div>
      <div className="metric-content">
        <h3 className="metric-title">Canonical Tags on Dynamic Pages</h3>
        <p className="metric-text">
          Ensure that canonical tags are correctly used on dynamic pages with URL parameters to prevent duplicate content issues.
        </p>
      </div>
    </div>
  </div>
</div>
<section class="canonical-analysis-section">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <h2 class="section-title">How to Use Our SEO Tool for Canonical Link Analysis</h2>
                <p class="section-description">Our SEO tool provides comprehensive features to analyze and manage canonical links effectively:</p>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-md-6">
                <div class="analysis-card overview">
                    <h4 class="card-title">Canonical URL Overview</h4>
                    <p>View and verify the canonical URLs implemented across your website to ensure proper content indexing.</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="analysis-card comparison">
                    <h4 class="card-title">Canonical vs. Actual URL Comparison</h4>
                    <p>Compare canonical URLs with actual URLs to identify any discrepancies or errors.</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="analysis-card validation">
                    <h4 class="card-title">Canonical Link Validation</h4>
                    <p>Check the validity of canonical links to ensure they point to the correct and relevant pages.</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="analysis-card chain-detection">
                    <h4 class="card-title">Canonical Chain Detection</h4>
                    <p>Discover and resolve canonical chains to streamline your link structure and improve SEO.</p>
                </div>
            </div>
            <div class="col-md-12">
                <div class="analysis-card dynamic-analysis">
                    <h4 class="card-title">Dynamic Page Analysis</h4>
                    <p>Analyze canonical tags on dynamic pages to address any issues with URL parameters and duplicate content.</p>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="best-practices">
    <h2 class="bp-title">Best Practices for Implementing Canonical Links</h2>
    <div class="bp-container">
        <div class="bp-circle bp-circle-1">
            <h4 class="bp-circle-title">1. Use Absolute URLs</h4>
            <p class="bp-circle-text">Always use absolute URLs in your canonical tags to avoid ambiguity and ensure proper indexing.</p>
        </div>
        <div class="bp-circle bp-circle-2">
            <h4 class="bp-circle-title">2. Canonicalize Variations</h4>
            <p class="bp-circle-text">Apply canonical tags to all variations of a page, including those with URL parameters, session IDs, or tracking codes.</p>
        </div>
        <div class="bp-circle bp-circle-3">
            <h4 class="bp-circle-title">3. Regular Audits</h4>
            <p class="bp-circle-text">Conduct regular audits of your canonical tags to ensure they are correctly implemented and address any issues promptly.</p>
        </div>
        <div class="bp-circle bp-circle-4">
            <h4 class="bp-circle-title">4. Avoid Self-Referencing Canonicals</h4>
            <p class="bp-circle-text">Ensure that canonical tags are not self-referencing unless it is necessary for specific scenarios.</p>
        </div>
    </div>
</section>
<section class="conclusion">
    <div class="conclusion-content">
        <h2 class="conclusion-title">Conclusion</h2>
        <p class="conclusion-text">
            Canonical links are essential for managing duplicate content and ensuring that search engines properly index and rank your pages. By using our advanced canonical link analysis tools, you can maintain a clean and efficient website structure, consolidate link equity, and enhance your SEO performance. Start optimizing your canonical links today to achieve better search engine rankings and improve user experience!
        </p>
        <h3 class="cta-title">Take Control of Your Canonical Links Today!</h3>
        <p class="cta-text">
            Ensure your site’s canonical links are correctly implemented and optimized to maximize your SEO potential. Our advanced tools make it easy to analyze, validate, and manage your canonical URLs. Start optimizing your canonical links today to enhance your site’s authority and improve your search engine rankings!
        </p>
        <a href="#explore" class="cta-button">Explore Our SEO Tool</a>
        <a href="#contact" class="cta-button cta-button-secondary">Contact Us for More Information</a>
    </div>
</section>


</div>




    </div>
  );
};

export default Canonicallinks;
