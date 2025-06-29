import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import CampaignIcon from '@mui/icons-material/Campaign';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

import GavelIcon from '@mui/icons-material/Gavel';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HandshakeIcon from '@mui/icons-material/Handshake';

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

  return (
    <Box sx={{ backgroundColor: '#04050e', color: '#fff', py: 8 }}>
      <Container>
        {/* Section header */}
        <Typography variant="subtitle2" fontSize='1.3rem' fontWeight={400} color="grey.400" gutterBottom>
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
          WE SPEAK FLUENT <br/> <span>CREATIVITY</span>
        </Typography>

        {/* Features grid */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            mt: 4,
          }}
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                flex: 1,
                textAlign: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'start',
                  justifyContent: 'flex-start',
                  width: 60,
                  height: 60,
                //   backgroundColor: 'rgba(255,255,255,0.05)',
                  borderRadius: 2,
                  mb: 2,
                }}
              >
                {feature.icon}
              </Box>
              <Typography variant="h6" fontWeight="bold" textAlign='left' gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="grey.400" textAlign='left'>
                {feature.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WhyUs;
