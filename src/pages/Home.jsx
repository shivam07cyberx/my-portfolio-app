import Skills from "./Skills";
import About from "./About";
import Projects from "./Projects";
import Certifications from "./Certifications";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "../components/Footer";

function Home() {

    return (
        <>
            <About />

            <Skills />

            <Projects />

            <Education/>

            <Certifications/>

            <Contact/>

            <Footer/>
        </>
    );
}

export default Home;