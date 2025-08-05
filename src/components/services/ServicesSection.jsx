import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';

import brainImage from '../../assets/images/service.jpg'; 

const ServicesSection = () => {
  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.3
      }
    })
  };

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
          <motion.img
            src={brainImage}
            alt="Dripping brain"
            style={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '12px',
              objectFit: 'cover'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          />

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            style={{ flex: 1 }}
          >
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

            <Stack spacing={3} mt={3}>
              {[
                {
                  title: 'Web Development',
                  desc: 'We offer comprehensive web development solutions tailored for small businesses seeking a strong digital presence. Our service focuses on strategic design, responsive layouts, and custom-built components that align with your brand and business goals. Each website is crafted with attention to detail, usability, and scalability, ensuring your visitors enjoy a seamless experience across devices. From concept to completion, we work closely with you to deliver a polished, high-performing website that communicates your value clearly.'
                },
                {
                  title: 'Website maintenance',
                  desc: "Maintaining your website is just as important as building it. Our website maintenance service ensures your site stays functional, secure, and up to date. We proactively monitor performance, address technical issues, and handle routine updates so you can focus on running your business."
                },
                {
                  title: 'Freelance Network',
                  desc: "If you need any other website, we will connect you with a freelancer in our network who will be able to complete the job at an affordable price. The good thing about this is that you don't need to worry about whether they have the right skills, as we already checked them for you. It takes a good developer to recognize another good developer."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={featureVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={index}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Box display="flex" alignItems="flex-start" gap={2}>
                    <CheckCircleIcon sx={{ color: '#ff5f6d', mt: '3px' }} />
                    <Box>
                      <Typography variant="h4">{feature.title}</Typography>
                      <Typography variant="body1" color="#9296b5">
                        {feature.desc}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Stack>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;