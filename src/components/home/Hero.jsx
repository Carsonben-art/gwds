import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

import epesipayImg from '../../assets/images/epesipay.png';
import rightImg from '../../assets/images/right.png';
import spsImg from '../../assets/images/sps.png';
import bgImage from '../../assets/images/bg.png';

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: '#000',
        color: '#fff',
        py: 8,
        textAlign: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.2,
          zIndex: 0,
        }}
      />

      {/* Content */}
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          CREATIVE WEB
        </Typography>
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          DEVELOPMENT SERVICES
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'nowrap',
            gap: 2,
            mt: 5,
          }}
        >
          <Box
            component="img"
            src={epesipayImg}
            alt="Website 1"
            sx={{
              width: '300px',
              height: '170px',
              objectFit: 'cover',
              borderRadius: 2,
              border: '2px solid #fff',
            }}
          />
          <Box
            component="img"
            src={rightImg}
            alt="Website 2"
            sx={{
              width: '300px',
              height: '170px',
              objectFit: 'cover',
              borderRadius: 2,
              border: '2px solid #fff',
            }}
          />
          <Box
            component="img"
            src={spsImg}
            alt="Starting Point"
            sx={{
              width: '300px',
              height: '170px',
              objectFit: 'cover',
              borderRadius: 2,
              border: '2px solid #fff',
            }}
          />
        </Box>

        <Typography variant="h6" color="#fff" gutterBottom sx={{ mt: 3 }}>
          Affordable Web Development Group Serving Clients in North America and Europe
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: '#00bfff',
            color: '#000',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#009acd',
            },
          }}
        >
          View Our Portfolio
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;