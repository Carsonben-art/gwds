import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Rating,
} from '@mui/material';

const testimonials = [
  {
    name: 'Dr. Arshley',
    position: 'Founder, GreenApple',
    text: 'Our new website perfectly communicates our mission to promote clean energy. It’s professional, easy to navigate, and has helped us gain trust from eco-conscious clients. A brilliant job!',
    
  },
  {
    name: 'Stacy Nick',
    position: 'CEO, Starting point Solutions',
    text: 'The layout is sharp, the message is clear, and our leads have increased since launch. We finally have a site that matches our expertise.',
    
  },
  {
    name: 'Doskies Otewa',
    position: 'Founder, Epesipay',
    text: 'You nailed the fintech vibe! The platform looks trustworthy and user-friendly, which is critical in the payments space. Clients now onboard faster and with more confidence.',
   
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 8, paddingBottom: '8rem', px: { xs: 2, md: 6 }, bgcolor: '#04050e' }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          mb: 2,
          fontSize: { xs: '2rem', md: '4rem' },
        }}
      >
        <span
          style={{
            background: 'linear-gradient(45deg, #ff5f6d, #a17fe0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          TESTIMONIALS
        </span>
      </Typography>
      <Typography variant="subtitle1" textAlign="center" color="#9296b5" mb={6}>
        Real words from real partners we've had the pleasure to work with.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          justifyContent: 'center',
          alignItems: 'stretch',
          flexWrap: 'wrap',
        }}
      >
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            sx={{
                flex: '1 1 100%',
                maxWidth: { xs: '100%', sm: 400 },
                minWidth: 0,
            }}
            >
            <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3, height: '100%' }}>
              <CardContent>
                <Rating value={5} readOnly size="small" sx={{ mb: 2 }} />
                <Typography variant="body1" color="text.primary" mb={3}>
                  “{testimonial.text}”
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  {/* <Avatar src={testimonial.avatar} alt={testimonial.name} /> */}
                  <Box>
                    <Typography variant="subtitle1" fontWeight={600}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {testimonial.position}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Testimonials;