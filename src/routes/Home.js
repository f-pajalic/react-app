import AboutOwners from "../components/AboutOwners/AboutOwners";
import Hero from "../components/Hero/Hero";
import Specials from "../components/Specials/Specials";
import Testamonials from "../components/Testamonials/Testamonials";


function Home() {
    return (
        <>
            <Hero></Hero>
            <Specials></Specials>
            <Testamonials></Testamonials>
            <AboutOwners></AboutOwners>
        </>
    );
}

export default Home;
