import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

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
        height: { xs: 'auto', md: '100vh' },
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
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            style={{ flex: 1 }}
          >
            <Typography variant="subtitle2" sx={{ color: '#9296b5', mb: 1 }}>
              Services
            </Typography>

            <Typography
              variant="h2"
              fontWeight="bold"
              color="#fff"
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

            <Typography variant="body1" color="#9296b5" sx={{ mt: 2 }}>
              We craft modern, high-performing websites tailored to your business needs and keep them running smoothly with proactive maintenance and support.
            </Typography>
          </motion.div>

          {/* Images */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              flex: 1,
            }}
          >
            <motion.img
              src={brainImage}
              alt="Creative brain"
              style={{
                width: '300px',
                height: '400px',
                objectFit: 'cover',
                borderRadius: '12px'
              }}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            />

            <motion.img
              src={creativeImg}
              alt="VR user"
              style={{
                width: '300px',
                height: '400px',
                objectFit: 'cover',
                borderRadius: '12px',
                display: 'none',
                ...(window.innerWidth >= 900 && { display: 'block' })  // MUI's md
              }}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ServiceHero;