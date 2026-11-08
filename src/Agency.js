import './Agency.css';

const AGENCY_URL = 'https://wissasystems.com';
const DEMOS_URL = 'https://wissasystems.com/demos';

const demos = [
  {
    type: 'AI Chatbot',
    channel: 'Instagram DMs',
    name: 'Instagram DM Setter',
    builtFor: 'fitness influencers & online coaches',
    description:
      "Replies to DMs in the coach's voice, qualifies leads by goal and readiness, and invites the right people to book a call.",
    link: 'https://ask.coldflowlabs.com',
    cta: 'Open demo',
  },
  {
    type: 'AI Chatbot',
    channel: 'DMs & website chat',
    name: 'Studio DM Assistant',
    builtFor: 'Pilates & fitness studios',
    description:
      "Answers questions about classes, pricing, the schedule and first visits straight from the studio's own details, any time of day.",
    link: 'https://chatbot.wissasystems.com',
    cta: 'Open demo',
  },
  {
    type: 'AI Chatbot',
    channel: 'Website chat',
    name: 'Real Estate Appointment Desk',
    builtFor: 'real estate agents',
    description:
      'Handles buyer, renter and seller enquiries the moment they land, then books a time with the agent in the same conversation.',
    link: 'https://rs.wissasystems.com',
    cta: 'Open demo',
  },
  {
    type: 'AI Voice Agent',
    channel: 'Phone receptionist',
    name: '"Alex", Front-Desk Receptionist',
    builtFor: 'gyms & fitness studios',
    description:
      'Picks up on the first ring, answers common caller questions and books sessions, with a live transcript and a call summary.',
    link: 'https://voiceagent.wissasystems.com',
    cta: 'Talk to Alex',
  },
  {
    type: 'AI Voice Agent',
    channel: 'Sales line',
    name: '"Frost", Sales Assistant',
    builtFor: 'businesses that take sales calls',
    description:
      'Answers sales calls instantly, explains the offer, handles follow-up questions and routes serious callers to a booked call.',
    link: 'https://wissasystems.com/demo-voiceagent/',
    cta: 'Talk to Frost',
  },
];

function Agency() {
  return (
    <section className="agency-section">
      <h2 className="agency-title">Wissa Systems</h2>

      <div className="agency-intro">
        <p className="agency-role">Founder · August 2026 – Present</p>
        <p>
          I founded Wissa Systems, an AI agency that builds and deploys autonomous assistants for
          real businesses: chatbots that answer DMs and website chat, voice agents that pick up the
          phone, and automations that capture and qualify leads. I run the whole cycle myself, from
          the first sales conversation and scoping to building, deploying and supporting each system.
        </p>
        <div className="agency-buttons">
          <a href={AGENCY_URL} className="agency-btn agency-btn-primary" target="_blank" rel="noopener noreferrer">
            Visit wissasystems.com
          </a>
          <a href={DEMOS_URL} className="agency-btn agency-btn-secondary" target="_blank" rel="noopener noreferrer">
            See all live demos
          </a>
        </div>
      </div>

      <h3 className="demos-heading">Live Demos</h3>
      <p className="demos-subheading">
        Built through the agency. Each one runs on a sample business, so open it and talk to it the way a customer would.
      </p>

      <div className="demos-grid">
        {demos.map((demo) => (
          <div className="demo-card" key={demo.name}>
            <div className="demo-meta">
              <span className={`demo-type ${demo.type === 'AI Voice Agent' ? 'voice' : 'chat'}`}>{demo.type}</span>
              <span className="demo-channel">{demo.channel}</span>
            </div>
            <h4 className="demo-name">{demo.name}</h4>
            <p className="demo-built-for">Built for {demo.builtFor}</p>
            <p className="demo-description">{demo.description}</p>
            <a href={demo.link} className="demo-link" target="_blank" rel="noopener noreferrer">
              {demo.cta} →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Agency;
