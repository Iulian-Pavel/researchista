import Box from "@mui/material/Box";
import CardComponent from "./CardComponent";
import styles from "./CardComponent.module.scss";

type CardData = {
  bgColor: string;
  titleText: string;
  descriptionText: string;
  mainButton?: React.ReactNode;
  secondaryButton?: React.ReactNode;
};

type CardsWrapperProps = {
  cards: CardData[];
};

function CardsWrapper({ cards }: CardsWrapperProps) {
  return (
    <Box className={styles["cards-container"]}>
      {cards.map((card, index) => (
        <CardComponent
          key={index}
          bgColor={card.bgColor}
          titleText={card.titleText}
          descriptionText={card.descriptionText}
          mainButton={card.mainButton}
          secondaryButton={card.secondaryButton}
        />
      ))}
    </Box>
  );
}

export default CardsWrapper;
