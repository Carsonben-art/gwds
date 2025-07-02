import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#04050e', color: '#fff', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={{xs: 5, md: 20}}>
          {/* Left section: Brand + subscription */}
          <Grid item xs={12} md={4}>
            <Typography
                variant="h4"
                fontWeight="bold"
                // textAlign={'center'}
                gutterBottom
                sx={{
                '& span': {
                        background: 'linear-gradient(90deg, #ff5f6d, #ffc371)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                },
                }}
            >
                 <span>GWDS</span>
            </Typography>
             <Typography 
              variant="h6" 
              color="#9296b5"
              fontSize={{
                xs: '1rem',
                md: '2rem'
              }} >
                Global Web Development Standard
                </Typography>
            
            <Typography variant="caption" sx={{ mt: 1, display: 'block' }}>
              Email: webdevelopment@gwdsgroup.com
            </Typography>
            <Box sx={{ mt: 1 }}>
                <Link 
                href="https://www.facebook.com/profile.php?id=61577196478175." 
                target="_blank" 
                rel="noopener" 
                color="inherit"
                >
                <FacebookIcon sx={{ fontSize: 30 }} />
                </Link>
            </Box>
          </Grid>

          {/* Middle links */}
          <Grid item xs={12} md={4}>
            <Grid container spacing={10}>
              <Grid item xs={6} >
                <Typography mb={2}>
                    <Link href="#" color="inherit" underline="hover">Home</Link></Typography>
                <Typography mb={2}><Link href="#" color="inherit" underline="hover">Services</Link></Typography>
                <Typography mb={2}><Link href="#" color="inherit" underline="hover">Portfolio</Link></Typography>
                <Typography mb={2}><Link href="#" color="inherit" underline="hover">Contact</Link></Typography>
              </Grid>
              <Grid item xs={6} spacing={4}>
                <Typography mb={2}><Link href="#" color="inherit" underline="hover">Services</Link></Typography>
                <Typography mb={2}><Link href="#" color="inherit" underline="hover">Web Development</Link></Typography>
                <Typography mb={2}><Link href="#" color="inherit" underline="hover">Web Maintenance</Link></Typography>
                <Typography mb={2}><Link href="#" color="inherit" underline="hover">UI/UX design</Link></Typography>
              </Grid>
            </Grid>
          </Grid>

          
        </Grid>
<hr/>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Typography variant="caption">
            © 2025 <Link href="#" color="inherit" underline="always">GWDS</Link> 
          </Typography>
          
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;