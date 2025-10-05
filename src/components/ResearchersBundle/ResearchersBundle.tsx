import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { CiGift } from "react-icons/ci";

import styles from "~/components/ResearchersBundle/ResearchersBundle.module.scss";

import generics from "~/generics.json";

function ResearchersBundle() {
  return (
    <Box className={styles["researchers-bundle"]}>
      <Typography variant="h5" className={styles["title"]} gutterBottom>
        {generics[6].researchersBundleTitle}
      </Typography>
      <Typography
        variant="subtitle2"
        className={styles["description"]}
        gutterBottom
      >
        {generics[6].researchersBundleDescription}
      </Typography>
      <Card
        sx={{
          background: "linear-gradient(135deg, #d97706, #f59e0b)",
          color: "white",
          borderRadius: 3,
          textAlign: "center",
          width: 330,
          p: 3,
          boxShadow: 3,
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <CiGift size={100}/>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Researcher&apos;s Bundle
          </Typography>

          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            Calendar + 2 Notebooks + Digital Resources
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            alignItems="baseline"
            sx={{ mt: 1 }}
          >
            <Typography
              variant="body2"
              sx={{ textDecoration: "line-through", opacity: 0.8 }}
            >
              €79.97
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              €59.99
            </Typography>
          </Stack>

          <Button
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "#fff",
              color: "#b45309",
              fontWeight: 600,
              borderRadius: 2,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#fef3c7",
              },
            }}
          >
            Save €19.98
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ResearchersBundle;
