import Banner from "../Banner/Banner";
import Hero from "../Hero/Hero";
import News from "../Feature/Feature";
import RecentGame from "../RecentGames/RecentGame";

const Home = () => {
  return (
    <>
    <Hero slide1={"hero1"} slide2={"hero2"}>
      <Banner
        title={"Best Games"}
        subtitle={"Best gaming website for all your needs"}
      />
    </Hero>
      <News />
      <RecentGame />
</>
  );
};

export default Home;
