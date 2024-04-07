import "./index.css";

const Kickoff = () => {
  return (
    <div className="become_acca_container">
      <div className="become_acca_container_left">
        <div>
          <h1>Kickoff your ACCA Journey with IndigoLearn</h1>
          <p>Sign in and get instant access to FREE courses</p>
          <div className="acca_image_container">
            <img
              className="acca_image"
              src="https://indigolearn.s3.ap-south-1.amazonaws.com/website/pp_acca_silver_learning_partner.png"
              alt="acca"
            />
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
export default Kickoff;
