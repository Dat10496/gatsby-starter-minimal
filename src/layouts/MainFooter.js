import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./MainFooter.css";

function MainFooter() {
  return (
    <div className="main-footer">
      <div className="footer">
        <div className="information">
          <div className="box-avatar">
            <div className="avatar-icon">
              <p className="avatar-name">K</p>
            </div>
            <p className="private-name">Kinka Finance</p>
          </div>

          <p id="description">
            2021 Award winning Finance Advisor and Lorem ipsum dolor sit amet
          </p>

          <div id="cover-box-icon">
            <div className="box-icon">
              <FacebookRoundedIcon
                fontSize="large"
                sx={{
                  width: 55,
                  height: 55,
                  color: "#FF8049",
                  "&: hover": {
                    cursor: "pointer",
                  },
                }}
              />

              <div className="social-icon">
                <TwitterIcon fontSize="large" />
              </div>
              <div className="social-icon">
                <InstagramIcon fontSize="large" />
              </div>
            </div>
          </div>
        </div>

        <div id="cover-box">
          <div className="box-contact">
            <p className="title-contact">Location</p>
            <p id="sub-title">America</p>
            <p id="sub-title">Asia</p>
            <p id="sub-title">Europe</p>
            <p id="sub-title">Africa</p>
          </div>

          <div className="box-contact">
            <p className="title-contact">Contact</p>
            <p id="sub-title">About Me</p>
            <p id="sub-title">Team</p>
            <p id="sub-title">Profile</p>
            <p id="sub-title">FAQ</p>
          </div>

          <div className="box-contact">
            <p className="title-contact">Legals</p>
            <p id="sub-title">Privacy</p>
            <p id="sub-title">Disclaimer</p>
            <p id="sub-title">Terms</p>
            <p id="sub-title">Company</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainFooter;
