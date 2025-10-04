import CardsWrapper from "~/components/CardComponent/CardWrapper";
import Box from "@mui/material/Box";
import { shopCards, shopCards2, shopCards3 } from "~/utils/cardGroups";

function ResearchistaShop() {
  return (
    <>
      {/* 
    //TODO: FIX LAYOUT ISSUE WHERE CARDS ARE DISPLAYED IN A COLUMN IF NOT IN SEPARATE CONTAINERS
    //QUICKFIX: Used separate container to display the cards in a row 
    // although not that much of a big issue it certainly is an eye itch
    */}
      <Box
        mt={5}
        padding={2}
        sx={{
          backgroundColor: "#eef2fe",
          display: {
            md: "flex",
            lg: "flex",
          },
        }}
      >
        <Box flex={1}>
          <CardsWrapper cards={shopCards} />
        </Box>
        <br />
        <Box flex={1}>
          <CardsWrapper cards={shopCards2} />
        </Box>
        <br />
        <Box flex={1}>
          <CardsWrapper cards={shopCards3} />
        </Box>
      </Box>
    </>
  );
}

export default ResearchistaShop;
