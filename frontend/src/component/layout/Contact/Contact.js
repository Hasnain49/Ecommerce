import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="hasnainwebdev.123@gmail.com">
        <Button>Contact: hasnainwebdev.123@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
