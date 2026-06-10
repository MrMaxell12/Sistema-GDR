import { Link } from "react-router-dom";

import "../styles/UnderConstruction.css";

function UnderConstruction() {

    return (

        <div className="construction-page">

            <div className="construction-card">

                <div className="construction-icon">
                    🚧
                </div>

                <h1>
                    Área em Construção
                </h1>

                <p>
                    Os goblins da engenharia ainda estão
                    trabalhando nesta área do GDR-RPG.
                </p>

                <p>
                    Algumas funcionalidades ainda não foram
                    implementadas nesta versão.
                </p>

                <div className="construction-warning">

                    ⚒️ OFF LIMITS ⚒️

                </div>

                <Link
                    className="construction-button"
                    to="/"
                >
                    Voltar para a Página Inicial
                </Link>

            </div>

        </div>

    );
}

export default UnderConstruction;