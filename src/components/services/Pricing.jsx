import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Divider,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';

const pricingPlans = [
  {
    title: 'Web Development',
    price: '$700',
    description:
      'Professional 5-page websites for small businesses. 50% deposit required before development or upon reaching the halfway milestone.',
    features: [
      'Responsive 5-page website',
      'Responsive Website Design',
      'Modern UI/UX',
      'Custom Coded',
      'Great Performance',
      'Interactive',
      'Conversion Rate Optimization'
    ],
    buttonText: 'Contact Us Now',
    highlight: true,
  },
  {
    title: 'Website Maintenance',
    price: '$70/month',
    description:
      'Monthly maintenance after your website is hosted.',
    features: [
      'Basic SEO',
      'Plugins Updates',
      'Bug fixes & error resolution',
      'Backups',
      'Security Updates',
      'Performance Monitoring',
      'Upto 3 hours of Content updates'
      
    ],
    buttonText: 'Contact Us Now',
  },
];

const Pricing = () => {
  return (
    <Box sx={{ backgroundColor: '#04050e', py: 10 }}>
      <Container>
        {/* Title & Description */}
        <Box textAlign="center" mb={6}>
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
                         Our Prices
                       </Typography>
          <Typography variant="subtitle1" sx={{ color: '#9296b5', mt: 2 }}>
            Our pricing is simple, transparent, and built for your business growth.
          </Typography>
        </Box>

        {/* Pricing Cards using Flex */}
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
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              elevation={plan.highlight ? 6 : 2}
              sx={{
                flex: '1 1 auto',
                borderRadius: 3,
                backgroundColor: '#16152b',
                border: plan.highlight
                  ? '2px solid #ff5f6d'
                  : '1px solid #ff5f6d',
                maxWidth: '500px',
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: plan.highlight ? '#ff5f6d' : '#ff5f6d',
                    mb: 1,
                  }}
                >
                  {plan.title}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 700, color: '#fff', mb: 2 }}
                >
                  {plan.price}
                </Typography>
                <Typography sx={{ mb: 2, color: '#9296b5' }}>
                  {plan.description}
                </Typography>
                <Divider sx={{ my: 2, borderColor: '#333' }} />
                <Box sx={{ mb: 3 }}>
                  {plan.features.map((feature, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#9296b5',
                        mb: 1,
                      }}
                    >
                      <CheckCircleIcon
                        fontSize="small"
                        sx={{ color: '#ff5f6d', mr: 1 }}
                      />
                      <Typography>{feature}</Typography>
                    </Box>
                  ))}
                </Box>
                <Button
                    component={Link}
                          to="/contact"
                  fullWidth
                  variant="outlined"
                  
                  sx={{
                    backgroundColor: plan.highlight ? '#ff5f6d' : '#ff5f6d',
                    borderColor: '#ff5f6d',
                    color: plan.highlight ? '#fff' : '#fff',
                    fontWeight: 600,
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: plan.highlight ? '#e34b5d' : '#e34b5d',
                    },
                  }}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing;