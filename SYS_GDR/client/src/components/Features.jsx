import "../styles/Features.css";

function Features() {
    return (
        <section className="features" id = "features">

            <div className="features-header">
                <h2>Ferramentas para Mestres e Jogadores</h2>
                <p>
                    Tudo o que você precisa para organizar suas aventuras em um único lugar.
                </p>
            </div>

            <div className="feature-grid">

                <div className="feature-card">
                    <h3>📖 Campanhas</h3>
                    <p>
                        Crie, organize e acompanhe todas as informações das suas mesas.
                    </p>
                </div>

                <div className="feature-card">
                    <h3>🧙 Personagens</h3>
                    <p>
                        Gerencie fichas, atributos, histórico e evolução dos personagens.
                    </p>
                </div>

                <div className="feature-card">
                    <h3>📅 Sessões</h3>
                    <p>
                        Registre acontecimentos importantes e planeje futuras aventuras.
                    </p>
                </div>

                <div className="feature-card">
                    <h3>🎲 Encontre Mesas</h3>
                    <p>
                        Descubra novas campanhas e conecte-se com outros jogadores.
                    </p>
                </div>

                <div className="feature-card">
                    <h3>👑 Gerencie sua Mesa</h3>
                    <p>
                        Controle jogadores, sessões e informações da campanha.
                    </p>
                </div>

                <div className="feature-card">
                    <h3>☁️ Tudo Online</h3>
                    <p>
                        Acesse suas informações de qualquer lugar e mantenha tudo organizado.
                    </p>
                </div>

            </div>

        </section>
    );
}

export default Features;