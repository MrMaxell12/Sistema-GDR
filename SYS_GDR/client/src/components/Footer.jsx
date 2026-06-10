import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-content">

                <div className="footer-brand">
                    <h2>GDR-RPG</h2>

                    <p>
                        Sua central para campanhas,
                        personagens e aventuras épicas.
                    </p>
                </div>

                <div className="footer-links">

                    <div>
                        <h3>Plataforma</h3>

                        <a href="#">Início</a>
                        <a href="#">Recursos</a>
                        <a href="#">Eventos</a>
                    </div>

                    <div>
                        <h3>Conta</h3>

                        <a href="#">Login</a>
                        <a href="#">Cadastro</a>
                    </div>

                    <div>
                        <h3>Suporte</h3>

                        <a href="#">Ajuda</a>
                        <a href="#">Contato</a>
                    </div>

                </div>

            </div>

            <div className="footer-bottom">
                <p>GDR-RPG © 2026 • Versão Alpha 0.1</p>
            </div>

        </footer>
    );
}

export default Footer;