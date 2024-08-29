import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import SpeedIcon from '@mui/icons-material/Speed';
import { Navigate } from 'react-router-dom';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import {
  ListItem, ListItemButton, ListItemIcon, ListItemText,
  Accordion, AccordionSummary, AccordionDetails
} from '@mui/material';
import { Link } from 'react-router-dom';
import DescriptionIcon from '@mui/icons-material/Description';
import LinkIcon from '@mui/icons-material/Link';
import ImageIcon from '@mui/icons-material/Image';
import TitleIcon from '@mui/icons-material/Title';

import '../App.css'; // Ensure your CSS is correctly imported
import KeywordResearch from './KeywordResearch';
import { useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import FullContent from './Fullcontent';
import Sitemap from './Sitemap';
import Urlanalyser from './Urlanalyser';
import Indexibility from './Indexibility';
import Status200Links from '../Pages/Status200Links';
import Socialtags from '../Pages/Socialtags';
import Directives from '../Pages/Directives';
import Imageresource from './Imageresource';
import KeywordSuggestion from '../Pages/Keywordsuggesstion';
import WesiteAnalysLinks from '../Pages/Websiteanalysislinks';
import Canonicallinks from './Canonicallinks';
import Brokenimages from './Brokenimages';
import Title from './Title';
import Errorlinks from '../Pages/Error';
import Headings from './Headings';
import DoFollow from '../Pages/Dofollowlinks';
import Internallinks from './Internallinks'; // Make sure this component is imported correctly
import Crawedlinks from './Crawedlinks';
import Imagelinks from './Imagelinks';
import AddKeyword from '../Components/AddKeyword';
import AnalyzePage from '../Components/AnalyzePage';
import Externallinks from '../Pages/Externallinks';
import Backlinks from '../Pages/Backlinks';
import DefaultDashboardContent from '../Pages/DefaultDashboardContent';
import Analyseoptimisation from '../Pages/Analyseoptimisation';
import Calculatespanscore from '../Pages/Calculatespanscore';
import Snippets from '../Pages/Snippets';
import Competitoranalysis from '../Pages/Competitoranalysis';
import Analysewebsitecolors from '../Pages/Analysewebsitecolors'
import { useEffect, useState } from 'react';
import CheckWebsite from './CheckWebsite';
import AnalyzeSEO from './AnalyzeSEO';
import Analyseseotool from './Analyseseotool';
import Seoanalysis from './Seoanalysis';
import Allissues from './Allissues';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Internalissues from './Internalissues'; // Import your InternalIssues component
import SummaryComponent from './SummaryComponent';
import Internallinksseperate from './Internallinksseperate'
import Externallinksseperate from './Externallinksseperate'
import Metatagsseperate from './Metatagsseperate'
import TotalHtmlPages from './TotalHtmlPages';
import NonHtmlFiles from './NonHtmlFiles';
import HtmlPages from './HtmlPages';
import Backlinksautomatic from './Backlinksautomatic';
import Canonicallinksauto from './Canonicallinksauto';
import BrokenLinks from './Brokenlinks';
import Changepassword from './Changepassword';
import Myprofile from './Myprofile';
import NonCanonicallinks from '../Components/Noncanonicallinks';
import Nofollowlinks from '../Pages/Nofollowlinks';
import Nonindexed from '../Pages/Nonindexed';
import Indexed from '../Pages/Indexed';
import Imagescount from './Imagescount';

const drawerWidth = 240;

const Main = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 30,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [username, setUsername] = useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);


  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    console.log(storedUsername); // This will print the username of the logged-in user
    setUsername(storedUsername);
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  
  const handleUpgradeClick = () => {
    navigate('/pricing');
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const navigate = useNavigate();
 
  const handleMenuClose = () => {
    setAnchorEl(null);
    navigate('/admin/changepassword');  // Navigate to Forgot Password page
};



const handleMenuClose1 = () => {
  setAnchorEl(null);
  navigate('/admin/myprofile');  // Navigate to Forgot Password page
};
  const menuId = 'profile-menu';


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: 'rgb(37, 80, 123)' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" noWrap component="div" sx={{ color: 'white' }}>
              Seo Dashboard
            </Typography>
          </Box>
      
          {username && <p style={{ color: '#ecf505' }}>Welcome, {username}!</p>}
          &nbsp;&nbsp;&nbsp;&nbsp;    &nbsp;&nbsp;&nbsp;&nbsp;
         
          <IconButton
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      color="inherit"
                    >


                      <AccountCircle />
                    </IconButton>
                    <Menu
                      anchorEl={anchorEl}
                      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                      id={menuId}
                      keepMounted
                      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                    >
                     <MenuItem onClick={handleMenuClose1}>My Profile</MenuItem>
                     <MenuItem onClick={handleMenuClose}>Change Password</MenuItem>
                    </Menu>
                    
          </Toolbar>
  

      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
    <DrawerHeader sx={{ backgroundColor: 'rgb(37, 80, 123)', padding: '16px', display: 'flex', alignItems: 'center' }}>
  <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#fff' }}>
    <h1 className='logo'>V-Audit</h1>
  </Typography>
  <IconButton onClick={handleDrawerClose} style={{ color: 'white' }}>
    {theme.direction === 'ltr' ? <ChevronLeftIcon style={{ color: 'white' }} /> : <ChevronRightIcon style={{ color: 'white' }} />}
  </IconButton>
</DrawerHeader>









<List sx={{ backgroundColor: 'rgb(37, 80, 123)' }}>
        {/* Internal Links Accordion */}

        <Accordion 
          expanded={expanded === 'fullcontent'} 
          onChange={handleChange('fullcontent')}
          className="accordion"
          style={{ backgroundColor: 'rgb(37, 80, 123)' }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
            aria-controls="fullcontent-content"
            id="fullcontent-header"
            className="accordion-summary"
          >
            <ListItemIcon className="accordion-icon" style={{ color: '#fff' }}>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText className="usha" primary="fullcontent Links" />
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <List>
              <ListItem disablePadding>
                <ListItemButton 
                  component={Link} 
                  to="fullcontent" 
                  className="list-item-button"
                  style={{ backgroundColor: 'rgb(37, 80, 123)', color: '#fff' }}
                >
                  <ListItemIcon className="list-item-icon" style={{ color: '#fff' }}>
                  <InsertLinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Links" className="list-item-text" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="fullcontent graphs" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <SpeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Graphs" className="list-item-text" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>







<Accordion 
          expanded={expanded === 'internalLinks'} 
          onChange={handleChange('internalLinks')}
          className="accordion"
          style={{ backgroundColor: 'rgb(37, 80, 123)' }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
            aria-controls="internalLinks-content"
            id="internalLinks-header"
            className="accordion-summary"
          >
            <ListItemIcon className="accordion-icon" style={{ color: '#fff' }}>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText className="usha" primary="Internal Links" />
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <List>
              <ListItem disablePadding>
                <ListItemButton 
                  component={Link} 
                  to="fullcontent/internallinks" 
                  className="list-item-button"
                  style={{ backgroundColor: 'rgb(37, 80, 123)', color: '#fff' }}
                >
                  <ListItemIcon className="list-item-icon" style={{ color: '#fff' }}>
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Links" className="list-item-text" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="internalgraphs" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <SpeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Graphs" className="list-item-text" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        {/* Canonical Links Accordion */}
        <Accordion 
          expanded={expanded === 'canonicallinks'} 
          onChange={handleChange('canonicallinks')}
          className="accordion"
          style={{ backgroundColor: 'rgb(37, 80, 123)' }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
            aria-controls="canonicallinks-content"
            id="canonicallinks-header"
            className="accordion-summary"
          >
            <ListItemIcon className="accordion-icon" style={{ color: '#fff' }}>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText className="accordion-summary-text" primary="Canonical Links" />
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="canonicallinks" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Links" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="canonicalgraphs" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <SpeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Graphs" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>









        {/* Backlink Analysis Accordion */}
        <Accordion 
          expanded={expanded === 'backlinkAnalysis'} 
          onChange={handleChange('backlinkAnalysis')}
          className="accordion"
          style={{ backgroundColor: 'rgb(37, 80, 123)' }}  // Correct way to set background color

        >
          <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}  // Apply styles directly here
    aria-controls="backlinkAnalysis-content"
            id="backlinkAnalysis-header"
            className="accordion-summary"
          >
            <ListItemIcon className="accordion-icon"  style={{color:'#fff'}}>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText className="accordion-summary-text" primary="Backlink Analysis" />
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="backlinks" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Links" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/backgraphs" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <SpeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Graphs" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        {/* Add more sections as needed */}
      {/* Crawed Links Accordion */}
      <Accordion 
          expanded={expanded === 'crawedLinks'} 
          onChange={handleChange('crawedLinks')}
          className="accordion"
          style={{ backgroundColor: 'rgb(37, 80, 123)', color: '#fff' }} 
        >
          <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}  // Apply styles directly here
    aria-controls="crawedLinks-content"
            id="crawedLinks-header"
            className="accordion-summary"
          >
            <ListItemIcon className="accordion-icon"  style={{color:'#fff'}}>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText className="accordion-summary-text" primary="Crawed Links" />
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/crawedlinks" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Links" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/crawedgraphs" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <SpeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Graphs" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        {/* Canonical Links Accordion */}

        <Accordion 
          expanded={expanded === 'externalLinks'} 
          onChange={handleChange('externalLinks')}
          className="accordion"
          style={{ backgroundColor: 'rgb(37, 80, 123)' }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
            aria-controls="externalLinks-content"
            id="externalLinks-header"
            className="accordion-summary"
          >
            <ListItemIcon className="accordion-icon" style={{ color: '#fff' }}>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText className="accordion-summary-text" primary="External Links" />
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="fullcontent/externallinks" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Links" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="externalgraphs" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <SpeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Graphs" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>


        {/* Do Follow Accordion */}
        <Accordion 
          expanded={expanded === 'doFollow'} 
          onChange={handleChange('doFollow')}
          className="accordion"
          style={{ backgroundColor: 'rgb(37, 80, 123)', color: '#fff' }} 
        >
          <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}  // Apply styles directly here
    aria-controls="doFollow-content"
            id="doFollow-header"
            className="accordion-summary"
          >
            <ListItemIcon className="accordion-icon"  style={{color:'#fff'}}>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText className="accordion-summary-text" primary="Do Follow" />
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="fullcontent/dofollow" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Links" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/dofollowgraphs" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <SpeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Graphs" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
    {/* Indexibility Accordion */}
    <Accordion 
          expanded={expanded === 'indexibility'} 
          onChange={handleChange('indexibility')}
          className="accordion"
          style={{ backgroundColor: 'rgb(37, 80, 123)', color: '#fff' }} 
        >
          <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}  // Apply styles directly here
    aria-controls="indexibility-content"
            id="indexibility-header"
            className="accordion-summary"
          >
            <ListItemIcon className="accordion-icon" style={{color:'#fff'}}>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText className="accordion-summary-text" primary="Indexibility" />
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="indexibility" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Links" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/indexibilitygraphs" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <SpeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Graphs" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        {/* Sitemaps Accordion */}
        <Accordion 
          expanded={expanded === 'sitemaps'} 
          onChange={handleChange('sitemaps')}
          className="accordion"
          style={{ backgroundColor: 'rgb(37, 80, 123)', color: '#fff' }} 
        >
          <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}  // Apply styles directly here
    aria-controls="sitemaps-content"
            id="sitemaps-header"
            className="accordion-summary"
          >
            <ListItemIcon className="accordion-icon"  style={{color:'#fff'}}>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText className="accordion-summary-text" primary="Sitemaps" />
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="sitemap" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Links" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/sitemapgraphs" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <SpeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Graphs" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        {/* Social Tags Accordion */}
        <Accordion 
          expanded={expanded === 'socialTags'} 
          onChange={handleChange('socialTags')}
          className="accordion"
          style={{ backgroundColor: 'rgb(37, 80, 123)', color: '#fff' }} 
        >
          <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}  // Apply styles directly here
    aria-controls="socialTags-content"
            id="socialTags-header"
            className="accordion-summary"
          >
            <ListItemIcon className="accordion-icon"  style={{color:'#fff'}}>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText className="accordion-summary-text" primary="Social Tags" />
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="socialtags" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Links" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/socialtagsgraphs" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <SpeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Graphs" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion 
          expanded={expanded === 'headings'} 
          onChange={handleChange('headings')}
          className="accordion"
          style={{ backgroundColor: 'rgb(37, 80, 123)', color: '#fff' }} 
        >
          <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}  // Apply styles directly here
    aria-controls="headings-content"
            id="headings-header"
            className="accordion-summary"
          >
            <ListItemIcon className="accordion-icon"  style={{color:'#fff'}}>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText className="accordion-summary-text" primary="Headings" />
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="headings" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Links" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/headingsgraphs" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <SpeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Graphs" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        {/* Errors Accordion */}
        <Accordion 
          expanded={expanded === 'errors'} 
          onChange={handleChange('errors')}
          className="accordion"
          style={{ backgroundColor: 'rgb(37, 80, 123)', color: '#fff' }} 
        >
          <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}  // Apply styles directly here
    aria-controls="errors-content"
            id="errors-header"
            className="accordion-summary"
          >
            <ListItemIcon className="accordion-icon"  style={{color:'#fff'}}>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText className="accordion-summary-text" primary="Errors" />
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="errors" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Links" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/errorsgraphs" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <SpeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Graphs" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        {/* URL Analyzer Accordion */}
        <Accordion 
          expanded={expanded === 'urlAnalyzer'} 
          onChange={handleChange('urlAnalyzer')}
          className="accordion"
          style={{ backgroundColor: 'rgb(37, 80, 123)', color: '#fff' }} 
        >
          <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}  // Apply styles directly here
    aria-controls="urlAnalyzer-content"
            id="urlAnalyzer-header"
            className="accordion-summary"
          >
            <ListItemIcon className="accordion-icon" style={{color:'#fff'}}>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText className="accordion-summary-text" primary="URL Analyzer" />
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="urlanalyzer" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Links" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/urlanalyzergraphs" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <SpeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Graphs" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        {/* Website Analyzer Accordion */}
        <Accordion 
          expanded={expanded === 'websiteAnalyzer'} 
          onChange={handleChange('websiteAnalyzer')}
          className="accordion"
          style={{ backgroundColor: 'rgb(37, 80, 123)', color: '#fff' }} 
        >
          <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}  // Apply styles directly here
    aria-controls="websiteAnalyzer-content"
            id="websiteAnalyzer-header"
            className="accordion-summary"
          >
            <ListItemIcon className="accordion-icon"  style={{color:'#fff'}}>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText className="accordion-summary-text" primary="Website Loading speed" />
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="analysewebsitecolors" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Links" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/websiteanalyzergraphs" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <SpeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Graphs" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        {/* Status 200 Links Accordion */}
        <Accordion 
          expanded={expanded === 'status200Links'} 
          onChange={handleChange('status200Links')}
          className="accordion"
          style={{ backgroundColor: 'rgb(37, 80, 123)', color: '#fff' }} 
        >
          <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}  // Apply styles directly here
    aria-controls="status200Links-content"
            id="status200Links-header"
            className="accordion-summary"
          >
            <ListItemIcon className="accordion-icon"  style={{color:'#fff'}}>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText className="accordion-summary-text" primary="Status 200 Links" />
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="status200links" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Links" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/status200linksgraphs" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <SpeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Graphs" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        
        <Accordion 
          expanded={expanded === 'keywordResearch'} 
          onChange={handleChange('keywordResearch')}
          className="accordion"
          style={{ backgroundColor: 'rgb(37, 80, 123)', color: '#fff' }} 
        >
          <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}  // Apply styles directly here
    aria-controls="keywordResearch-content"
            id="keywordResearch-header"
            className="accordion-summary"
          >
            <ListItemIcon className="accordion-icon"  style={{color:'#fff'}}>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText className="accordion-summary-text" primary="Keyword Research" />
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="keywordresearch" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Links" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/keywordresearchgraphs" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <SpeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Graphs" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        {/* Keyword Suggestion Accordion */}
        <Accordion 
          expanded={expanded === 'keywordSuggestion'} 
          onChange={handleChange('keywordSuggestion')}
          className="accordion"
          style={{ backgroundColor: 'rgb(37, 80, 123)', color: '#fff' }} 
        >
          <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}  // Apply styles directly here
    aria-controls="keywordSuggestion-content"
            id="keywordSuggestion-header"
            className="accordion-summary"
          >
            <ListItemIcon className="accordion-icon"  style={{color:'#fff'}}>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText className="accordion-summary-text" primary="Keyword Suggestion" />
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="keywordsuggestion" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Links" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/keywordsuggestiongraphs" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <SpeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Graphs" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        {/* Image Links Accordion */}
        <Accordion 
          expanded={expanded === 'imageLinks'} 
          onChange={handleChange('imageLinks')}
          className="accordion"
          style={{ backgroundColor: 'rgb(37, 80, 123)', color: '#fff' }} 
        >
          <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}  // Apply styles directly here
    aria-controls="imageLinks-content"
            id="imageLinks-header"
            className="accordion-summary"
          >
            <ListItemIcon className="accordion-icon"  style={{color:'#fff'}}>
              <ImageIcon />
            </ListItemIcon>
            <ListItemText className="accordion-summary-text" primary="Image Links" />
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="imagelinks" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Links" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/imagelinksgraphs" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <SpeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Graphs" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        {/* Image Resources Accordion */}
        <Accordion 
          expanded={expanded === 'imageResources'} 
          onChange={handleChange('imageResources')}
          className="accordion"
          style={{ backgroundColor: 'rgb(37, 80, 123)', color: '#fff' }} 
        >
          <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}  // Apply styles directly here
    aria-controls="imageResources-content"
            id="imageResources-header"
            className="accordion-summary"
          >
            <ListItemIcon className="accordion-icon"  style={{color:'#fff'}}>
              <ImageIcon />
            </ListItemIcon>
            <ListItemText className="accordion-summary-text" primary="Image Resources" />
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="imageresources" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Links" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/imageresourcesgraphs" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <SpeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Graphs" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

      

        {/* Title Accordion */}
        <Accordion 
          expanded={expanded === 'title'} 
          onChange={handleChange('title')}
          className="accordion"
          style={{ backgroundColor: 'rgb(37, 80, 123)', color: '#fff' }} 
        >
          <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}  // Apply styles directly here
    aria-controls="title-content"
            id="title-header"
            className="accordion-summary"
          >
            <ListItemIcon className="accordion-icon"  style={{color:'#fff'}}>
              <TitleIcon />
            </ListItemIcon>
            <ListItemText className="accordion-summary-text" primary="Title" />
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="title" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Links" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/titlegraphs" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <SpeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Graphs" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>



        <Accordion 
          expanded={expanded === 'analyseoptimisation'} 
          onChange={handleChange('analyseoptimisation')}
          className="accordion"
          style={{ backgroundColor: 'rgb(37, 80, 123)', color: '#fff' }} 
        >
          <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}  // Apply styles directly here
    aria-controls="title-content"
            id="title-header"
            className="accordion-summary"
          >
            <ListItemIcon className="accordion-icon"  style={{color:'#fff'}}>
              <TitleIcon />
            </ListItemIcon>
            <ListItemText className="accordion-summary-text" primary="Analyse optimisation" />
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="analyseaptimisation" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="analyseoptimisation" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/titlegraphs" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <SpeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Graphs" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>




        <Accordion 
          expanded={expanded === 'spanscore'} 
          onChange={handleChange('spanscore')}
          className="accordion"
          style={{ backgroundColor: 'rgb(37, 80, 123)', color: '#fff' }} 
        >
          <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}  // Apply styles directly here
    aria-controls="title-content"
            id="title-header"
            className="accordion-summary"
          >
            <ListItemIcon className="accordion-icon"  style={{color:'#fff'}}>
              <TitleIcon />
            </ListItemIcon>
            <ListItemText className="accordion-summary-text" primary="Span Score" />
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="spanscore" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Span Score" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/spanscore" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <SpeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Graphs" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>



        <Accordion 
          expanded={expanded === 'check_snippets'} 
          onChange={handleChange('check_snippets')}
          className="accordion"
          style={{ backgroundColor: 'rgb(37, 80, 123)', color: '#fff' }} 
        >
          <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}  // Apply styles directly here
    aria-controls="title-content"
            id="title-header"
            className="accordion-summary"
          >
            <ListItemIcon className="accordion-icon"  style={{color:'#fff'}}>
              <TitleIcon />
            </ListItemIcon>
            <ListItemText className="accordion-summary-text" primary="check_snippets" />
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="check_snippets" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Span Score" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/check_snippets" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <SpeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Graphs" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>






        <Accordion 
          expanded={expanded === 'competitoranalysis'} 
          onChange={handleChange('competitoranalysis')}
          className="accordion"
          style={{ backgroundColor: 'rgb(37, 80, 123)', color: '#fff' }} 
        >
          <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}  // Apply styles directly here
    aria-controls="title-content"
            id="title-header"
            className="accordion-summary"
          >
            <ListItemIcon className="accordion-icon"  style={{color:'#fff'}}>
              <TitleIcon />
            </ListItemIcon>
            <ListItemText className="accordion-summary-text" primary="Competitor Analysis" />
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="competitoranalysis" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Span Score" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/competitoranalysis" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <SpeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Graphs" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>



        <Accordion 
          expanded={expanded === 'checkwebsiteaccessibility'} 
          onChange={handleChange('checkwebsiteaccessibility')}
          className="accordion"
          style={{ backgroundColor: 'rgb(37, 80, 123)', color: '#fff' }} 
        >
          <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}  // Apply styles directly here
    aria-controls="title-content"
            id="title-header"
            className="accordion-summary"
          >
            <ListItemIcon className="accordion-icon"  style={{color:'#fff'}}>
              <TitleIcon />
            </ListItemIcon>
            <ListItemText className="accordion-summary-text" primary="Check website accessibility" />
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="checkwebsiteaccessibility" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Analyse seo" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/checkwebsiteaccessibility" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <SpeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Graphs" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>





        <Accordion 
          expanded={expanded === 'analyseseo'} 
          onChange={handleChange('analyseseo')}
          className="accordion"
          style={{ backgroundColor: 'rgb(37, 80, 123)', color: '#fff' }} 
        >
          <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}  // Apply styles directly here
    aria-controls="title-content"
            id="title-header"
            className="accordion-summary"
          >
            <ListItemIcon className="accordion-icon"  style={{color:'#fff'}}>
              <TitleIcon />
            </ListItemIcon>
            <ListItemText className="accordion-summary-text" primary="Analyse seo" />
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="analyseseo" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Analyse seo" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/analyseseo" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <SpeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Graphs" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>



        <Accordion 
          expanded={expanded === 'analyseseotool'} 
          onChange={handleChange('analyseseotool')}
          className="accordion"
          style={{ backgroundColor: 'rgb(37, 80, 123)', color: '#fff' }} 
        >
          <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}  // Apply styles directly here
    aria-controls="title-content"
            id="title-header"
            className="accordion-summary"
          >
            <ListItemIcon className="accordion-icon"  style={{color:'#fff'}}>
              <TitleIcon />
            </ListItemIcon>
            <ListItemText className="accordion-summary-text" primary="Analyse seo tool" />
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="analyseseotool" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Analyse seo tool" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/analyseseotool" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <SpeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Graphs" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>




        <Accordion 
          expanded={expanded === 'seoanalysis'} 
          onChange={handleChange('seoanalysis')}
          className="accordion"
          style={{ backgroundColor: 'rgb(37, 80, 123)', color: '#fff' }} 
        >
          <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}  // Apply styles directly here
    aria-controls="title-content"
            id="title-header"
            className="accordion-summary"
          >
            <ListItemIcon className="accordion-icon"  style={{color:'#fff'}}>
              <TitleIcon />
            </ListItemIcon>
            <ListItemText className="accordion-summary-text" primary="Seo Analysis" />
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="seoanalysis" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="SEO Analysis" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/seoanalysis" className="list-item-button">
                  <ListItemIcon className="list-item-icon">
                    <SpeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Graphs" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>







      </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Routes>
        <Route path="/" element={<Navigate to="/admin/default" replace />} />
         <Route path="/default" element={<DefaultDashboardContent />} />


          {/* <Route path="/internallinks" element={<Internallinks />} /> */}
          <Route path="/keywordResearch" element={<KeywordResearch />} />
          <Route path="/fullcontent" element={<FullContent />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/urlanalyser" element={<Urlanalyser />} />
          <Route path="/indexibility" element={<Indexibility />} />
          <Route path="/status200links" element={<Status200Links />} />
          <Route path="/socialtags" element={<Socialtags />} />
          <Route path="/directives" element={<Directives />} />
          <Route path="/imageresources" element={<Imageresource />} />
          <Route path="/keywordsuggestion" element={<KeywordSuggestion />} />
          <Route path="/wesiteanalyslinks" element={<WesiteAnalysLinks />} />
          <Route path="/fullcontent/canonicallinks" element={<Canonicallinks />} />
          <Route path="/fullcontent/noncanonicallinks" element={<NonCanonicallinks />} />

          <Route path="/brokenimages" element={<Brokenimages />} />
          <Route path="/title" element={<Title />} />
          <Route path="/errorlinks" element={<Errorlinks />} />
          <Route path="/headings" element={<Headings />} />
          <Route path="/fullcontent/dofollow" element={<DoFollow />} />
          <Route path="/fullcontent/nofollow" element={<Nofollowlinks />} />

          <Route path="/fullcontent/crawedlinks" element={<Crawedlinks />} />
          <Route path="/imagelinks" element={<Imagelinks />} />
          <Route path="/addkeyword" element={<AddKeyword />} />
          <Route path="/analyzePage" element={<AnalyzePage />} />
          <Route path="/fullcontent/externallinks" element={<Externallinks />} />
          <Route path="/backlinks" element={<Backlinks />} />
          <Route path="/analyseaptimisation" element={<Analyseoptimisation />} />
          <Route path="/spanscore" element={<Calculatespanscore />} />
          <Route path="/check_snippets" element={<Snippets />} />
          <Route path="/competitoranalysis" element={<Competitoranalysis />} />
          <Route path="/analysewebsitecolors" element={<Analysewebsitecolors />} />
          <Route path="/checkwebsiteaccessibility" element={<CheckWebsite />} />
          <Route path="summary" element={<SummaryComponent />} />

          <Route path="/analyseseo" element={<AnalyzeSEO />} />
          <Route path="/analyseseotool" element={<Analyseseotool />} />
          <Route path="/seoanalysis" element={<Seoanalysis />} />
          <Route path="/fullcontent/internallinks" element={<Internallinks />} />
          <Route path="/fullcontent/allissues" element={<Allissues />} />
          <Route path="/interlinksseperate" element={<Internallinksseperate />} />
          <Route path="/fullcontent/internallinks/internallinksseperate" element={<Internallinksseperate />} />
          <Route path="/fullcontent/externallinksseperate" element={<Externallinksseperate />} />
          <Route path="/fullcontent/metatags" element={<Metatagsseperate />} />
          <Route path="/fullcontent/totalhtmlpages" element={<TotalHtmlPages />} />
          <Route path="/fullcontent/nonhtmlfiles" element={<NonHtmlFiles />} />
          <Route path="/fullcontent/htmlpages" element={<HtmlPages />} />
          <Route path="/fullcontent/indexed" element={<Indexed />} />
          <Route path="/fullcontent/nonindexed" element={<Nonindexed />} />

          <Route path="/fullcontent/htmlpages" element={<HtmlPages />} />
          <Route path="/fullcontent/imagescount" element={<Imagescount />} />

          <Route path="/fullcontent/backlinksauto" element={<Backlinksautomatic />} />
          <Route path="/fullcontent/internallinks" element={<Internallinks />} />
          <Route path="/fullcontent/canonicalauto" element={<Canonicallinksauto />} />
          <Route path="/fullcontent/brokenlinks" element={<BrokenLinks />} />
          <Route path="/changepassword" element={<Changepassword />} />
          <Route path="/myprofile" element={<Myprofile />} />

          <Route path="/internallinks/internalissues" element={<Internalissues />} />



        </Routes>
      </Main>
    </Box>
  );
}
