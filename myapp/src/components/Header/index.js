import "./index.css";

const Header = () => {
  return (
    <nav className="nav_bar">
      <div className="nav_bar_child_3">
        <div className="company_name">
          <p className="company_name_heading">IndigoLearn</p>
        </div>
        <div className="nav_bar_middle_container">
          <div className="nav_bar_middle_container_child">
            <p className="nav_bar_middle_container_para">BUY COURSES</p>
            <p className="nav_bar_middle_container_para">PROGRAMS</p>
            <p className="nav_bar_middle_container_para">FREE RESOURCES</p>
          </div>
        </div>
        <div className="nav_bar_auth">
          <div className="nav_bar_auth_child">
            <button className="nav_bar_auth_button">
              <span className="nav_bar_auth_button_span">
                <img className="nav_bar_auth_button_svg" src="" alt="profile" />
              </span>
              Log In/Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
