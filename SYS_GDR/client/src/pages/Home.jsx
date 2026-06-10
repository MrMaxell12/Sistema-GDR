import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import CampaignCard from "../components/CampaignCard";

import "../styles/Home.css";

function Home() {

    const [user, setUser] = useState(null);

    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {

        const storedUser =
            localStorage.getItem("user");

        if (storedUser) {

            setUser(
                JSON.parse(storedUser)
            );
        }

        fetch("http://localhost:8080/campaigns/")
            .then(res => res.json())
            .then(data => setCampaigns(data));

    }, []);

    const handleLogout = () => {

        localStorage.removeItem("user");

        window.location.href = "/";
    };

    return (

        <div className="home">

            <Sidebar
                user={user}
                onLogout={handleLogout}
            />

            <main className="home-content">

                <h1>
                    Bem-vindo, {user?.username}
                </h1>

                <h2>
                    Minhas Campanhas
                </h2>

                {campaigns.map(campaign => (

                    <CampaignCard
                        key={campaign.id}
                        campaign={campaign}
                    />

                ))}

            </main>

        </div>

    );
}

export default Home;