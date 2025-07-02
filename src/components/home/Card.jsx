import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';

import { Link } from 'react-router-dom';
const ExpenseCard = ({
  image,
  title,
  bgColor = '#ff5f6d',
  buttonText = 'Learn More',  
  onButtonClick = () => {},   
}) => {
  return (
    <Card
      sx={{
        width: 250,
        borderRadius: 4,
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: bgColor,
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {/* Image */}
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={title}
        />

        {/* Text content */}
        <CardContent sx={{ textAlign: 'center', padding: 2 }}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            {title}
          </Typography>

          <Button
            component={Link}
            to="/services"
            variant="contained"
            size="small"
            sx={{
              backgroundColor: '#00bfff',
              color: '#000',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#009acd',
              },
            }}
            
          >
            {buttonText}
          </Button>
        </CardContent>
      </Box>
    </Card>
  );
};

export default ExpenseCard;
