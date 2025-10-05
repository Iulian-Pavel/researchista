import ButtonComponent from "~/components/ButtonComponent";

import placeholder from "~/assets/placeholder.jpg";

import generics from "~/generics.json";

export const firstCardGroup = [
  {
    bgColor: "#182f75",
    titleText: generics[0].card1Title ?? "Title text",
    titleTextColor: "#fff",
    textColor: "#fff",
    descriptionText: generics[0].card1Description ?? "Description Text",
    mainButton: (
      <ButtonComponent
        bgColor="#da7606"
        buttonText="Get Certified - 150€"
        textColor="#fff"
      />
    ),
    secondaryButton: (
      <ButtonComponent
        bgColor="transparent"
        buttonText="View Success Stories"
        textColor="#fff"
        borderColor="#fff"
      />
    ),
  },
];

// TODO: FIX LAYOUT ISSUE WHERE CARDS ARE DISPLAYED IN A COLUMN IF NOT IN SEPARATE CONTAINERS
//     QUICKFIX: Used separate container to display the cards in a row 
//     although not that much of a big issue it certainly is an eye itch
export const shopCards = [
  {
    bgColor: "none",
    titleText: generics[3].shopCalendarCardTitle ?? "Card Title",
    textColor: "gray",
    descriptionText: generics[3].shopCalendarCardText ?? "Card Text",
    width: "80%",
    image: placeholder,
    price: 29.99,
    mainButton: (
      <ButtonComponent 
        bgColor="#182f75"
        buttonText="Add To Cart"
        textColor="#fff"
        width="100%"
      />
    )
  },
];

export const shopCards2 = [
    {
    bgColor: "none",
    titleText: generics[4].shopAcademicCalendarTitle ?? "Card Title",
    textColor: "gray",
    descriptionText: generics[4].shopAcademicCalendarText ?? "Card Text",
    width: "80%",
    image: placeholder,
    price: 34.99,
    mainButton: (
      <ButtonComponent 
        bgColor="#182f75"
        buttonText="Add To Cart"
        textColor="#fff"
        width="100%"
      />
    )
  }
];

export const shopCards3 = [
    {
    bgColor: "none",
    titleText: generics[5].shopNotebookTitle ?? "Card Title",
    textColor: "gray",
    descriptionText: generics[5].shopNotebookText ?? "Card Text",
    width: "80%",
    image: placeholder,
    price: 19.99,
    mainButton: (
      <ButtonComponent 
        bgColor="#182f75"
        buttonText="Add To Cart"
        textColor="#fff"
        width="100%"
      />
    )
  }
];