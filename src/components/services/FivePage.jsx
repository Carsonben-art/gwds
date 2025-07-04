import React from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import solutionImage from '../../assets/images/zigzag.png'; 

const FivePage = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2
      }
    })
  };

  const sections = [
    {
      title: 'Home Page',
      desc: 'This page is the main page of the website and should communicate what your website or business is all about, while linking to other important pages of the website.'
    },
    {
      title: 'About Page',
      desc: 'This page gives an overview of the individual, company, or service that is represented on the website, and usually includes pictures for visual representation.'
    },
    {
      title: 'Products or Services Page',
      desc: 'This page is used to communicate the products or services being sold or provided. A very important page because it is a major decision point for the visitor where they will decide if the product or service being offered is attractive to them.'
    },
    {
      title: 'Pictures Page',
      desc: 'This page is used to organize and display pictures representing your work.'
    },
    {
      title: 'Testimonials or References Page',
      desc: 'This page is a great way to increase confidence in your product or service being offered. It usually includes testimonials or references from previous customers and clients.'
    },
    {
      title: 'A Frequently Asked Questions Page',
      desc: 'This page can be useful to answer the most common questions visitors have proactively.'
    },
    {
      title: 'Contact page',
      desc: 'This page is critical to let people know how they can get in touch with you.'
    }
  ];

  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: '#04050e',
        color: '#fff',
      }}
    >
      <Box display={'flex'} justifyContent={'center'}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            textAlign={'center'}
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              lineHeight: 1.2,
            }}
          >
            What is a 5 page{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(90deg, #ff5f6d, #a17fe0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              website?
            </Box>
          </Typography>
          <Typography variant="body2" fontSize='1.2rem' color="#9296b5" maxWidth={700} textAlign={'center'}>
            A 5 page website is a website without a storage or login system, typically consisting of five core pages, designed for simple information sharing or basic online presence.
          </Typography>
        </motion.div>
      </Box>

      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
            mt: 4,
          }}
        >
          {/* Left content */}
          <Box flex={1}>
            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Box mb={3} maxWidth='500px'>
                  <Typography fontWeight="bold">{section.title}</Typography>
                  <Typography variant="body2" color="#9296b5">
                    {section.desc}
                  </Typography>
                  <Divider sx={{ mt: 1, bgcolor: '#9296b5' }} />
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* Right image */}
          <motion.img
            src={solutionImage}
            alt="3D Digital Solution"
            style={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '12px',
              objectFit: 'cover'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default FivePage;