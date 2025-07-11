import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#04050e', width: '100%', borderBottom: '1px solid #9296b5' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo / Title as Link */}
        <Box
          component={Link}
          to="/gwds"
          sx={{
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            mr: 2,
            alignItems: { xs: 'flex-start', md: 'center' }
          }}
        >
          <Typography
            variant="h4"
            color="#fff"
            noWrap
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '1.5rem', md: '2rem' } 
            }}
          >
            GWDS
          </Typography>
          <Typography
            noWrap
            sx={{
              fontWeight: 500,
              fontSize: { xs: '0.7rem', md: '1rem' }, 
              color: '#fff'
            }}
          >
            Global Web Development Standard
          </Typography>
        </Box>

        {/* Desktop Menu */}
        {!isMobile && (
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-start', paddingLeft: '2rem', gap: '2.5rem' }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                sx={{ my: 2, color: '#9296b5', fontSize: '1.3rem', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <>
            <IconButton
              size="large"
              aria-label="navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  component={Link}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;