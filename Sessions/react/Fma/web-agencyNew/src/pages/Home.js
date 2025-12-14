import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

function Home(){
    return(
        <>
            <Header />
            <Hero
                imgHeader='https://images.unsplash.com/photo-1499914485622-a88fac536970?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170'
                title='Home'
                desc='This is the most awesome page.'
            />
            <section className="content">
                <h2>What We Do</h2>
                <p>We help businesses expand their reach through data-driven marketing, bold creative ideas, and performance-focused campaigns.</p>
            </section>
            <Footer />
        </>
    );
}

export default Home;