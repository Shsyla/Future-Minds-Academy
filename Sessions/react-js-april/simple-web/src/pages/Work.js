import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Work() {
    return (
        <>
            <Header
                title="Work"
                desc="Check out our work, don't be shy!" />
            <Nav />
            <main>
                <h2>Work</h2>
                <p>This is the home page. Welcome to our simple website built with HTML and CSS only.</p>
            </main>
            <Footer />
        </>
    );
}

export default Work;