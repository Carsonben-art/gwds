import React from 'react';
import { Box, Typography, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
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
        height: { xs: 'auto', md: '100vh' },
        mt: { xs: '3rem', md: 0 },
        p: { xs: 2, md: 6 },
        gap: 4
      }}
    >
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        style={{ flex: 1, maxWidth: '100%' }}
      >
        <Typography
          variant="h1"
          sx={{ fontWeight: 'bold', mb: 2, fontSize: { xs: '2rem', md: '4rem' } }}
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

        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 5,
        flexDirection: { xs: 'column', md: 'row' },
           }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            
          >
            <CardMedia
              component="img"
              image={leftImage}
              alt="Decorative small image"
              sx={{
                width: 150,
                height: 100,
                borderRadius: 2,
                objectFit: 'cover',
                transition: 'transform 0.5s ease',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            />
          </motion.div>

          <Typography color="#9296b5" fontSize="1.2rem" variant="body1" maxWidth={450}>
            We’re here to help! Whether you have a question, need assistance, or simply want to learn more about our products or services, we’re ready to connect.
          </Typography>
        </Box>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
        style={{ flex: 1, width: '100%' }}
      >
        <CardMedia
          component="img"
          image={rightImage}
          alt="Modern building"
          sx={{
            width: '100%',
            height: '600px',
            borderRadius: 4,
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        />
      </motion.div>
    </Box>
  );
};

export default ContactHero;