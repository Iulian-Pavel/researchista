import Header from "~/components/Header";
import CardWrapper from "~/components/CardComponent";
import SuccessStory from "~/components/SuccessStory";
import ApplicationForm from "~/components/Certificate";

import { firstCardGroup } from "~/utils/cardGroups";
import ResearchistaShop from "~/components/ResearchistaShop";

function Home() {

  return (
    <>
      <Header />
      <CardWrapper cards={firstCardGroup} />
      <SuccessStory />
      <ApplicationForm />
      <ResearchistaShop />
    </>
  );
}

export default Home;
