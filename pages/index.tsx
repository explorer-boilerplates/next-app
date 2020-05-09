import { NextPage } from "next";
import { Basic, Combined, Animated, bounce } from "../shared/styles";
import HelloWorld from "../components/hello";

const Home: NextPage = () => (
  <div>
    <Basic>Cool Styles</Basic>
    <Combined>
      With <code>:hover</code>.
    </Combined>
    <Animated animation={bounce}>Let&apos;s bounce.</Animated>
    <HelloWorld />
  </div>
);

export default Home;
