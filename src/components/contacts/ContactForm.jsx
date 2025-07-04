import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import MessageIcon from '@mui/icons-material/Message';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

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
      .then(() => {
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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        style={{
          backgroundColor: '#141423',
          borderRadius: 16,
          maxWidth: '1000px',
          // width: '100%',
          padding: '2rem'
        }}
      >
        <Box
          sx={{
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
              {['name', 'email', 'phone', 'message'].map((field, idx) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                  style={{ flex: field === 'message' ? '1 1 100%' : '1 1 48%' }}
                >
                  <TextField
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    variant="outlined"
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    fullWidth
                    multiline={field === 'message'}
                    rows={field === 'message' ? 4 : 1}
                    InputProps={{
                      startAdornment: {
                        name: <PersonIcon sx={{ mr: 1 }} />,
                        email: <EmailIcon sx={{ mr: 1 }} />,
                        phone: <PhoneIcon sx={{ mr: 1 }} />,
                        message: <MessageIcon sx={{ mr: 1, mt: 1 }} />
                      }[field],
                      sx: { borderRadius: 5, bgcolor: 'transparent', border: '1px solid #9296b5', color: '#9296b5' }
                    }}
                  />
                </motion.div>
              ))}
            </Box>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Button
                type="submit"
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
            </motion.div>
          </Box>

          {/* Right info section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            style={{ flex: 1 }}
          >
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
              LET’S GET IN TOUCH
            </Typography>
            <Typography variant="body2" fontSize="1.2rem" color="#9296b5" sx={{ mb: 2 }}>
              Find our contact information below. We're always happy to hear from you. 
              You will receive a reply within 1-3 business days.
            </Typography>
            <Typography variant="body2" fontSize="1.3rem" sx={{ fontWeight: 'bold' }}>
              Email Us For Support
            </Typography>
            <Typography
              variant="body2"
              color="#9296b5"
              sx={{ display: 'flex', alignItems: 'center', mb: 2 }}
            >
              <EmailIcon sx={{ mr: 1 }} /> webdevelopment@gwdsgroup.com
            </Typography>
            <Box sx={{ display: 'flex', gap: -5 }}>
              <Avatar src="https://i.pravatar.cc/100?img=1" />
              <Avatar src="https://i.pravatar.cc/100?img=2" />
              <Avatar src="https://i.pravatar.cc/100?img=3" />
              <Avatar src="https://i.pravatar.cc/100?img=4" />
            </Box>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
};

export default ContactForm;