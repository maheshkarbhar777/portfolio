

export default function HeroSection(){
    return(
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Mahesh Karbhar</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Full Stack</span>{""}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section-description">
                    I am a Full Stack Developer with expertise in building end-to-end web applications. Proficient in front-end and back-end technologies.<br /> I specialize in creating seamless, user-centric experiences.<br/> Additionally, I possess strong AWS knowledge, ensuring robust and scalable cloud solutions for optimal performance.
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="Hero Section" />
            </div>
        </section>
    )
}