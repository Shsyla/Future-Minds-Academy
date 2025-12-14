import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function About() {
    return (
        <>
            <Header
            title="About our Company"
            desc="This is about our amazing Company" />
            <Nav />
            <main>
                <h2>About</h2>
                <p>This is the home page. Welcome to our simple website built with HTML and CSS only.</p>
            </main>
            <Footer />
        </>
    );
}

export default About;