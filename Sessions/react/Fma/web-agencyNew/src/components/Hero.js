function Hero(props) {
    return (
        <>
            <section className="hero">
                <img src={props.imgHeader} alt="Hero" />
                <div className="overlay">
                    <h2>{props.title}</h2>
                    <p>{props.desc}</p>
                </div>
            </section>
        </>
    );
}

export default Hero;