import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import CampaignIcon from '@mui/icons-material/Campaign';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import GavelIcon from '@mui/icons-material/Gavel';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { motion } from 'framer-motion';

const WhyUs = () => {
  const features = [
    {
      icon: <GavelIcon sx={{ fontSize: 40, color: '#fff' }} />,
      title: 'FAIR PRICING',
      desc: 'We provide quality service at an affordable and unchanging price.',
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 40, color: '#fff' }} />,
      title: 'ON-TIME DELIVERY',
      desc: 'We make sure to deliver on time, and if we fail to do this, we reduce the payment for every day late.',
    },
    {
      icon: <CampaignIcon sx={{ fontSize: 40, color: '#fff' }} />,
      title: 'HONEST PROMISES',
      desc: 'We do not make false promises. We only accept work we can actually complete.',
    },
    {
      icon: <DesignServicesIcon sx={{ fontSize: 40, color: '#fff' }} />,
      title: 'UNIQUE APPROACH',
      desc: 'We approach each project uniquely since every business is different.',
    },
    {
      icon: <HandshakeIcon sx={{ fontSize: 40, color: '#fff' }} />,
      title: 'COLLABORATIVE PROCESS',
      desc: 'We work closely with you, and keep you updated throughout the development process.',
    },
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

  return (
    <Box sx={{ backgroundColor: '#04050e', color: '#fff', py: 8 }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Typography variant="subtitle2" fontSize="1.3rem" fontWeight={400} color="#9296b5" gutterBottom>
            Why choose us
          </Typography>

          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            sx={{
              '& span': {
                background: 'linear-gradient(90deg, #ff5f6d, #a17fe0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              },
            }}
          >
            WE SPEAK FLUENT <br /> <span>CREATIVITY</span>
          </Typography>
        </motion.div>

        <Grid container spacing={4} mt={4} justifyContent="start">
          {features.map((feature, index) => (
            <Grid
              item
              xs={12}
              sm={index < 3 ? 4 : 6}
              key={index}
            >
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true, amount: 0.2 }}
                style={{ maxWidth: 300, margin: '0 auto' }}
              >
                <Box>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'start',
                      justifyContent: 'flex-start',
                      width: 60,
                      height: 60,
                      borderRadius: 2,
                      mb: 2,
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" fontWeight="bold" textAlign="left" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="#9296b5" textAlign="left">
                    {feature.desc}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyUs;
