import "./index.css";

const BecomeACCA = () => {
  return (
    <div className="become_acca_container">
      <div className="become_acca_container_left">
        <div className="become_acca_container_left_child">
          <h1>Become ACCA in 18 months</h1>
          <p>
            Acquire globally recognized accountancy qualification, ACCA (also
            called as Global CA), and get placed in top MNC's & Big4s.
          </p>
          <div className="right_side_cards_container">
            <div className="right_side_cards">
              <div className="right_side_cards_icon_container">
                <img src="" alt="icon" />
                <p className="right_side_cards_para1">Faculty</p>
              </div>
              <p className="right_side_cards_para2">8 Experts</p>
            </div>
            <div className="right_side_cards">
              <div className="right_side_cards_icon_container">
                <img src="" alt="icon" />
                <p className="right_side_cards_para1">Faculty</p>
              </div>
              <p className="right_side_cards_para2">8 Experts</p>
            </div>
            <div className="right_side_cards">
              <div className="right_side_cards_icon_container">
                <img src="" alt="icon" />
                <p className="right_side_cards_para1">Faculty</p>
              </div>
              <p className="right_side_cards_para2">8 Experts</p>
            </div>
            <div className="right_side_cards">
              <div className="right_side_cards_icon_container">
                <img src="" alt="icon" />
                <p className="right_side_cards_para1">Faculty</p>
              </div>
              <p className="right_side_cards_para2">8 Experts</p>
            </div>
          </div>
          <div className="button_container">
            <button className="download_button">Download Brochure</button>
            <div className="acca_image_container">
              <img
                className="acca_image"
                src="https://indigolearn.s3.ap-south-1.amazonaws.com/website/pp_acca_silver_learning_partner.png"
                alt="acca"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="become_acca_container_child_right">
        <form className="form_container">
          <h1 className="form_heading">
            Applying to be ACCA Get in touch with us!!!
          </h1>
          <div className="form_input_container">
            <input className="form_input" placeholder="Name" />
          </div>
          <div className="form_input_container">
            <input className="form_input" placeholder="Email ID" />
          </div>
          <div className="form_input_container">
            <select className=" form_input">
              <option value="">Education Qualification</option>
              <option>option 1</option>
              <option>option 2</option>
              <option>option 3</option>
            </select>
          </div>
          <div className="form_input_container">
            <select className=" form_input">
              <option value="">Another Drop</option>
              <option>option 1</option>
              <option>option 2</option>
              <option>option 3</option>
            </select>
          </div>
          <button className="request_button" type="submit">
            Request Callback
          </button>
        </form>
      </div>
    </div>
  );
};

export default BecomeACCA;
