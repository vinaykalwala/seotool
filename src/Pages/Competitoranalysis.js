import React, { useState } from 'react';
import '../Css/Contact.css'; // Importing CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
function CompetitorAnalysisLanding() {
  const [ourSite, setOurSite] = useState('');
  const [competitorSite, setCompetitorSite] = useState('');

  const handleSearch = () => {
    // Handle the search logic here
    console.log('Our Site:', ourSite);
    console.log('Competitor Site:', competitorSite);
  };

  return (
    <div className="ca-landing-page">
      <div className="ca-hero-section">
        <div className="ca-hero-overlay"></div>
        <div className="ca-hero-content">
          <h3 className="ca-hero-title">Competitor Analysis</h3>
          <p className="ca-hero-subtitle">
            Compare your website with your competitors and gain the upper hand.
          </p>
          <div className="ca-search-container">
            <div className="ca-search-bar">
              <label htmlFor="ourSite" className="ca-label">Your Website</label>
              <input
                type="text"
                id="ourSite"
                value={ourSite}
                onChange={(e) => setOurSite(e.target.value)}
                placeholder="Enter your site URL"
                className="ca-input"
              />
            </div>
            <div className="ca-search-bar">
              <label htmlFor="competitorSite" className="ca-label">Competitor's Website</label>
              <input
                type="text"
                id="competitorSite"
                value={competitorSite}
                onChange={(e) => setCompetitorSite(e.target.value)}
                placeholder="Enter competitor site URL"
                className="ca-input"
              />
            </div>
          </div>
          <button className="ca-search-button" onClick={handleSearch}>
            Compare Now
          </button>
        </div>
      </div>
      <div className="container my-5">
      <div className="text-center">
        <h3 className="cute-title">
        Gain the Competitive Edge with Competitor Analysis
Uncover Strategies to Optimize Your Own Success

        </h3>
       
        <hr className="cute-divider" />
        <h4 className="cute-heading">
          What Is Competitor Analysis?
        </h4>
        <p className="cute-description">
          Competitor analysis in SEO involves researching and understanding the strategies of your business rivals. By analyzing their websites, content, backlinks, and keywords, you can identify opportunities, refine your strategy, and outperform them in search rankings.
        </p>
        <h4 className="cute-heading">
          Why It Matters
        </h4>
        <ul className="list-unstyled cute-list">
          <li className="cute-list-item">
            <span className="cute-list-icon">🔑</span> Keyword Opportunities: Discover and target high-performing keywords your competitors rank for.
          </li>
          <li className="cute-list-item">
            <span className="cute-list-icon">📊</span> Benchmarking: Compare your SEO performance against competitors to set realistic goals.
          </li>
          <li className="cute-list-item">
            <span className="cute-list-icon">🔗</span> Backlink Strategies: Analyze competitors' backlinks for potential link-building opportunities.
          </li>
          <li className="cute-list-item">
            <span className="cute-list-icon">📝</span> Content Insights: Learn from the success of your competitors' content to improve your own.
          </li>
          <li className="cute-list-item">
            <span className="cute-list-icon">⚡</span> Weakness Identification: Find and capitalize on your competitors' weaknesses.
          </li>
          <li className="cute-list-item">
            <span className="cute-list-icon">📈</span> Market Adaptation: Stay ahead of industry trends and competitor strategy changes.
          </li>
        </ul>
      </div>
      <div class="container mt-5">
      <h3 class="text-center mb-4">Key Metrics to Analyze
      </h3>

        <div class="row">
            <div class="col-md-4 mb-4">
                <div class="card text-center">
                    <div class="card-body">
                    <i class="fas fa-search fa-3x mb-3 icon-color-1"></i>
                    <h5 class="card-title">Keyword Rankings</h5>
                        <p class="card-text1">Compare keyword performance.</p>
                    </div>
                </div>
            </div>

            <div class="col-md-4 mb-4">
                <div class="card text-center">
                    <div class="card-body">
                        <i class="fas fa-link fa-3x mb-3 icon-color-2"></i>
                        <h5 class="card-title">Backlink Profile</h5>
                        <p class="card-text1">Evaluate the quality and diversity of competitors' backlinks.</p>
                    </div>
                </div>
            </div>

            <div class="col-md-4 mb-4">
                <div class="card text-center">
                    <div class="card-body">
                        <i class="fas fa-chart-line fa-3x mb-3 icon-color-3"></i>
                        <h5 class="card-title">Content Performance</h5>
                        <p class="card-text1">Analyze content effectiveness based on traffic and engagement.</p>
                    </div>
                </div>
            </div>

            <div class="col-md-4 mb-4">
                <div class="card text-center">
                    <div class="card-body">
                        <i class="fas fa-globe-americas fa-3x mb-3 icon-color-4"></i>
                        <h5 class="card-title">Traffic Sources</h5>
                        <p class="card-text1">Identify where competitors' traffic originates.</p>
                    </div>
                </div>
            </div>

            <div class="col-md-4 mb-4">
                <div class="card text-center">
                    <div class="card-body">
                        <i class="fas fa-share-alt fa-3x mb-3 icon-color-5"></i>
                        <h5 class="card-title">Social Media Presence</h5>
                        <p class="card-text1">Monitor social strategies and engagement.</p>
                    </div>
                </div>
            </div>

            <div class="col-md-4 mb-4">
                <div class="card text-center">
                    <div class="card-body">
                        <i class="fas fa-tags fa-3x mb-3 icon-color-6"></i>
                        <h5 class="card-title">On-Page SEO</h5>
                        <p class="card-text1">Compare on-page elements like meta tags and internal linking.</p>
                    </div>
                </div>
            </div>

            <div class="col-md-4 mb-4">
                <div class="card text-center">
                    <div class="card-body">
                        <i class="fas fa-sitemap fa-3x mb-3 icon-color-7"></i>
                        <h5 class="card-title">Site Structure</h5>
                        <p class="card-text1">Assess usability and overall site structure.</p>
                    </div>
                </div>
            </div>

            <div class="col-md-4 mb-4">
                <div class="card text-center">
                    <div class="card-body">
                        <i class="fas fa-ad fa-3x mb-3 icon-color-1"></i>
                        <h5 class="card-title">Advertising Strategies</h5>
                        <p class="card-text1">Understand competitors' paid campaigns.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
   

    <section class=" py-5" style={{backgroundColor:"#e6f7ff"}}>
        <div class="container">
            <h3 class="text-center mb-4">Using Our SEO Tool for Competitor Analysis
            </h3>
            <ul class="list-group">
                <li class="list-group-item">
                Keyword Gap Analysis: Discover untapped keyword opportunities.
                </li>
                <li class="list-group-item">
                Backlink Comparison: Identify gaps for link-building.
                </li>
                <li class="list-group-item">
                Content Analysis: Improve your content strategy based on competitor success.
                </li>
                <li class="list-group-item">
                Traffic Source Comparison: Explore new channels for traffic.
                </li>
                <li class="list-group-item">
                Social Media Monitoring: Enhance your social strategy.
                </li>
                <li class="list-group-item">
                On-Page SEO Audit: Uncover areas for improvement.
                </li>
                <li class="list-group-item">
                Site Structure Analysis: Ensure superior usability.
                </li>
                <li class="list-group-item">
                Advertising Insight: Optimize your paid campaigns.
                </li>
            </ul>
        </div>
    </section>
    <section className="best-practices-section">
    <div className="best-practices-container">
        <div className="best-practices-row">
            <div className="best-practices-col" style={{ padding: "0px 30px" }}>
                <h2 className="best-practices-title">Best Practices</h2>
                <div className="best-practices-content">
                    <ul className="best-practices-list list-unstyled">
                        <li className="best-practices-item"><strong>Regular Monitoring:</strong> Stay informed about competitors' strategies.</li>
                        <li className="best-practices-item"><strong>Focus on Top Competitors:</strong> Analyze those dominating your niche.</li>
                        <li className="best-practices-item"><strong>Use Multiple Tools:</strong> Get a comprehensive view of strategies.</li>
                        <li className="best-practices-item"><strong>Analyze Across Channels:</strong> Consider all digital channels.</li>
                        <li className="best-practices-item"><strong>Benchmark Metrics:</strong> Track progress against key metrics.</li>
                        <li className="best-practices-item"><strong>Adapt and Evolve:</strong> Continuously refine your strategy.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>


    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-md-12" style={{padding:"0px 30px"}}>
                    <h2 class="section-title">Conclusion</h2>
                    <div class="section-content">
                        <p>Competitor analysis is essential for understanding the competitive landscape. Regular analysis helps you identify growth opportunities, avoid pitfalls, and outperform competitors in search rankings.</p>
                    </div>
                    <div class="call-to-action">
                        <p>Get Started Today!</p>
                        <p>Use our advanced SEO tools to analyze competitors, find opportunities, and optimize your strategy. Start your competitor analysis now to take the lead in your industry!</p>
                        <a href="#explore" class="btn btn-primary cta-button">Explore Our SEO Tool</a>
                        <a href="#contact" class="btn btn-secondary cta-button">Contact Us for More Information</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    </div>
  );
}

export default CompetitorAnalysisLanding;