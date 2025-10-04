import ButtonComponent from "~/components/ButtonComponent";

import generics from "~/generics.json";

export const firstCardGroup = [
  {
    bgColor: "#182f75",
    titleText: generics[0].card1Title ?? "Title text",
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
