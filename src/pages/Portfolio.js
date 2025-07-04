import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

import beauty from '../assets/images/beauty.jpg';
import outfit from '../assets/images/outfit.jpg';
import flower from '../assets/images/flower.jpg';
import right from '../assets/images/brain.jpg';
import epesipay from '../assets/images/epesipay3.jpg';

const portfolioItems = [
  {
    title: 'Beauty Bakerie',
    description: 'https://www.beautybakerie.com/',
    image: beauty,
    link: 'https://www.beautybakerie.com/'
  },
  {
    title: 'Faherty Brand',
    description: 'https://fahertybrand.com/',
    image: outfit,
    link: 'https://fahertybrand.com/'
  },
  {
    title: 'Rhema Flowers',
    description: 'https://rhemaflowers.com/',
    image: flower,
    link: 'https://rhemaflowers.com/'
  },
  {
    title: 'Starting Point Solutions',
    description: 'http://startingpointsolutions.co.ke/',
    image: right,
    link: 'http://startingpointsolutions.co.ke/'
  },
  {
    title: 'Epesipay',
    description: 'https://epesipay.com/',
    image: epesipay,
    link: 'https://epesipay.com/'
  }
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
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

const Portfolio = () => {
  return (
    <Box sx={{ bgcolor: '#04050e', color: '#fff', p: { xs: 2, md: 20 } }}>
      <Typography variant="body1" fontSize="2rem" color="#9296b5" sx={{ maxWidth: 600, mb: 4 }}>
        Our Portfolio
      </Typography>
      <Typography
        variant="h1"
        sx={{
          fontWeight: 'bold',
          mb: 1,
          fontSize: {
            xs: '2.5rem',
            sm: '2.5rem',
            md: '4rem'
          }
        }}
      >
        EXPLORE OUR{' '}
        <span
          style={{
            background: 'linear-gradient(45deg, #ff5f6d, #a17fe0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          WORKS
        </span>
      </Typography>
      <Typography variant="body1" fontSize="1.3rem" color="#9296b5" sx={{ maxWidth: 600, mb: 4 }}>
        We are a passionate team of creative minds with a proven track record of crafting impactful campaigns for diverse clients.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 4,
          justifyContent: { xs: 'center', md: 'flex-start' }
        }}
      >
        {portfolioItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              flex: '1 1 100%',
              maxWidth: '100%',
            }}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card sx={{ bgcolor: 'transparent', color: '#fff' }}>
              <Box
                component="div"
                sx={{
                  overflow: 'hidden',
                  borderRadius: { xs: 2, md: 8 }
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{
                    borderRadius: { xs: 2, md: 8 },
                    height: { xs: 300, sm: 400, md: 600 },
                    width: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                />
              </Box>
              <CardContent>
                <Typography variant="subtitle1" fontSize="1.5rem" sx={{ fontWeight: 'bold' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" fontSize="1.2rem" color="#9296b5">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </motion.a>
        ))}
      </Box>
    </Box>
  );
};

export default Portfolio;