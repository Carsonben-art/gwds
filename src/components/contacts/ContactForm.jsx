import React, {useState} from 'react';
import { Box, Typography, TextField, Button, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

import MessageIcon from '@mui/icons-material/Message';
import emailjs from 'emailjs-com'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    })
    .catch((err) => {
      alert('Failed to send message. Please try again later.');
      console.error(err);
    });
  };

  return (
    <Box
    sx={{
        bgcolor: '#04050e',
        color: '#fff',
        p: { xs: 3, md: 6 },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignContent: 'center',
        justifyContent: 'center'
      }}
    >

    
    <Box
      sx={{
        bgcolor: '#141423',
        color: '#fff',
        borderRadius: 3,
         maxWidth: '1000px',
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
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              variant="outlined"
              placeholder="Phone"
              fullWidth
              InputProps={{
                startAdornment: <PhoneIcon sx={{ mr: 1 }} />,
                sx: { borderRadius: 5, bgcolor: 'transparent', border: '1px solid #9296b5', color: '#9296b5' }
              }}
            />
          </Box>
      
          <Box sx={{ flex: '1 1 100%' }}>
            <TextField
              name="message"
              value={formData.message}
              onChange={handleChange}
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
          type='submit'
          variant="contained"
          onClick={handleSubmit}
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
