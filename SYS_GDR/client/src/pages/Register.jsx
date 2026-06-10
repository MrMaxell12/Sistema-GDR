import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "../styles/Register.css";

function Register() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleRegister = async (e) => {

        e.preventDefault();

        setError("");
        setSuccess("");

        try {

            const response = await fetch(
                "http://localhost:8080/auth/register",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        username,
                        email,
                        password
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(data.message);
                return;
            }

            setSuccess("Conta criada com sucesso!");

            setTimeout(() => {
                navigate("/login");
            }, 1500);

        } catch (error) {

            setError("Erro ao conectar ao servidor.");

            console.error(error);

        }

    };

    return (

        <div className="register-page">

            <div className="register-card">

                <div className="register-icon">
                    🎲
                </div>

                <h1>GDR-RPG</h1>

                <p>
                    Crie sua conta e comece sua aventura
                </p>

                <form onSubmit={handleRegister}>

                    <input
                        type="text"
                        placeholder="Nome de usuário"
                        value={username}
                        onChange={(e) =>
                            setUsername(e.target.value)
                        }
                    />

                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                    />

                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />

                    {error && (
                        <span className="error">
                            {error}
                        </span>
                    )}

                    {success && (
                        <span className="success">
                            {success}
                        </span>
                    )}

                    <button type="submit">
                        Criar Conta
                    </button>

                </form>

                <div className="register-footer">

                    Já possui uma conta?

                    <Link to="/login">
                        Entrar
                    </Link>

                </div>

            </div>

        </div>

    );
}

export default Register;