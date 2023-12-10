import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      width="100%"
      bgcolor="#ef5350"
      py={1.7}
      textAlign="center"
    >
      <Typography fontWeight="bold" color="#feca1b">
        Desenvolvido por Fabricio Vianna
      </Typography>
    </Box>
  );
}

export default Footer;
