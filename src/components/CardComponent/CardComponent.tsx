import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import styles from "./CardComponent.module.scss";

type CardProps = {
  bgColor: string;
  mainButton?: React.ReactNode;
  secondaryButton?: React.ReactNode;
  titleText: string;
  descriptionText: string;
};

function CardComponent({
  bgColor,
  mainButton,
  secondaryButton,
  titleText,
  descriptionText,
}: CardProps) {
  return (
    <Card
      sx={{ backgroundColor: bgColor }}
      className={styles["card-component"]}
    >
      <CardContent className={styles["card-content"]}>
        <Typography variant="h5" color="white" gutterBottom>
          {titleText}
        </Typography>
        <Typography color="white">{descriptionText}</Typography>
        {(mainButton || secondaryButton) && (
          <CardActions className={styles["card-actions"]}>
            {mainButton}
            {secondaryButton}
          </CardActions>
        )}
      </CardContent>
    </Card>
  );
}

export default CardComponent;
