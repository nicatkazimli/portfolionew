import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './Header.css';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const menuItems = [
    { text: 'Ana səhifə', path: '/' },
    { text: 'Haqqımda', path: '/about' },
    { text: 'Portfolio', path: '/portfolio' },
    { text: 'Əlaqə', path: '/contact' },
  ];

  return (
    <>
      <AppBar position="static" sx={{ zIndex: 1300 }}>
        <Toolbar 
  className="header"
  sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
>
  {/* Logo */}
  <div className="logo" style={{ display: "flex", alignItems: "center" }}>
    <img
      src="https://img.icons8.com/?size=100&id=22skWjUReayF&format=png&color=000000"
      width={35}
      alt="Logo"
      style={{ marginRight: 10 }}
    />
    <span className="app-name">VIDEOGRAPH</span>
  </div>

  {isMobile ? (
    <IconButton color="inherit" onClick={toggleDrawer(true)}>
      <MenuIcon />
    </IconButton>
  ) : (
    <nav className="nav">
      {menuItems.map((item) => (
        <Link
          key={item.text}
          to={item.path}
          className="nav-link"
        >
          {item.text}
        </Link>
      ))}
    </nav>
  )}
</Toolbar>

      </AppBar>

      {/* Drawer */}
    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
  <List sx={{ width: 250, p: 2 }}>
    {menuItems.map((item, index) => (
      <ListItem
        button
        key={item.text}
        onClick={toggleDrawer(false)}
        sx={{
          mb: 1,
          borderRadius: "8px",
          transition: "0.3s",
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.1)",
            transform: "translateX(5px)",
          },
        }}
      >
        <Link
          to={item.path}
          className="nav-link"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            width: "100%",
          }}
        >
          <span style={{ fontSize: "18px" }}>
            {index === 0 && "🏠"}
            {index === 1 && "👤"}
            {index === 2 && "💼"}
            {index === 3 && "📞"}
          </span>
          <ListItemText
            primary={item.text}
            primaryTypographyProps={{
              fontSize: "18px",
              fontWeight: "500",
            }}
          />
        </Link>
      </ListItem>
    ))}
  </List>
</Drawer>

    </>
  );
};

export default Header;
