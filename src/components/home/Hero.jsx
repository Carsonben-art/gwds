import React from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        py: 8,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        {/* Title */}
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Crafted Websites
        </Typography>
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          that Convert
        </Typography>

        {/* Subtitle */}
        <Typography variant="h6" color="grey.400" gutterBottom>
          High-performing, visually stunning websites designed to grow your brand online.
        </Typography>

        {/* CTA Button */}
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
          Book a Free Call
        </Button>

        {/* Screenshots */}
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 5 }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Box
              component="img"
              src="https://via.placeholder.com/300x200?text=Website+1"
              alt="Website 1"
              sx={{
                width: '100%',
                borderRadius: 2,
                border: '2px solid #fff',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              component="img"
              src="https://via.placeholder.com/300x200?text=Website+2"
              alt="Website 2"
              sx={{
                width: '100%',
                borderRadius: 2,
                border: '2px solid #fff',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              component="img"
              src="https://via.placeholder.com/300x200?text=Website+3"
              alt="Website 3"
              sx={{
                width: '100%',
                borderRadius: 2,
                border: '2px solid #fff',
              }}
            />
          </Grid>
        </Grid>

        {/* "Made in Framer" badge placeholder */}
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="caption"
            sx={{
              backgroundColor: '#222',
              borderRadius: 1,
              px: 1,
              py: 0.5,
              display: 'inline-block',
            }}
          >
            Made in Framer
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
