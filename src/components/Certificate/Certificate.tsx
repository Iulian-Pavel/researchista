import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import styles from "~/components/Certificate/Certificate.module.scss";

import generics from "~/generics.json";

import { certificate_info } from "./certificate_info";
import medal from "~/assets/medal.png";

function Certificate() {
  return (
    <Container maxWidth="sm" className={styles["certificate"]}>
      <Stack spacing={2}>
        <Box
          component="img"
          src={medal}
          width={100}
          className={styles["certificate-image"]}
        />
        <Typography
          className={`${styles["certificate-heading"]} ${styles["certificate-top"]}`}
        >
          {generics[2].certificateHeading}
        </Typography>
        <Typography
          className={`${styles["certificate-subheading"]} ${styles["certificate-top"]}`}
        >
          {generics[2].certificateSubheading}
        </Typography>
        {certificate_info.map((info) => (
          <Box key={info.id}>
            <Typography
              variant="subtitle2"
              className={styles["certificate-info-label"]}
            >
              {info.label}
            </Typography>
            <Typography
              className={styles["certificate-info-field"]}
            >
              {info.field}
            </Typography>
          </Box>
        ))}
        <Typography
          variant="subtitle2"
          className={styles["certificate-subheading"]}
        >
          Certificate ID:RST2024-001
        </Typography>
      </Stack>
    </Container>
  );
}

export default Certificate;
