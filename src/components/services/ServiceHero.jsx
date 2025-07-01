import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import bgImage from '../../assets/images/mesh.png';
import brainImage from '../../assets/images/sImage.png';
import creativeImg from '../../assets/images/creative.jpg';

const ServiceHero = () => {
  return (
    <Box
      sx={{
        py: 8,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4,
          }}
        >
          {/* Text content on the left */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle2" sx={{ color: 'grey.400', mb: 1 }}>
            Services
            </Typography>

            <Typography
              variant="h2"
              fontWeight="bold"
              color='#fff'
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2,
              }}
              gutterBottom
            >
             Innovative Web Development & 
            </Typography>

            <Typography
              variant="h2"
              fontWeight="bold"
              gutterBottom
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: 'linear-gradient(90deg, #ff5f6d, #a17fe0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1.2,
              }}
            >
              Reliable Maintenance
            </Typography>

            <Typography variant="body1" color="grey.400" sx={{ mt: 2 }}>
              We craft modern, high-performing websites tailored to your business needs and keep them running smoothly with proactive maintenance and support.
            </Typography>
          </Box>

          {/* Images on the right */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              flex: 1,
            }}
          >
            
                <Box
                component="img"
                src={brainImage}
                alt="Creative brain"
                sx={{
                    width: '300px',
                    height: '400px',
                    objectFit: 'cover',
                    borderRadius: 3,
                }}
                />

            <Box
              component="img"
              src={creativeImg}
              alt="VR user"
              sx={{
                width: '300px',
                height: '400px',
                objectFit: 'cover',
                borderRadius: 3,
                // mb: { xs: 4, sm: 0 },
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ServiceHero;
