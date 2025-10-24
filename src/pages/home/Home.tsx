import Header from "~/components/Header";
import CardWrapper from "~/components/CardComponent";
import SuccessStory from "~/components/SuccessStory";
import ResearchistaShop from "~/components/ResearchistaShop";
import ComingSoon from "~/components/ComingSoon";
import ResearchersBundle from "~/components/ResearchersBundle";
import ResearchistaAbout from "~/components/ResearchistaAbout";
import Form from "~/components/Form";

import { firstCardGroup } from "~/utils/cardGroups";
import Certificate from "~/components/Certificate";

function Home() {

  return (
    <>
      <Header />
      <CardWrapper cards={firstCardGroup} />
      <SuccessStory />
      <Certificate />
      <Form />
      <ResearchistaShop />
      <ComingSoon />
      <ResearchersBundle />
      <ResearchistaAbout />
    </>
  );
}

export default Home;
