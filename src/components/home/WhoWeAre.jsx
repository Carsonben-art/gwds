import React from 'react';
import { Box, Typography, Container } from '@mui/material';

import glow from '../../assets/images/glow.png'

const WhoWeAre = () => {
  return (
    <Box sx={{ backgroundColor: '#04050e', color: '#fff', py: 8 }}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 6,
          }}
        >
          {/* Left content */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle2" color="#9296b5" gutterBottom>
                          WHO WE ARE?
                        </Typography>
            <Typography
                variant="h4"
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
                 A Web Development Group striving to eventually serve the <span>worldwide community</span>
            </Typography>

            <Typography variant="body1" color="#9296b5" paragraph>
              At GWDS, we are a driven team of
                Developers specializing in the creation of beautiful websites at an affordable and
                competitive price. Our Developers are armed with several years of experience
                building web applications. This is not just work for us, it's also our passion. We
                take each work very seriously and are committed to providing the best service for
                each client. We will work closely with you and build the website according to your
                taste. Regardless of the type of 5 page website you need, we are experts ready
                to assist you. We pride ourselves on client satisfaction and attention to detail. We
                make sure to only deliver the best. You can also contact us if you need another
                type of website.
            </Typography>

            
            
          </Box>

          {/* Right image */}
          <Box
            component="img"
            src={glow}
            alt="About Illustration"
            sx={{
              flex: 1,
              borderRadius: 4,
              width: '100%',
              maxWidth: 500,
              objectFit: 'cover',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default WhoWeAre;
