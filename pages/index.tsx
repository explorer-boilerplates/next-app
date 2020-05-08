import { NextPage } from "next";
import { Basic, Combined, Animated, bounce } from "../shared/styles";

const Home: NextPage = () => (
  <div>
    <Basic>Cool Styles</Basic>
    <Combined>
      With <code>:hover</code>.
    </Combined>
    <Animated animation={bounce}>Let&apos;s bounce.</Animated>
  </div>
);

export default Home;
