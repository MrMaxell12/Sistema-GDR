import "../styles/About.css";

function About() {
    return (
        <section className="about" id="about">

            <div className="about-content">

                <div className="about-text">

                    <span className="about-tag">
                        Sobre o Projeto
                    </span>

                    <h2>
                        A história por trás do GDR-RPG
                    </h2>

                    <p>
                        O GDR-RPG surgiu da paixão por RPG de mesa e da
                        dificuldade de organizar campanhas, personagens,
                        sessões e informações importantes utilizando apenas
                        anotações, planilhas e aplicativos de mensagens.
                    </p>

                    <p>
                        Como jogador e mestre, percebi que muitas mesas
                        acabam perdendo informações importantes ou ficando
                        dependentes de diversas ferramentas diferentes para
                        funcionar. Foi então que nasceu a ideia de criar uma
                        plataforma centralizada para facilitar a gestão de
                        campanhas e melhorar a experiência de todos os
                        participantes.
                    </p>

                    <p>
                        Além de atender uma necessidade real da comunidade,
                        o GDR-RPG também representa um projeto acadêmico e
                        pessoal que reúne conhecimentos de desenvolvimento
                        web, banco de dados e design de interfaces.
                    </p>

                </div>

                <div className="about-card">

                    <h3>📌 Informações do Projeto</h3>

                    <div className="info-item">
                        <strong>Criador</strong>
                        <span>João Pedro Ianke B. de Lima</span>
                    </div>

                    <div className="info-item">
                        <strong>Curso</strong>
                        <span>Análise e Desenvolvimento de Sistemas</span>
                    </div>

                    <div className="info-item">
                        <strong>Tecnologias</strong>
                        <span>React • Flask • PostgreSQL</span>
                    </div>

                    <div className="info-item">
                        <strong>Status</strong>
                        <span>🚧 Em Desenvolvimento</span>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;