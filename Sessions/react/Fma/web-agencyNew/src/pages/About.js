import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

function About(){
    return(
        <>
        <Header />
            <Hero />
            <section className="content">
                <h2>About Us</h2>
                <p>Founded in 2019, BrightWave Marketing is a full-service creative agency specializing in digital storytelling, branding, and performance marketing. We blend creativity with analytics to help brands shine online.</p>
                <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70" alt="Team" class="about-img" />
            </section>
        <Footer />
        </>
    );
}

export default About;