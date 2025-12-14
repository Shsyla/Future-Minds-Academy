import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Contact(){
    return(
        <>
            <Header />
            <Hero />
            <section class="content">
                <h2>Contact Us</h2>
                <p>Email: <a href="mailto:info@brightwave.com">info@brightwave.com</a></p>
                <p>Phone: +1 (555) 789-2345</p>
                <p>Address: 123 Market Street, Los Angeles, CA</p>
            </section>
            <Footer />
        </>
    );
}