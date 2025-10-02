import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import styles from "./Header.module.scss";

import logo from "~/assets/logo.png";

function Header() {
  return (
    <Box
      component="header"
      className={styles["header"]}
      sx={{
        mt: { xs: 5, sm: 10, md: 15 }, // smaller top margin on mobile
        textAlign: "center",           // center content
      }}
    >
      <Box>
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            width: { xs: "70%", sm: "50%", md: "30%", lg: "50%" }, // shrink on bigger screens
          }}
        />
        <Typography
          variant="h5"
          className={styles["header-text"]}
          sx={{
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" }, // responsive font size
            mt: 2,
          }}
        >
        </Typography>
      </Box>
    </Box>
  );
}

export default Header;
