import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';

import law from '../assets/images/law.jpg'
import brain from '../assets/images/brain.jpg'
import baze from '../assets/images/baze2.jpg'
import right from '../assets/images/right2.jpg'
import giroux from '../assets/images/giroux2.jpg'
import epesipay from '../assets/images/epesipay3.jpg'

const portfolioItems = [
  {
    title: 'Engelfeldmann',
    description: 'https://engelfeldmann.com/',
    image: law,
    link: 'https://engelfeldmann.com/'
  },
  {
    title: 'Baze Built Homes',
    description: 'https://bazebuilthomes.com/',
    image: baze,
    link: 'https://bazebuilthomes.com/'
  },
  {
    title: 'Salts Dart Mouth',
    description: 'https://saltsdartmouth.com/',
    image: brain,
    link: 'https://saltsdartmouth.com/'
  },
  {
    title: 'Right Turntn',
    description: 'https://rightturntn.com/',
    image: right,
    link: 'https://rightturntn.com/'
  },
  {
    title: 'Giroux Electronics',
    description: 'https://girouxelectric.com/services/',
    image: giroux,
    link: 'https://girouxelectric.com/services/'
  },
  {
    title: 'Epesipay',
    description: 'https://epesipay.com/',
    image: epesipay,
    link: 'https://epesipay.com/'
  }
];

const Portfolio = () => {
  return (
    <Box sx={{ bgcolor: '#04050e', color: '#fff', p: { xs: 2, md: 20 } }}>
      <Typography variant="body1" fontSize='2rem' color='#9296b5' sx={{ maxWidth: 600, mb: 4 }}>
        Our Portfolio
      </Typography>
      <Typography variant="h1" 
        sx={{ 
          fontWeight: 'bold', 
          mb: 1, 
          fontSize: {
            xs: '2.5rem',   
            sm: '2.5rem', 
            md: '4rem'   
        } }}>
        EXPLORE OUR{' '}
        <span style={{
          background: 'linear-gradient(45deg, #ff5f6d, #a17fe0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          WORKS
        </span>
      </Typography>
      <Typography variant="body1" fontSize='1.3rem' color='#9296b5' sx={{ maxWidth: 600, mb: 4 }}>
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
          <a 
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              textDecoration: 'none',
              flex: '1 1 100%',
              maxWidth: '100%',
              '@media (min-width:600px)': { 
                flex: '1 1 calc(50% - 16px)', 
                maxWidth: 'calc(50% - 16px)' 
              }
            }}
          >
            <Card sx={{ bgcolor: 'transparent', color: '#fff' }}>
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{
                  borderRadius: { xs: 2, md: 8 },
                  height: { xs: 300, sm: 400, md: 600 },
                  width: '100%',
                  objectFit: 'cover'
                }}
              />
              <CardContent>
                <Typography variant="subtitle1" fontSize='1.5rem' sx={{ fontWeight: 'bold' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" fontSize='1.2rem' color="#9296b5">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </a>
        ))}
      </Box>
    </Box>
  );
};

export default Portfolio;