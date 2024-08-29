import React, { useState } from 'react';
import { fetchBacklinks } from '../api';
import backlink from '../assets/backlink.png';

function Backlinks() {
  const [url, setUrl] = useState('');
  const [backlinks, setBacklinks] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetchBacklinks(url);
      setBacklinks(data.backlinks);
      setError(null);
    } catch (error) {
      setError(error.message);
      setBacklinks(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="backlinks-container">
      <header className="header-section">
        <h1>Boost Your Rankings with Powerful Backlink Analysis</h1>
        <h3>Discover, Analyze, and Optimize Your Backlink Profile for Maximum SEO Impact.</h3>
      </header>
      
      <div className="image-section">
      {<img src={backlink} alt="Description of the image" />}
      </div>
      
      <section className="content-section">
        <h2>Understanding Backlinks: A Key Component of SEO</h2>
        <h3>What Are Backlinks?</h3>
        <p>
          Backlinks, also known as inbound links or incoming links, are hyperlinks from one website to another. 
          They play a crucial role in SEO because they signal to search engines that other websites vouch for your content. 
          When a reputable site links to yours, it indicates that your content is valuable and trustworthy.
        </p>
        <h3>Why Backlinks Matter</h3>
        <ul>
          <li><strong>Search Engine Ranking:</strong> Search engines like Google view backlinks as endorsements. The more high-quality backlinks you have, the higher your website is likely to rank in search results.</li>
          <li><strong>Referral Traffic:</strong> Backlinks can drive traffic directly to your site. When users click on a link from another site, they are referred to your website. This can result in targeted traffic, increasing your potential for conversions.</li>
          <li><strong>Domain Authority:</strong> Backlinks contribute to your site's domain authority (DA) – a measure of how well your site can rank on search engines. High-quality backlinks from authoritative sites can improve your DA, making it easier to rank for competitive keywords.</li>
        </ul>

 
      <h2>Key Metrics to Analyze Backlinks</h2>
        <ul>
          <li><strong>Link Influence Scoring:</strong> This metric assesses the impact of a backlink based on the linking site's authority and relevance. It helps prioritize which backlinks are most valuable.</li>
          <li><strong>Backlink Growth Prediction:</strong> Analyzing trends in your backlink profile can predict future growth and identify potential areas for improvement.</li>
          <li><strong>Anchor Text:</strong> The clickable text in a hyperlink is known as anchor text. Analyzing anchor text helps ensure that it is relevant to the linked content and varies to avoid over-optimization.</li>
          <li><strong>Referring Domains:</strong> This metric shows how many unique domains are linking to your site. A diverse range of referring domains indicates a natural backlink profile.</li>
          <li><strong>Link Equity:</strong> Also known as link juice, this metric measures the value passed from one site to another through a backlink. High link equity improves your site's authority and ranking.</li>
          <li><strong>Spam Score:</strong> This assesses the likelihood that a linking site is spammy or low-quality. A high spam score can negatively impact your site's SEO.</li>
          <li><strong>Top Pages:</strong> Identifying which pages on your site receive the most backlinks helps you understand which content is most valued by others.</li>
          <li><strong>Linking Root Domains:</strong> This indicates the number of unique domains linking to your site, providing insights into the diversity and quality of your backlink profile.</li>
          <li><strong>HTTP Status Codes:</strong> Monitoring the HTTP status codes of backlinks helps identify any broken or problematic links.</li>
          <li><strong>Canonical URLs:</strong> Ensures that backlinks point to the canonical version of your URLs, avoiding issues with duplicate content.</li>
        </ul>

        <h2>How to Use Our SEO Tool for Backlink Analysis</h2>
        <p>
          Our SEO tool offers comprehensive features to analyze and manage your backlinks effectively:
        </p>
        <ul>
          <li><strong>Backlink Overview:</strong> Get a snapshot of your backlink profile, including the number of backlinks, referring domains, and overall link quality.</li>
          <li><strong>Link Influence Scoring:</strong> Evaluate the impact of each backlink based on the authority of the linking site.</li>
          <li><strong>Backlink Growth Tracking:</strong> Monitor changes in your backlink profile over time to gauge the effectiveness of your link-building efforts.</li>
          <li><strong>Anchor Text Analysis:</strong> Review the anchor text of your backlinks to ensure relevance and diversity.</li>
          <li><strong>Referring Domains Analysis:</strong> Identify and evaluate the unique domains linking to your site.</li>
          <li><strong>Link Equity Measurement:</strong> Assess the value passed through backlinks to improve your site's authority.</li>
          <li><strong>Spam Score Detection:</strong> Identify potentially harmful links to maintain a healthy backlink profile.</li>
          <li><strong>Top Pages Analysis:</strong> Discover which pages are most popular among other sites and optimize them further.</li>
          <li><strong>Linking Root Domains Tracking:</strong> Understand the diversity of your backlink sources.</li>
          <li><strong>HTTP Status Code Monitoring:</strong> Check the status codes of backlinks to address any broken links.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Backlinks are a vital component of SEO, influencing your site's authority, ranking, and traffic.
          Using our advanced backlink analysis tools, you can gain valuable insights into your backlink
          profile, optimize your link-building efforts, and achieve better results in search engine rankings.
          Start analyzing your backlinks today to unlock the full potential of your SEO strategy.
        </p>
      </section>















    </div>
  );
}

export default Backlinks;
