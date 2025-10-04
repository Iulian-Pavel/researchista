import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import styles from "./CardComponent.module.scss";

type CardProps = {
  bgColor: string;
  mainButton?: React.ReactNode;
  secondaryButton?: React.ReactNode;
  titleText: string;
  titleTextColor?: string;
  textColor?: string;
  descriptionText: string;
  width?: string;
  image?: string;
};

function CardComponent({
  bgColor,
  mainButton,
  secondaryButton,
  titleText,
  titleTextColor,
  textColor,
  descriptionText,
  width,
  image,
}: CardProps) {
  return (
    <Card
      sx={{ backgroundColor: bgColor, width: width }}
      className={styles["card-component"]}
    >
      {image && <CardMedia image={image} component="img" sx={{ height: 140 }} />}
      <CardContent className={styles["card-content"]}>
        <Typography variant="h5" color={titleTextColor} gutterBottom>
          {titleText}
        </Typography>
        <Typography color={textColor}>{descriptionText}</Typography>
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
