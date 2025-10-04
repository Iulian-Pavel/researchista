import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

import styles from "~/components/SuccessStory/SuccessStory.module.scss";

import succes_img from "~/assets/success.jpg";

import generics from "~/generics.json";

function SuccessStory() {
  return (
    <>
      <Box
        sx={{ backgroundColor: "#eef2fe" }}
        className={styles["success-story-component"]}
      >
        <Box component="img" src={succes_img} />
        <Box className={styles["component-text"]}>
          <Chip
            //orange-background class wont apply because material ui is fucking retarded
            sx={{ backgroundColor: "#dc7408", color: "#fff", padding: "1em" }}
            label="#1 Worldwide"
          />
          <Typography
            variant="h3"
            gutterBottom
            mt={2}
            className={styles["story-heading"]}
            sx={{
              fontSize: {
                xs: "1.5rem", // phones
                sm: "2rem", // tablets
                md: "2.5rem", // desktops
                lg: "3rem", // big screens
              },
              fontWeight: 600,
            }}
          >
            {generics[1].succesStoryTitle}
          </Typography>

          <Typography
            variant="subtitle1"
            className={styles["story-text"]}
            sx={{
              fontSize: {
                xs: "0.9rem", // phones
                sm: "1rem", // tablets
                md: "1.1rem", // desktops
              },
              lineHeight: 1.6,
            }}
          >
            {generics[1].succesStoryText}
          </Typography>
        </Box>
        <Box className={styles["stat-cards"]}>
          <Box className={styles["stat"]}>
            <Typography
              variant="h4"
              sx={{ color: "orange", fontWeight: "bold" }}
            >
              100K+
            </Typography>
            <Typography variant="subtitle2" sx={{ textAlign: "center", color: "gray" }}>
              Students reached
            </Typography>
          </Box>
          <Box className={styles["stat"]}> <Typography
              variant="h4"
              sx={{ color: "orange", fontWeight: "bold" }}
            >
              15
            </Typography>
            <Typography variant="subtitle2" sx={{ textAlign: "center", color: "gray" }}>
              Countries
            </Typography></Box>
        </Box>
      </Box>
    </>
  );
}

export default SuccessStory;
