import "./index.css";

const WhyChooseUs = () => {
  return (
    <div className="wcu_container">
      <div className="wcu_container_child">
        <h1 className="wsu_heading">
          Why Choose Us
          <span className="wsu_heading_border"></span>
        </h1>
        <div className="wcu_card_container">
          <div className="wcu_card">
            <img className="icon-size" src="./ca_concept.png" alt="faculty" />
            <p className="wsu_para1">Expert Faculty</p>
            <p className="wsu_para2">
              Our qualified Faculty with significant practical experience guide
              students every step of the way
            </p>
          </div>
          <div className="wcu_card">
            <img className="icon-size" src="./ca_concept.png" alt="faculty" />
            <p className="wsu_para1">Expert Faculty</p>
            <p className="wsu_para2">
              Our qualified Faculty with significant practical experience guide
              students every step of the way
            </p>
          </div>
          <div className="wcu_card">
            <img className="icon-size" src="./ca_concept.png" alt="faculty" />
            <p className="wsu_para1">Expert Faculty</p>
            <p className="wsu_para2">
              Our qualified Faculty with significant practical experience guide
              students every step of the way
            </p>
          </div>
        </div>
        <div className="other_cards_container">
          <div className="other_cards">
            <p className="other_cards_heading">Levels</p>
            <div className="icon_container">
              <img src="icon" alt="icon" />
              <p>Three (13 papers)</p>
            </div>
          </div>
          <div className="other_cards">
            <p className="other_cards_heading">Levels</p>
            <div className="icon_container">
              <img src="icon" alt="icon" />
              <p>Three (13 papers)</p>
            </div>
          </div>
          <div className="other_cards">
            <p className="other_cards_heading">Levels</p>
            <div className="icon_container">
              <img src="icon" alt="icon" />
              <p>Three (13 papers)</p>
            </div>
          </div>
          <div className="other_cards">
            <p className="other_cards_heading">Levels</p>
            <div className="icon_container">
              <img src="icon" alt="icon" />
              <p>Three (13 papers)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
