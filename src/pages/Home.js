import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import image2 from "../images/image2.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${image2})` }}>
        <div className="headerContainer">
          {/* <h1>Your Health</h1> */}
          {/* <h1>Our Responsibility</h1> */}
          <p> Your Health,</p>
          <p> Our Responsibility</p>
          <Link to="/menu">
            <button>Book Appointment</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
