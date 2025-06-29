import React from "react";
import { Box, Typography, Divider, Grid } from "@mui/material";

const OurBenefits = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#151522", // Dark background
        py: 8,
        px: 4,
      }}
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
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        paddingTop={2}
      >
        {/* First Stat */}
        <Grid item xs={12} sm={4} textAlign="center">
          <Typography
            variant="h3"
            sx={{
                
                  background: 'linear-gradient(90deg, #ff5f6d, #ffc371)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
              }}
          >
            $50
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "#fff", fontWeight: "bold" }}
          >
            Referral Incentive
          </Typography>
          <Box maxWidth={300} paddingTop={2}>
            <Typography variant="body1" color="grey.600" textAlign='left'>
              Earn $50 for every referral from a past client upon project completion. The referred client must mention your name.
            </Typography>
          </Box>
        </Grid>

        {/* Divider */}
        <Divider
          orientation="vertical"
          flexItem
          sx={{ display: { xs: "none", sm: "block" }, borderColor: "#7928ca", borderRightWidth: 2 }}
        />

        {/* Second Stat */}
        <Grid item xs={12} sm={4} textAlign="center">
          <Typography
            variant="h3"
            sx={{
                
                  background: 'linear-gradient(90deg, #ff5f6d, #ffc371)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
              }}
          >
            $100
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "#fff", fontWeight: "bold" }}
          >
            Sales Agents Incentive
          </Typography>
          <Box maxWidth={300} paddingTop={2}>
            <Typography variant="body1" color="grey.600" textAlign='left'>
              Earn $100 for every client you refer once they make a 50% payment. Anyone can join as a sales agent — just refer a client and notify us.
            </Typography>
          </Box>
        </Grid>

        
        
        
      </Grid>
    </Box>
  );
};

export default OurBenefits;
