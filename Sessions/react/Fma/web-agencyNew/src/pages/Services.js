import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Services(){
    return(
        <>
            <Header />
            <Hero />
            <section className="content">
                <h2>Our Services</h2>
                <ul>
                <li><strong>Digital Strategy:</strong> Data-driven planning and execution.</li>
                <li><strong>Brand Identity:</strong> Create brands that inspire and connect.</li>
                <li><strong>Social Media Marketing:</strong> Engage audiences and grow communities.</li>
                <li><strong>SEO & Ads:</strong> Increase visibility and conversions.</li>
                <li><strong>Content Creation:</strong> Photography, video, and copy that sell stories.</li>
                </ul>
            </section>
            <Footer />
        </>
    );
}