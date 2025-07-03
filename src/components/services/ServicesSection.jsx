import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import brainImage from '../../assets/images/service.jpg'; 

const ServicesSection = () => {
  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: '#04050e',
        color: '#fff',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
          }}
        >
            {/* Left image */}
          <Box
            component="img"
            src={brainImage}
            alt="Dripping brain"
            sx={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: 3,
              objectFit: 'cover',
            //   height: '500px'
            }}
          />
          {/* Right content */}
          <Box flex={1}>
            <Typography variant="subtitle2" sx={{ color: '#9296b5', mb: 1 }}>
              Our Services
            </Typography>

            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2,
              }}
              gutterBottom
            >
              WE CRAFT DESIGNS
            </Typography>

            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: 'linear-gradient(90deg, #ff5f6d, #a17fe0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1.2,
              }}
              gutterBottom
            >
              THAT SELL
            </Typography>

           

            <Stack spacing={3}>
              <Box display="flex" alignItems="flex-start" gap={2}>
                <CheckCircleIcon sx={{ color: '#ff5f6d', mt: '3px' }} />
                <Box>
                  <Typography variant='h4'>Web Development</Typography>
                  <Typography variant="body2" color="#9296b5">
                    We focus on building 5 page websites for small businesses. For any other
                    website, we will connect you to developers we are partnered with, and
                    who will be able to complete the job. <br/> <br/>
                    Price- $700. 50% advance payment is required before we begin work, or
                    50% of the payment after we complete half of the work.

                  </Typography>
                </Box>
              </Box>

              <Box display="flex" alignItems="flex-start" gap={2}>
                <CheckCircleIcon sx={{ color: '#ff5f6d', mt: '3px' }} />
                <Box>
                  <Typography variant='h4'>Website maintenance</Typography>
                  <Typography variant="body2" color="#9296b5">
                    We provide monthly maintenance for your website after it's hosted to
                    make sure it keeps running. This includes Basic Search Engine
                    Optimization, Updating Software, Plugins, Fixing Broken Links and Errors,
                    and 3 hours of any updates client needs for the website. <br/><br/>
                    Price- $70 a month.

                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="flex-start" gap={2}>
                <CheckCircleIcon sx={{ color: '#ff5f6d', mt: '3px' }} />
                <Box>
                  <Typography variant='h4'>Freelance Network</Typography>
                  <Typography variant="body2" color="#9296b5">
                    If you need any other website, we will connect you with a freelancer in our 
                    network who will be able to complete the job at an affordable price. The good 
                    thing about this is that you don't need to worry about whether they have the 
                    right skills, as we already checked them for you. It takes a good developer to 
                    recognize another good developer.

                  </Typography>
                </Box>
              </Box>

              
            </Stack>
          </Box>

          
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
