import React, { useContext } from "react";
import "./index.scss";
import TypedText from "../TypedText";
import SocialLinks from "../SocialLinks";
import Info from "../Info";
import Skills from "../Skills";
import { ThemeContext } from "../../context/ThemeContext";
import { useAnimation } from "../../use/animation";
import pdf from "../../assets/cv.pdf";
import ProfileImg from './../../assets/profile.jfif'

const Profile = () => {
  const { backgroundImage, type } = useContext(ThemeContext);
  const { animation } = useAnimation();
  return (
    <div className="profile">
      <div className="profile__banner">
        <div
          className={`profile__photo ${animation}`}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <img
          src={ProfileImg}
          alt={type}
        />
      </div>
      <div className="profile__content">
        <div className="profile__title">Daniel Ortega</div>
        <TypedText
          dataText={[
            "Senior JavaScript Engineer",
            "Frontend Development",
            "Backend Development",
          ]}
        />
        <SocialLinks />
        <Info icon="location"> Toluca / México </Info>
        <Skills />
      </div>
      <div className="profile__contact">
        <a href={pdf} target="_blank" rel="noreferrer">
          <span>Download CV</span>
        </a>
        <a href="mailto:danielortegacareaga@gmail.com">
          <span>Contact Me</span>
        </a>
      </div>
    </div>
  );
};

export default Profile;
