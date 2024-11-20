import React from "react";
import FadeInSection from './FadeInSection';
import Button from './Button';

const About = () => {
  return (
    <>
    <div className="hero-banner about">
      <div className="headings">
        <h2 className="text-center">A DESIGN THINK?<br /><span className="text-yellow ms-2">THINK</span> ME!</h2>
      </div>
      <div className="overlay"></div>
      <div className="pic"></div>
    </div>

    <FadeInSection>
    <div className="container">
      <div className="blockquote text-center my-10">
        <h2 className="content-heading mb-3 text-center text-uppercase"><strong><span className="text-red">Design</span> . <span className="text-yellow">Development</span></strong></h2>
        <div className=" px-10">
          <p>Throughout my 21 years of experience in Web design & Web development field I have been providing clients, from all around the world, with the most innovative and unique user interfaces using the latest technologies.</p>
          <p>I have also become highly respected UI designer known to push the boundaries of pixel perfect design creations with my keen eyes for details and create game-changing ideas that make extraordinary things happen.</p>
          <Button btnlink='experience' btnstyle='btn-primary' label='MY EXPERIENCES' />
        </div>
      </div>
    </div>
    </FadeInSection>

    <FadeInSection>
    <div className="color-bg red py-8 mb-5">
      <blockquote className="container text-center">
        <h3 className="text-white text-uppercase"><strong>An Enthusiastic</strong></h3>
        <p className="text-white px-10">I am an enthusiastic IT industry professional with 21 years of hands-on experience across various roles. I am committed to shaping exceptional user experiences for digital products. My multifaceted background as a UI Designer, Web Developer, and Adobe Magento2 Commerce Frontend Developer has equipped me with a unique blend of creativity, technical acumen, and leadership skills.</p>
        <Button btnlink='skills' btnstyle='btn-black' label='ABOUT MY SKILLS' />
      </blockquote>
      <div className="slant black"></div>
    </div>
    </FadeInSection>

    <FadeInSection>
    <div className="container my-10">
      <div className="blockquote text-center">
        <h2 className="content-heading text-center text-uppercase mb-3"><strong><span className="text-yellow">Find</span> Me!</strong> <i className="bi bi-bar-chart-fill"></i></h2>
        <p className="px-10">It’s great to have some downtime! Passionate for web design and development, I might enjoy activities that both relax and inspire me.</p>
      </div>

      <div className="key-skills px-10">
        <ul>
          <li><i className="bi bi-record-circle-fill"></i> Playing chess is a fantastic to spend my free time! It’s not only enjoyable but also great for sharpening our strategic thinking and problem-solving skills.</li>
          <li><i className="bi bi-record-circle-fill"></i> Playing cricket is also fantastic to spend my free time! It’s not only fun but also a great way to stay active and socialize. </li>
          <li><i className="bi bi-record-circle-fill"></i> Family outings during vacations are a wonderful way to create lasting memories and bond with loved ones.</li>
          <li><i className="bi bi-record-circle-fill"></i> Truly heartwarming to hear! Caring for my parents is a wonderful and fulfilling way to show my love and appreciation for all they’ve done. And It's been a lesson for my kids to take care of me in the future!</li>
          <li><i className="bi bi-record-circle-fill"></i> My daily activity! Taking care of my health and incorporating exercise into my routine is essential for overall well-being. Of course it depends on your strength what things you can do, just do!</li>
        </ul>
        <div className="mt-5 text-center"><Button btnlink='contact' btnstyle='btn-outline' label='CONTACT' /></div>
      </div>
    </div>
    </FadeInSection>
    </>
  );
}

export default About;