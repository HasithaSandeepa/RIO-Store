// src/components/Footer.jsx
import { Box, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        py: 2,
        bgcolor: "primary.main",
        color: "white",
        textAlign: "center",
        position: "relative",
        mt: "50px",
      }}
    >
      <Typography variant="body2" color="inherit">
        &copy; {new Date().getFullYear()} RIO Store. All rights reserved.
      </Typography>

      {/* Social Media Links */}
      <Box sx={{ mt: 2 }}>
        <IconButton
          color="inherit"
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
