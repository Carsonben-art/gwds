import React from "react";
import { Box, Typography, Divider, Grid } from "@mui/material";
import { motion } from "framer-motion";

const OurBenefits = () => {
  const benefitVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.3
      }
    })
  };

  return (
    <Box
      sx={{
        backgroundColor: "#151522",
        py: 8,
        px: 4,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{
            color: '#fff',
            textAlign: 'center'
          }}
        >
          Additional Benefits
        </Typography>
      </motion.div>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        paddingTop={2}
      >
        {[{
          value: '$50',
          title: 'Referral Incentive',
          desc: 'Earn $50 for every referral from a past client upon project completion. The referred client must mention your name.'
        }, {
          value: '$100',
          title: 'Sales Agents Incentive',
          desc: 'Earn $100 for every client you refer once they make a 50% payment. Anyone can join as a sales agent — just refer a client and notify us.'
        }].map((benefit, index) => (
          <React.Fragment key={index}>
            <Grid item xs={12} sm={4} textAlign="center">
              <motion.div
                variants={benefitVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
              >
                <Typography
                  variant="h3"
                  sx={{
                    background: 'linear-gradient(90deg, #ff5f6d, #ffc371)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {benefit.value}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#fff", fontWeight: "bold" }}
                >
                  {benefit.title}
                </Typography>
                <Box maxWidth={300} paddingTop={2} mx="auto">
                  <Typography variant="body1" color="grey.600" textAlign='left'>
                    {benefit.desc}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>

            {index === 0 && (
              <Divider
                orientation="vertical"
                flexItem
                sx={{ display: { xs: "none", sm: "block" }, borderColor: "#7928ca", borderRightWidth: 2 }}
              />
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default OurBenefits;