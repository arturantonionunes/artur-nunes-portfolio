import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href={"https://github.com/arturantonionunes"}
        target={"_blank"}
        rel={"noreferrer"}
      >
        <div>
          <BsGithub />
        </div>
      </a>
      <a
        href={"https://www.linkedin.com/in/arturantonionunes/"}
        target={"_blank"}
        rel={"noreferrer"}
      >
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a
        href={"https://www.facebook.com/artur.nunes.33821189"}
        target={"_blank"}
        rel={"noreferrer"}
      >
        <div>
          <FaFacebookF />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
