import Header from "~/components/Header";
import CardWrapper from "~/components/CardComponent";
import SuccessStory from "~/components/SuccessStory";
import ApplicationForm from "~/components/Certificate";

import { firstCardGroup } from "~/utils/cardGroups";

function Home() {

  return (
    <>
      <Header />
      <CardWrapper cards={firstCardGroup} />
      <SuccessStory />
      <ApplicationForm />
    </>
  );
}

export default Home;
