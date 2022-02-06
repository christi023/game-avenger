import Banner from "../Banner/Banner";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <Hero slide1={"hero1"} slide2={"hero2"}>
      <Banner
        title={"Best Games"}
        subtitle={"Best gaming website for all your needs"}
      />
    </Hero>
  );
};

export default Home;
