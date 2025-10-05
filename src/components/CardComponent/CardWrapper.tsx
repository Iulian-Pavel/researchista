import Box from "@mui/material/Box";
import CardComponent from "./CardComponent";
import styles from "./CardComponent.module.scss";

type CardData = {
  bgColor: string;
  titleText: string;
  titleTextColor?: string;
  textColor?: string;
  descriptionText: string;
  mainButton?: React.ReactNode;
  secondaryButton?: React.ReactNode;
  width?: string | number;
  height?: string | number;
  image?: string;
  price?: number;
};

type CardsWrapperProps = {
  cards: CardData[];
};

function CardsWrapper({ cards }: CardsWrapperProps) {
  return (
    <Box className={styles["cards-container"]} >
      {cards.map((card, index) => (
        <CardComponent
          key={index}
          bgColor={card.bgColor}
          titleText={card.titleText}
          descriptionText={card.descriptionText}
          mainButton={card.mainButton}
          secondaryButton={card.secondaryButton}
          width={card.width}
          image={card.image}
          textColor={card.textColor}
          titleTextColor={card.titleTextColor}
          price={card.price}
          height={card.height}
        />
      ))}
    </Box>
  );
}

export default CardsWrapper;
