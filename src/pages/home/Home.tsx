import Header from "~/components/Header";
import CardWrapper from "~/components/CardComponent";
import SuccessStory from "~/components/SuccessStory";
import ApplicationForm from "~/components/Certificate";
import ResearchistaShop from "~/components/ResearchistaShop";
import ComingSoon from "~/components/ComingSoon";
import ResearchersBundle from "~/components/ResearchersBundle";
import ResearchistaAbout from "~/components/ResearchistaAbout";

import { firstCardGroup } from "~/utils/cardGroups";

function Home() {

  return (
    <>
      <Header />
      <CardWrapper cards={firstCardGroup} />
      <SuccessStory />
      <ApplicationForm />
      <ResearchistaShop />
      <ComingSoon />
      <ResearchersBundle />
      <ResearchistaAbout />
    </>
  );
}

export default Home;
