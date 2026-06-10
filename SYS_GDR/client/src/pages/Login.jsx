import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Login.css";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        setError("");

        try {

            const response = await fetch(
                "http://localhost:8080/auth/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
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

            console.log(data);

            localStorage.setItem(
                "user",
                JSON.stringify(data.user)
            );

            navigate("/home");

        } catch (error) {

            setError("Erro ao conectar ao servidor");

            console.error(error);

        }
    };

    return (
        
        <div className="login-page">
            
            <div className="login-card">

                <h1>GDR-RPG</h1>

                <p>
                    Entre na sua conta
                </p>

                <form onSubmit={handleLogin}>

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

                    <button type="submit">
                        Entrar
                    </button>

                </form>
                <div className="login-footer">
                    Ainda não possui uma conta?{" "}
                    <a href="/register">
                        Criar conta
                    </a>
                </div>
            </div>
            
        
        </div>
        
        
    
    );
    
}


export default Login;