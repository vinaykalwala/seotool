import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { Card, CardContent, Typography, Grid, Paper } from '@mui/material';

import NonHtmlFiles from './NonHtmlFiles';  // Import the component
import Backlinks from './Backlinks';  // Import the component
import Dofollowlinks from './Dofollowlinks';  // Import the component
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

const OverviewComponent = () => {
    const [url, setUrl] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [selectedCard, setSelectedCard] = useState(null);  // State to handle the selected card
    const navigate = useNavigate();

    useEffect(() => {
        let timer;
        if (loading) {
            timer = setInterval(() => {
                setElapsedTime(prevTime => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [loading]);

    useEffect(() => {
        const storedData = localStorage.getItem('overviewData');
        if (storedData) {
            setData(JSON.parse(storedData));
        }
    }, []);

    const fetchData = () => {
        if (!url) {
            setError("URL is required");
            return;
        }

        setLoading(true);
        setError(null);
        setElapsedTime(0);

        axios.get('http://localhost:8000/api/overview/', {
            params: { url: url }
        })
        .then(response => {
            const fetchedData = response.data;
            setData(fetchedData);
            localStorage.setItem('overviewData', JSON.stringify(fetchedData));
        })
        .catch(error => {
            setError("An error occurred while fetching data");
            console.error(error);
        })
        .finally(() => {
            setLoading(false);
        });
    };

    const handleCardClick = (cardType) => {
        setSelectedCard(cardType);
    };


    const handleCardClick1 = () => {
        // Store internal links in localStorage
        if (data && data.results && data.results.internal_urls && data.results.internal_urls.list) {
            localStorage.setItem('internalLinks', JSON.stringify(data.results.internal_urls.list));
        }
    
        // Navigate to the InternalLinks component
        navigate('/admin/fullcontent/internallinks');
    };
    
    const handleCardClick3 = () => {
        // Assuming `data` is available in this scope and contains the external links
        if (data && data.results && data.results.external_urls && data.results.external_urls.list) {
            localStorage.setItem('externalLinks', JSON.stringify(data.results.external_urls.list));
        }
        navigate('/admin/fullcontent/externallinks');
    };
    
    const handleCardClick4 = () => {
        // Assuming `data` is available and contains the necessary information
        if (data && data.results && data.results.canonical_urls && data.results.canonical_urls.list) {
            localStorage.setItem('canonicalLinks', JSON.stringify(data.results.canonical_urls.list));
            navigate('/admin/fullcontent/canonicallinks');
        }
    }


    const handleCardClick5 = (linkType) => {
        // Assuming `data` is available and contains the necessary information
        if (data && data.results && data.results[linkType] && data.results[linkType].list) {
            localStorage.setItem('nonCanonicalLinks', JSON.stringify(data.results[linkType].list));
            navigate('/admin/fullcontent/noncanonicallinks');
        }
    };


    const handleCardClick6 = (type) => {
        if (data && data.results && data.results.html_pages && data.results.html_pages.list) {
            localStorage.setItem('htmlPages', JSON.stringify(data.results.html_pages.list));
            // Navigate to the new page
            navigate('/admin/fullcontent/htmlpages');
        }
    };
    

    const handleCardClick10 = (linkType) => {
        if (linkType === 'nonHtml' && data?.results?.non_html_files?.list) {
            // Store non-HTML links in localStorage
            localStorage.setItem('nonHtmlLinks', JSON.stringify(data.results.non_html_files.list));
    
            // Navigate to the new page
            navigate('/admin/fullcontent/nonhtmlfiles');
        }
    };
    

    const handleCardClick7 = (linkType) => {
        // Assuming `data` is available and contains the necessary information
        if (data && data.results && data.results[linkType] && data.results[linkType].list) {
            localStorage.setItem('nonCrawledLinks', JSON.stringify(data.results[linkType].list));
            navigate('/admin/fullcontent/noncrawledlinks');
        }
    };

    const handleCardClick8 = (type) => {
        if (type === 'crawled') {
            // Get crawled links and their count
            const crawledLinks = data?.results?.crawled_urls?.list || [];
            const crawledLinksCount = data?.aggregate_counts?.total_crawled_links || 0;
            
            // Store crawled links and count in localStorage
            localStorage.setItem('crawledLinks', JSON.stringify(crawledLinks));
            localStorage.setItem('crawledLinksCount', JSON.stringify(crawledLinksCount));
            
            // Navigate to the crawled links page
            navigate('/admin/fullcontent/crawledlinks');



        } else if (type === 'uncrawled') {
            // Get uncrawled links and their count
            const uncrawledLinks = data?.results?.uncrawled_urls?.list || [];
            const uncrawledLinksCount = data?.aggregate_counts?.total_uncrawled_links || 0;
    
            // Store uncrawled links and count in localStorage
            localStorage.setItem('uncrawledLinks', JSON.stringify(uncrawledLinks));
            localStorage.setItem('uncrawledLinksCount', JSON.stringify(uncrawledLinksCount));
            
            // Navigate to the uncrawled links page
            navigate('/admin/fullcontent/uncrawledlinks');
        }
    };
    


    // if (selectedCard === 'uncrawled') {
    //     return <UncrawledLinks links={data?.results?.uncrawled_urls?.list || []} />;
    // }

    // if (selectedCard === 'html') {
    //     return <HtmlPages links={data?.results?.html_urls?.list || []} />;
    // }
    
    if (selectedCard === 'nonHtml') {
        return <NonHtmlFiles links={data?.results?.non_html_urls?.list || []} />;
    }
    
  
    const handleCardClick11 = () => {
        // Store broken links in localStorage
        if (data && data.results && data.results.broken_links && data.results.broken_links.list) {
            localStorage.setItem('brokenLinks', JSON.stringify(data.results.broken_links.list));
        }
    
        // Navigate to the BrokenLinks component
        navigate('/admin/fullcontent/brokenlinks');
    };
    


    const handleCardClick12 = () => {
        // Store nofollow links in localStorage
        if (data && data.results && data.results.nofollow_links && data.results.nofollow_links.list) {
            localStorage.setItem('nofollow', JSON.stringify(data.results.nofollow_links.list));
        }
        
        // Navigate to the NofollowLinks component
        navigate('/admin/fullcontent/nofollow');
    };
    



    // if (selectedCard === 'dofollow') {
    //     return <Dofollowlinks  links={data?.results?.broken_urls?.list || []} />;
    // }


    const handleCardClick9 = () => {
        // Assuming `data` is available and contains the necessary information
        if (data && data.results && data.results.dofollow_links && data.results.dofollow_links.list) {
            // Store dofollow links in localStorage
            localStorage.setItem('dofollow', JSON.stringify(data.results.dofollow_links.list));
            
            // Navigate to the InternalLinks component
            navigate('/admin/fullcontent/dofollow');
        } else {
            console.error('Dofollow links data is not available.');
        }
    };
    

    // if (selectedCard === 'nofollow') {
    //     return <Brokenlinks links={data?.results?.broken_urls?.list || []} />;
    // }

    if (selectedCard === 'back') {
        return <Backlinks links={data?.results?.back_urls?.list || []} />;
    }
    
    // if (selectedCard === 'index') {
    //     return <IndexUrls links={data?.results?.index_urls?.list || []} />;
    // }
    
    // if (selectedCard === 'nonIndex') {
    //     return <NonIndexUrls links={data?.results?.non_index_urls?.list || []} />;
    // }

    const handleCardClick13 = () => {
        // Assuming `data` is available and contains the necessary information
        if (data && data.results && data.results.indexed_urls && data.results.indexed_urls.list) {
            // Store dofollow links in localStorage
            localStorage.setItem('index', JSON.stringify(data.results.indexed_urls.list));
            
            // Navigate to the InternalLinks component
            navigate('/admin/fullcontent/indexed');
        } else {
            console.error('indexed links data is not available.');
        }
    };


// non_indexed_urls
// indexed_urls
 
    const handleCardClick14 = () => {
        // Assuming `data` is available and contains the necessary information
        if (data && data.results && data.results.non_indexed_urls && data.results.non_indexed_urls.list) {
            // Store dofollow links in localStorage
            localStorage.setItem('indexed', JSON.stringify(data.results.non_indexed_urls.list));
            
            // Navigate to the InternalLinks component
            navigate('/admin/fullcontent/nonindexed');
        } else {
            console.error('nonindexed links data is not available.');
        }
    };
    


    const handleCardClick15 = () => {
        // Assuming `data` is available and contains the necessary information
        if (data && data.results && data.results.non_indexed_urls && data.results.non_indexed_urls.list) {
            // Store dofollow links in localStorage
            localStorage.setItem('indexed', JSON.stringify(data.results.non_indexed_urls.list));
            
            // Navigate to the InternalLinks component
            navigate('/admin/fullcontent/imagescount');
        } else {
            console.error('nonindexed links data is not available.');
        }
    };
    




    return (
        <div className="overview-container">
        <div className="fullcontent">


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
           Website Overview
          </Typography>
          <Typography variant="body1" style={{ color: '#fff' }}>
            External links are hyperlinks that point from one website to another, helping to establish credibility, drive traffic, and enhance the user experience. 
            They are also a critical component of SEO, contributing to a website's authority and relevance in search engine rankings.
          </Typography>
        </Box>  
        
        
        
              <div className="input-container">
            <input 
                type="text" 
                className="url-input"
                placeholder="Enter URL" 
                value={url} 
                onChange={(e) => setUrl(e.target.value)} 
            />
            <button className="fetch-button" onClick={fetchData}>Fetch Overview</button>
        </div>
        </div>
    
        {loading && (
            <div className="loading-container">
                <CircularProgress />
                <p className="elapsed-time">Time elapsed: {elapsedTime} seconds</p>
            </div>
          
        )}
  <br></br>  <br></br>  <br></br>  <br></br>
            {error && <p className="error-message">{error}</p>}

            {data && (










                <Grid container spacing={2} className="results-container">
                 

    <Grid container spacing={2} className="results-container">
    <Grid item xs={12} sm={6} md={4}>
        <Card onClick={() => handleCardClick1('internal')} style={{ background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)', color: '#fff' }}>
            <CardContent>
                <Typography variant="h6">Total Internal Links</Typography>
                <Typography variant="body2">{data.aggregate_counts.total_internal_links}</Typography>
            </CardContent>
        </Card>
    </Grid>

    <Grid item xs={12} sm={6} md={4}>
        <Card onClick={() => handleCardClick3('external')} style={{ background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', color: '#fff' }}>
            <CardContent>
                <Typography variant="h6">Total External Links</Typography>
                <Typography variant="body2">{data.aggregate_counts.total_external_links}</Typography>
            </CardContent>
        </Card>
    </Grid>

    <Grid item xs={12} sm={6} md={4}>
        <Card onClick={() => handleCardClick8('crawled')} style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: '#fff' }}>
            <CardContent>
                <Typography variant="h6">Total Crawled Links</Typography>
                <Typography variant="body2">{data.aggregate_counts.total_crawled_links}</Typography>
            </CardContent>
        </Card>
    </Grid>

    <Grid item xs={12} sm={6} md={4}>
        <Card onClick={() => handleCardClick7('uncrawled')} style={{ background: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)', color: '#fff' }}>
            <CardContent>
                <Typography variant="h6">Total Uncrawled Links</Typography>
                <Typography variant="body2">{data.aggregate_counts.total_uncrawled_links}</Typography>
            </CardContent>
        </Card>
    </Grid>

    <Grid item xs={12} sm={6} md={4}>
        <Card onClick={() => handleCardClick('back')} style={{ background: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)', color: '#fff' }}>
            <CardContent>
                <Typography variant="h6">Total Back Links</Typography>
                <Typography variant="body2">{data.aggregate_counts.total_backlinks}</Typography>
            </CardContent>
        </Card>
    </Grid>

    <Grid item xs={12} sm={6} md={4}>
    <Card onClick={handleCardClick4} style={{ background: 'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)', color: '#fff' }}>
        <CardContent>
            <Typography variant="h6">Total Canonical Links</Typography>
            <Typography variant="body2">{data.aggregate_counts.total_canonical_urls}</Typography>
        </CardContent>
    </Card>
</Grid>


<Grid item xs={12} sm={6} md={4}>
    <Card onClick={() => handleCardClick5('non_canonical_urls')} style={{ background: 'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)', color: '#fff' }}>
        <CardContent>
            <Typography variant="h6">Total Non-canonical Links</Typography>
            <Typography variant="body2">{data.aggregate_counts.total_non_canonical_urls}</Typography>
        </CardContent>
    </Card>
</Grid>


            <Grid item xs={12} sm={6} md={4}>
                <Card
                    onClick={() => handleCardClick6('html')}
                    style={{ background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', color: '#fff' }}
                >
                    <CardContent>
                        <Typography variant="h6">Total HTML Links</Typography>
                        <Typography variant="body2">{data.aggregate_counts.total_html_pages}</Typography>
                    </CardContent>
                </Card>
            </Grid>



            <Grid item xs={12} sm={6} md={4}>
    <Card
        onClick={() => handleCardClick10('nonHtml')}
        style={{ background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #feada6 100%)', color: '#fff' }}
    >
        <CardContent>
            <Typography variant="h6">Total Non-HTML Links</Typography>
            <Typography variant="body2">{data?.aggregate_counts?.total_non_html_files || 0}</Typography>
        </CardContent>
    </Card>
</Grid>





    <Grid item xs={12} sm={6} md={4}>
        <Card onClick={() => handleCardClick11('broken')} style={{ background: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)', color: '#fff' }}>
            <CardContent>
                <Typography variant="h6">Total Broken Links</Typography>
                <Typography variant="body2">{data.aggregate_counts.total_broken_links}</Typography>
            </CardContent>
        </Card>
    </Grid>

    <Grid item xs={12} sm={6} md={4}>
        <Card onClick={() => handleCardClick13('index')} style={{ background: 'linear-gradient(135deg, #fdcbf1 0%, #e6dee9 100%)', color: '#fff' }}>
            <CardContent>
                <Typography variant="h6">Total Indexed URLs</Typography>
                <Typography variant="body2">{data.aggregate_counts.total_indexed_urls}</Typography>
            </CardContent>
        </Card>
    </Grid>

    <Grid item xs={12} sm={6} md={4}>
        <Card onClick={() => handleCardClick14('nonIndex')} style={{ background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #feada6 100%)', color: '#fff' }}>
            <CardContent>
                <Typography variant="h6">Total Non-Indexed URLs</Typography>
                <Typography variant="body2">{data.aggregate_counts.total_non_indexed_urls}</Typography>
            </CardContent>
        </Card>
    </Grid>

    <Grid item xs={12} sm={6} md={4}>
  <Card
    onClick={() => handleCardClick9('dofollow')}
    style={{ background: 'linear-gradient(135deg, #f9d423 0%, #ff4e50 100%)', color: '#fff', cursor: 'pointer' }}
  >
    <CardContent>
      <Typography variant="h6">Total Dofollow URLs</Typography>
      <Typography variant="body2">{data.aggregate_counts.total_dofollow_links}</Typography>
    </CardContent>
  </Card>
</Grid>


    <Grid item xs={12} sm={6} md={4}>
        <Card onClick={() => handleCardClick12('nofollow')} style={{ background: 'linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)', color: '#fff' }}>
            <CardContent>
                <Typography variant="h6">Total Nofollow URLs</Typography>
                <Typography variant="body2">{data.aggregate_counts.total_nofollow_links}</Typography>
            </CardContent>
        </Card>
    </Grid>

    <Grid item xs={12} sm={6} md={4}>
        <Card onClick={() => handleCardClick15('imagescount')} style={{ background: 'linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)', color: '#fff' }}>
            <CardContent>
                <Typography variant="h6">Total Image Count</Typography>
                <Typography variant="body2">{data.aggregate_counts.total_image_count}</Typography>
            </CardContent>
        </Card>
    </Grid>
</Grid>










                    {/* Add other cards similarly */}
                </Grid>
            )}

            {data && (
                <div className="summary-container">
                    <Paper elevation={3} className="summary-paper">
                        <Typography variant="h6" className="summary-title">Overview Results</Typography>
                        <pre className="summary-data">{JSON.stringify(data, null, 2)}</pre>
                        <Typography variant="body1" className="total-time">Total time taken: {elapsedTime} seconds</Typography>
                    </Paper>
                </div>
            )}
        </div>
    );
};

export default OverviewComponent;
