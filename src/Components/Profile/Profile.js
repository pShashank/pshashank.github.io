import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sticky from 'react-sticky-el';
import "../style.css";
import profile from "./profile.JPG";
import SocialFollow from "../SocialFollow";

function Profile() {
  return (
    <div className="col-sm-4 center" id="mainContent">
      <Sticky>
      <img src={profile} alt="Avatar" height="200" width="200"></img>
      <br></br>
      <br></br>
      <h2>Shashank Penukonda</h2>
      <p className="email">shashankp0047@gmail.com</p>
      <br />
      <hr class="rounded"></hr>
      <h3>About Me</h3>
      <p>
        I'm a UT Arlington graduate. I have completed my masters in Computer
        Science with majors in AI and DB. I also have experience as a software
        developer working on Android Development. I'm currently looking for
        full-time position as a software engineer.
      </p>
      <br></br>
      <SocialFollow />
      <p className="copyright">&copy; 2020 Shashank Penukonda, pshashank.com</p>
      <br></br>
      <br></br>
      </Sticky>
    </div>
  );
}

export default Profile;
