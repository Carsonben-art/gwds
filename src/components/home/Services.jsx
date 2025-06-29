import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import ExpenseCard from './Card'; // Import your reusable card component
import webdev from '../../assets/images/webdev.jpg'
import webm from '../../assets/images/wedm.jpg'
const Services = () => {
  const features = [
    {
      image: webdev, 
      title: 'WEB DEVELOPMENT',
      text: 'See Details'
    },
    {
      image: webm, 
      title: 'WEB MAINTENANCE',
      text: 'See Details'
    },
  ];

  return (
    <Box sx={{ backgroundColor: '#04050e', color: '#fff', py: 8 }}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 6,
          }}
        >
          {/* Left side: Features with cards */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 4,
              justifyContent: 'center',
              flex: 1,
            }}
          >
            {features.map((item, index) => (
              <ExpenseCard
                key={index}
                image={item.image}
                title={item.title}
                buttonText={item.text}
                // bgColor="#ffcdd2"
              />
            ))}
          </Box>

          {/* Right side: Text + button */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: { xs: 'center', md: 'flex-start' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="subtitle2" color="grey.400" gutterBottom>
              Our Services
            </Typography>

            <Typography
              variant="h3"
              fontWeight="bold"
              gutterBottom
              sx={{
                '& span': {
                  background: 'linear-gradient(90deg, #ff5f6d, #ffc371)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                },
              }}
            >
              End-to-End Web Solutions for Your <span>Digital Success</span>
            </Typography>

            <Typography variant="body1" color="grey.400" mb={3}>
              We provide complete web solutions — from creating powerful, custom websites to keeping them secure, fast, and always up-to-date.
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: '#00bfff',
                color: '#000',
                fontWeight: 'bold',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                '&:hover': {
                  backgroundColor: '#009acd',
                },
              }}
              onClick={() => (window.location.href = '/services')}
            >
              See Our Services
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
