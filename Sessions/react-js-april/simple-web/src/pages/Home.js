import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Header
                title="Welcome everyone!"
                desc="You are in the best place" />
            <Nav />
            <main>
                <h2>Home</h2>
                <p>This is the home page. Welcome to our simple website built with HTML and CSS only.</p>
            </main>
            <Footer />
        </>
    );
}

export default Home;