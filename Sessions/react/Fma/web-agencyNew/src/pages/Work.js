import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

function Work() {
    return (
        <>
            <Header />
            <Hero
                imgHeader='https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170'
                title='Check out my awesome work'
                desc='We have worked so hard to get Money Honey.'
            />
            <section className="gallery">
                <img src="https://images.unsplash.com/photo-1487014679447-9f8336841d58" alt="Project 1" />
                <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2" alt="Project 2" />
                <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" alt="Project 3" />
            </section>
            <Footer />
        </>
    );
}
export default Work;