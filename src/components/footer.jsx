import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
import logo from '../assets/images/GWDSFinalLogo.png'

const Footer = () => {
  const pages = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' }
];
  return (
    <Box sx={{ backgroundColor: '#04050e', color: '#fff', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 20 }}>
          {/* Left section: Brand + subscription */}
          <Grid item xs={12} md={4}>
            <Box
                      component={Link}
                      to="/"
                      sx={{
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        mr: 2,
                      }}
                    >
                      <Box
                        component="img"
                        src={logo}
                        alt="GWDS Logo"
                        sx={{
                          height: { xs: 40, md: 60 },
                          width: 'auto',
                          objectFit: 'contain',
                        }}
                      />
                    </Box>

            <Typography variant="body1" fontSize={'1.2rem'} sx={{ mt: 1, display: 'block' }}>
              Email: webdevelopment@gwdsgroup.com
            </Typography>
                    <Box
                      component={Link}
                      to="https://www.facebook.com/profile.php?id=61577196478175"
                      sx={{
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                       
                        
                      }}
                    >
                     <FacebookIcon sx={{ fontSize: 40, color: '#fff' }} />
                    </Box>
           
          </Grid>

          {/* Middle links */}
              <Box sx={{ flexGrow: 1, display: 'flex',flexDirection:'column', justifyContent: 'flex-start', paddingLeft: '2rem',  }}>
                          {pages.map((page) => (
                            <Button
                              key={page.name}
                              component={Link}
                              to={page.path}
                              sx={{ my: 2, color: '#9296b5', fontSize: '1.3rem', display: 'block' }}
                            >
                              {page.name}
                            </Button>
                          ))}
                        </Box>
        </Grid>
        <hr />
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Typography variant="body1">
            © 2025 GWDS
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;