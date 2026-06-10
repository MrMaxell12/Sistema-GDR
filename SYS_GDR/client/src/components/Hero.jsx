import "../styles/Hero.css";
import heroVideo from "../assets/videos/hero.mp4";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="hero">

            <video
                className="hero-video"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={heroVideo} type="video/mp4" />
            </video>

            <div className="hero-overlay"></div>

            <div className="hero-content">

                <span className="hero-tag">
                    Plataforma para Mestres e Jogadores
                </span>

                <h1>
                    Organize suas campanhas.
                    <br />
                    Viva suas aventuras.
                </h1>

                <p>
                    Crie campanhas, gerencie personagens,
                    registre sessões e encontre novas mesas
                    para jogar.
                </p>

                <div className="hero-buttons">

                    <Link className="hero-primary" to="/register">
                        Criar Conta
                    </Link>

                    <Link className="hero-secondary" to="/about">
                        Saiba mais!
                    </Link>

                </div>

            </div>

        </section>
    );
}

export default Hero;