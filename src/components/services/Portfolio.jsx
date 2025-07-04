import React from 'react';
import { Box, Container, Typography, Grid, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

import engel from '../../assets/images/engel.png';
import baze from '../../assets/images/baze.png';
import salts from '../../assets/images/salts.png';
import right from '../../assets/images/right.png';
import giroux from '../../assets/images/giroux.png';
import bgImage from '../../assets/images/mesh.png';

const resources = [
  {
    title: 'Engelfeldmann',
    subtitle: 'https://engelfeldmann.com/',
    img: engel,
    link: 'https://engelfeldmann.com/',
  },
  {
    title: 'Baze Built Homes',
    subtitle: 'https://bazebuilthomes.com/',
    img: baze,
    link: 'https://bazebuilthomes.com/',
  },
  {
    title: 'Salts Dart Mouth',
    subtitle: 'https://saltsdartmouth.com/',
    img: salts,
    link: 'https://saltsdartmouth.com/',
  },
  {
    title: 'Right Turntn',
    subtitle: 'https://rightturntn.com/',
    img: right,
    link: 'https://rightturntn.com/',
  },
  {
    title: 'Giroux Electronics',
    subtitle: 'https://girouxelectric.com/services/',
    img: giroux,
    link: 'https://girouxelectric.com/services/',
  }
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
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
    <Box 
      sx={{ 
        py: 8, 
        backgroundColor: '#04050e', 
        color: '#fff',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            align="center"
            fontWeight="bold"
            sx={{ mb: 1, fontSize: { xs: '2rem', md: '2.5rem' } }}
          >
            Example of 5 Page Websites <br />
            We Can Build
          </Typography>
          <Box display={'flex'} justifyContent={'center'}>
            <Typography maxWidth={'800px'} align="center" color="#9296b5" sx={{ mb: 4 }}>
              Explore templates, checklists, and ready-made designs for 5-page websites from homepages to contact forms - all crafted to kickstart your next project.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3}>
          {resources.map((resource, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card
                  sx={{
                    backgroundColor: '#0B0B13',
                    borderRadius: 3,
                    overflow: 'hidden',
                  }}
                >
                  <CardActionArea
                    component="a"
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      '&:hover img': {
                        transform: 'scale(1.05)'
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={resource.img}
                      alt={resource.title}
                      sx={{
                        height: 180,
                        objectFit: 'cover',
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                        transition: 'transform 0.5s ease'
                      }}
                    />
                    <CardContent>
                      <Typography fontWeight="bold" sx={{ color: '#fff' }}>
                        {resource.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#9296b5' }}>
                        {resource.subtitle}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio;