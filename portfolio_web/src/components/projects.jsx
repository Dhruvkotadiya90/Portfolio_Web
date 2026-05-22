export default function Projects() {
  const projects = [

    { title: "Blood Donation App", desc: "A simple blood donation android application allows user to register and inquire for relevant blood groups and provides donor contacts." },

    { title: "Stock Price Prediction Using ML", desc: "Built a machine learning model to predict stock prices using historical market data and data preprocessing techniques." }
  ];

  return (
    <section id="projects" class="projects-section">
  <h2 class="section-title">My Projects</h2>

  <div class="projects-container">

    <div class="project-card" onclick="openProject('https://github.com/yourusername/blood-donation-app')">
      <h3>Blood Donation App</h3>
      <p>A Java-based platform to connect donors and recipients efficiently.</p>
    </div>


    <div class="project-card" onclick="openProject('https://github.com/yourusername/stock-price-prediction')">
      <h3>Stock Price Prediction</h3>
      <p>Machine learning model to predict stock trends using historical data.</p>
    </div>

  </div>
</section>
  );
}
