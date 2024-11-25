import React from "react";
import Lottie from "lottie-react";
import logo from "../../lottie/logo.json";

function HomePage() {
  return (
    <>
      <h1>WELCOME</h1>
      <div
        style={{
          width: "20rem",
          marginTop: "-2rem",
        }}
      >
        <Lottie animationData={logo} loop autoplay />
      </div>
      <h3
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
        }}
      >
        We let you manage your employees and tasks in one place.
      </h3>
    </>
  );
}

export default HomePage;
