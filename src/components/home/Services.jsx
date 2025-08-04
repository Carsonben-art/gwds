import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import ExpenseCard from './Card'; 
import webdev from '../../assets/images/webdev.jpg';
import webm from '../../assets/images/wedm.jpg';
import freelance from '../../assets/images/freelance.jpg';

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
    {
      image: freelance, 
      title: 'FREELANCE NETWORK',
      text: 'See Details'
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2
      }
    })
  };

  return (
    <Box sx={{ backgroundColor: '#04050e', color: '#fff', py: 8 }}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'column-reverse' },
            gap: 6,
          }}
        >
          {/* Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '32px',
              justifyContent: {xs: 'center', md: 'start'},
              flex: 1,
            }}
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                style={{ flex: '1 1 250px', maxWidth: '250px' }}
              >
                <ExpenseCard
                  image={item.image}
                  title={item.title}
                  buttonText={item.text}
                  bgColor="#fff"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Text + Button */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Typography variant="subtitle2" color="#9296b5" gutterBottom>
                  Our Services
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h2"
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Typography variant="body1" color="#9296b5" mb={3}>
                  We provide complete web solutions — from creating powerful, custom websites to keeping them secure, fast, and always up-to-date.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button
                  component={Link}
                  to="/services"
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
                >
                  See Our Services
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;