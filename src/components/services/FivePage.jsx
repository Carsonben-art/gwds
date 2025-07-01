import React from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';
import solutionImage from '../../assets/images/zigzag.png'; 

const FivePage = () => {
  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: '#04050e',
        color: '#fff',
      }}
    >
        <Box display={'flex'} justifyContent={'center'}>
            <Box>
                 <Typography
              variant="h3"
              fontWeight="bold"
              textAlign={'center'}
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                lineHeight: 1.2,
              }}
            >
              What is a 5 page {' '}
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
                <Typography variant="body2" fontSize='1.2rem' color="grey.600" maxWidth={700} textAlign={'center'}>
                  A 5 page website is a website without a storage or login system, typically
                    consisting of five core pages, designed for simple information
                    sharing or basic online presence.
                </Typography>
            </Box>
        </Box>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
          }}
        >
            
          {/* Left Content */}
          <Box flex={1}>
            

           
            <Box mt={4}>
              <Box mb={3} maxWidth='500px'>
                <Typography fontWeight="bold">Home Page</Typography>
                <Typography variant="body2" color="grey.600">
                  This page is the main page of the website and should
                    communicate what your website or business is all about, while
                    linking to other important pages of the website.
                </Typography>
                <Divider sx={{ mt: 1, bgcolor: 'grey.800' }} />
              </Box>

              <Box mb={3} maxWidth='500px'>
                <Typography fontWeight="bold">About Page</Typography>
                <Typography variant="body2" color="grey.600">
                  This page gives an overview of the individual,
                    company, or service that is represented on the website, and usually
                    includes pictures for visual representation.
                </Typography>
                <Divider sx={{ mt: 1, bgcolor: 'grey.800' }} />
              </Box>

              <Box mb={3} maxWidth='500px'>
                <Typography fontWeight="bold">Products or Services Page</Typography>
                <Typography variant="body2" color="grey.600">
                  This page is used to communicate
                    the products or services being sold or provided. A very important
                    page because it is a major decision point for the visitor where they
                    will decide if the product or service being offered is attractive to
                    them.

                </Typography>
                <Divider sx={{ mt: 1, bgcolor: 'grey.800' }} />
              </Box>
              <Box mb={3} maxWidth='500px'>
                <Typography fontWeight="bold">Pictures Page</Typography>
                <Typography variant="body2" color="grey.600">
                  This page is used to organize and display pictures
                    representing your work.

                </Typography>
                <Divider sx={{ mt: 1, bgcolor: 'grey.800' }} />
              </Box>
              <Box mb={3} maxWidth='500px'>
                <Typography fontWeight="bold">Testimonials or References Page</Typography>
                <Typography variant="body2" color="grey.600">
                  This page is a great way to
                    increase confidence in your product or service being offered. It
                    usually includes testimonials or references from previous
                    customers and clients.
                </Typography>
                <Divider sx={{ mt: 1, bgcolor: 'grey.800' }} />
              </Box>
              <Box mb={3} maxWidth='500px'>
                <Typography fontWeight="bold">A Frequently Asked Questions Page</Typography>
                <Typography variant="body2" color="grey.600">
                  This page can be useful to answer the most common questions visitors have proactively.

                </Typography>
                <Divider sx={{ mt: 1, bgcolor: 'grey.800' }} />
              </Box>
              <Box maxWidth='500px'>
                <Typography fontWeight="bold">Contact page</Typography>
                <Typography variant="body2" color="grey.600">
                  This page is critical to let people know how they can get in touch with you.

                </Typography>
                <Divider sx={{ mt: 1, bgcolor: 'grey.800' }} />
              </Box>
            </Box>
          </Box>

          {/* Right Image */}
          <Box
            component="img"
            src={solutionImage}
            alt="3D Digital Solution"
            sx={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: 3,
              objectFit: 'cover',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default FivePage;