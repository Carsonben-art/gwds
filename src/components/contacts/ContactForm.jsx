import React from 'react';
import { Box, Typography, TextField, Button, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MessageIcon from '@mui/icons-material/Message';

const ContactForm = () => {
  return (
    <Box
    sx={{
        bgcolor: '#04050e',
        color: '#fff',
        p: { xs: 3, md: 6 },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignContent: 'center'
      }}
    >

    
    <Box
      sx={{
        bgcolor: '#141423',
        color: '#fff',
        borderRadius: 3,
        p: { xs: 3, md: 6 },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4
      }}
    >
      {/* Left form section */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          SAY HELLO!
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2
          }}
        >
          <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 48%' } }}>
            <TextField
              variant="outlined"
              placeholder="Name"
              fullWidth
              InputProps={{
                startAdornment: <PersonIcon sx={{ mr: 1 }} />,
                sx: { borderRadius: 5, bgcolor: 'transparent', border: '1px solid #9296b5', color: '#9296b5' }
              }}
            />
          </Box>
          <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 48%' } }}>
            <TextField
              variant="outlined"
              placeholder="Email"
              fullWidth
              InputProps={{
                startAdornment: <EmailIcon sx={{ mr: 1 }} />,
                sx: { borderRadius: 5, bgcolor: 'transparent', border: '1px solid #9296b5', color: '#9296b5' }
              }}
            />
          </Box>
          <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 48%' } }}>
            <TextField
              variant="outlined"
              placeholder="Phone"
              fullWidth
              InputProps={{
                startAdornment: <PhoneIcon sx={{ mr: 1 }} />,
                sx: { borderRadius: 5, bgcolor: 'transparent', border: '1px solid #9296b5', color: '#9296b5' }
              }}
            />
          </Box>
          <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 48%' } }}>
            <TextField
              variant="outlined"
              placeholder="Address"
              fullWidth
              InputProps={{
                startAdornment: <LocationOnIcon sx={{ mr: 1 }} />,
                sx: { borderRadius: 5, bgcolor: 'transparent', border: '1px solid #9296b5', color: '#9296b5' }
              }}
            />
          </Box>
          <Box sx={{ flex: '1 1 100%' }}>
            <TextField
              variant="outlined"
              placeholder="Message"
              multiline
              rows={4}
              fullWidth
              InputProps={{
                startAdornment: <MessageIcon sx={{ mr: 1, alignSelf: 'flex-start', mt: 1 }} />,
                sx: { borderRadius: 5, bgcolor: 'transparent', border: '1px solid #9296b5', color: '#9296b5' }
              }}
            />
          </Box>
        </Box>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            bgcolor: '#04050e',
            borderRadius: 3,
            textTransform: 'none',
            fontWeight: 'bold',
            px: 4,
            py: 1.5,
            '&:hover': {
              bgcolor: '#141423'
            }
          }}
        >
          <span
            style={{
              background: 'linear-gradient(45deg, #ff5f6d, #a17fe0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            SEND MESSAGE
          </span>
        </Button>
      </Box>

      {/* Right info section */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          LET’S GET IN TOUCH
        </Typography>
        <Typography variant="body2" fontSize='1.2rem' color='#9296b5' sx={{ mb: 2 }}>
          Find our contact information below. We’re always happy to hear from you.
        </Typography>
        <Typography variant="body2" fontSize='1.3rem' sx={{ fontWeight: 'bold' }}>
          Email Us For Support
        </Typography>
        <Typography variant="body2" fontSize='1.2rem' color='#9296b5' sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <EmailIcon sx={{ mr: 1 }} /> webdevelopment@gwdsgroup.com
        </Typography>
        <Box sx={{ display: 'flex', gap: -5 }}>
          {/* Replace with actual team member images */}
          <Avatar src="https://i.pravatar.cc/100?img=1" />
          <Avatar src="https://i.pravatar.cc/100?img=2" />
          <Avatar src="https://i.pravatar.cc/100?img=3" />
          <Avatar src="https://i.pravatar.cc/100?img=4" />
        </Box>
      </Box>
    </Box>
    </Box>
  );
};

export default ContactForm;
