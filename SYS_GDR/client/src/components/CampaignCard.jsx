import "../styles/CampaignCard.css";

function CampaignCard({ campaign }) {

    return (

        <div className="campaign-card">

            <h3>
                {campaign.name}
            </h3>

            <p>
                {campaign.description}
            </p>

        </div>

    );
}

export default CampaignCard;