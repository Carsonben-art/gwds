import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 'bold',
              mb: 1,
              fontSize: {
                xs: '2.8rem',
                sm: '2.8rem',
                md: '5rem'
              }
            }}
          >
            CREATIVE WEB DEVELOPMENT{' '}
            <span style={{
              background: 'linear-gradient(45deg, #ff5f6d, #a17fe0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              SERVICES
            </span>
          </Typography>
        </motion.div>

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
          {[epesipayImg, rightImg, spsImg].map((src, idx) => (
            <motion.img
              key={idx}
              src={src}
              alt={`Website ${idx + 1}`}
              style={{
                width: {xs: '150px', md: '400px'},
                maxWidth: '300px',
                borderRadius: '8px',
                border: '2px solid #fff',
                objectFit: 'cover'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + idx * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Typography variant="h6" color="#fff" gutterBottom sx={{ mt: 3 }}>
            Affordable Web Development Group Serving Clients in North America and Europe
          </Typography>

          <Button
            component={Link}
            to="/portfolio"
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
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;