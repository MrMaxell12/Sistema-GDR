import { useEffect, useState } from "react";
import api from "../services/api";

function Campaigns() {

  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {

    api.get("/campaigns/")
      .then((response) => {
        setCampaigns(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

  }, []);

  return (
    <>
      <h1>Campanhas</h1>

      {campaigns.map(campaign => (
        <div key={campaign.id}>
          {campaign.name}
        </div>
      ))}
    </>
  );
}

export default Campaigns;