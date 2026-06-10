import "../styles/News.css";

function News() {
    return (
        <section className="news" id = "news">
            <h2>Novidades</h2>

            <div className="news-container">

                <article className="news-card">
                    <h3>GDR-RPG em desenvolvimento</h3>
                    <p>
                        Primeira versão da plataforma já está em construção.
                    </p>
                </article>

                <article className="news-card">
                    <h3>Novos recursos chegando</h3>
                    <p>
                        Gerenciamento de campanhas, personagens e sessões.
                    </p>
                </article>

            </div>
        </section>
    );
}

export default News;