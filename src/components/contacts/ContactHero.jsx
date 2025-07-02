import React from 'react';
import { Box, Typography, CardMedia } from '@mui/material';
import leftImage from '../../assets/images/contact.jpg';   
import rightImage from '../../assets/images/brain.jpg'; 

const ContactHero = () => {
  return (
    <Box
      sx={{
        bgcolor: '#04050e',
        color: '#fff',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        height:{xs: 'auto', md: '100vh'},
        mt: { xs: '3rem', md: 0 },
        p: { xs: 2, md: 6},
        gap: 4
      }}
    >
      {/* Left Content */}
      <Box sx={{ flex: 1, maxWidth: { md: '50%' } }}>
        <Typography
          variant="h1"
          sx={{ fontWeight: 'bold', mb: 2 }}
        >
          GET IN{' '}
          <span
            style={{
              background: 'linear-gradient(45deg, #ff5f6d, #a17fe0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            TOUCH
          </span>
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 5 }}>
          <CardMedia
            component="img"
            image={leftImage}
            alt="Decorative small image"
            sx={{
              width: 150,
              height: 100,
              borderRadius: 2,
              objectFit: 'cover'
            }}
          />
          <Typography color='#9296b5' fontSize='1.2rem' variant="body1" maxWidth={450}>
            We’re here to help! Whether you have a question, need assistance, or simply want to learn more about our products or services, we’re ready to connect.
          </Typography>
        </Box>
      </Box>

      {/* Right Image */}
      <CardMedia
        component="img"
        image={rightImage}
        alt="Modern building"
        sx={{
          flex: 1,
          width: '100%',
          height: '600px',
          borderRadius: 4,
          maxWidth: { md: '50%' },
          objectFit: 'cover'
        }}
      />
    </Box>
  );
};

export default ContactHero;