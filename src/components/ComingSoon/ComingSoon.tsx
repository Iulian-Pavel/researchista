import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

import { comingSoonInfo } from "~/components/ComingSoon/comingSoonInfo";

import styles from "~/components/ComingSoon/ComingSoon.module.scss";

function ComingSoon() {
  return (
    <Box className={styles["coming-soon-component"]}>
      {comingSoonInfo.map((info) => (
        <Box className={styles["coming-soon"]}>
          <Chip
            label="COMING SOON"
            sx={{ color: "#fff", background: "#ffab45ff", marginBottom: "1em" }}
          />
          <Typography variant="h5" gutterBottom>
            {info.title}
          </Typography>
          <Typography variant="subtitle2" className={styles["subtitle"]}>
            {info.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default ComingSoon;
