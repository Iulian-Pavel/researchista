import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import styles from "~/components/ResearchistaAbout/ResearchistaAbout.module.scss";

import generics from "~/generics.json";
import { stats } from "~/components/ResearchistaAbout/stats";

function ResearchistaAbout() {
  return (
    <Box className={styles["about-component"]}>
      <Typography variant="h5" className={styles["about-title"]}>
        About Researchista
      </Typography>
      <Box className={styles["about"]}>
        <Box className={styles["about-description"]}>
          <Typography variant="h6" gutterBottom>
            {generics[7].researchistaAboutTextPart1}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {generics[7].researchistaAboutTextPart2}
          </Typography>
        </Box>
        <Box className={styles["about-stats"]}>
          {stats.map((stat) => (
            <Box className={styles["about-stat"]} key={stat.id}>
              <Typography className={styles["about-stat-number"]}>
                {stat.number}
              </Typography>
              <Typography
                variant="subtitle2"
                className={styles["about-stat-text"]}
              >
                {stat.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default ResearchistaAbout;
