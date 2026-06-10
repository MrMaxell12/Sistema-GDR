import Navbar from "../components/Navbar";
import About from "../components/About";
import Hero from "../components/Hero";
import Features from "../components/Features";
import News from "../components/News";
import Footer from "../components/Footer";


function Landing() {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <About />
            <News />
            <Footer />
        </>
    );
}

export default Landing;