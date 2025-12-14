import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Contact() {
    return (
        <>
            <Header
                title="Contact us"
                desc="We'd like to hear from you" />
            <Nav />
            <main>
                <h2>Contact</h2>
                <p>This is the home page. Welcome to our simple website built with HTML and CSS only.</p>
            </main>
            <Footer />
        </>
    );
}

export default Contact;