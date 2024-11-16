import React from "react";
import AboutComponentMini from "../../SubComponents/About";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="https://media.gettyimages.com/id/882157168/photo/bunch-of-flowers-and-bread-on-terrace-table.jpg?s=612x612&w=0&k=20&c=YxCljStO2vlOaZlbQcMGdUPYNc0lsb5qhd5VkiqVlyI=" alt="about" />
        <div className="content">
          <h3>Your peace of mind, our priority!</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem magnam totam alias harum sit facilis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iste perferendis ab quod deserunt ipsam pariatur minus sit assumenda, voluptatem commodi reiciendis, est dicta fuga?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio sunt consequatur dolorem saepe pariatur nulla molestiae a labore!</p>
        </div>
      </div>
      <AboutComponentMini />
    </section>
  );
};

export default AboutUs;