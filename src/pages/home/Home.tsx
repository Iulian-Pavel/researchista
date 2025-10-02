import Header from "~/components/Header";
import CardWrapper from "~/components/CardComponent";

import { firstCardGroup } from "~/utils/cardGroups";
import SuccessStory from "~/components/SuccessStory";

function Home() {

  return (
    <>
      <Header />
      <CardWrapper cards={firstCardGroup} />
      <SuccessStory />
    </>
  );
}

export default Home;
