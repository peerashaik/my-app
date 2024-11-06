import React from "react";
import Button from './Button';

const Patrons = () => {
  return (
    <>
    <div className="container  slideUp">
      <div className="blockquote text-center my-10">
        <h2 className="content-heading mb-3 text-center text-uppercase"><strong><span className="text-water">Employer</span> &  <span className="text-yellow">Employee</span></strong></h2>
        <div className=" px-10">
          <p>Building a strong bond between customers and employers is essential for long-term success and loyalty. Customer satisfaction is a crucial aspect of any business, especially in design and development.</p>
          <Button btnlink='works' btnstyle='btn-primary' label='VIEW RECENT WORKS' />
        </div>
      </div>
    </div>

    <div className="container my-10">
          <h2 className="text-center"><strong><span className="color-darkpink">For All</span> My <span className="text-water">Employers...</span> <i className="bi bi-balloon-heart"></i></strong></h2>
          <ul className="employer-list">
            <li className="shadow slideUp"><i className="num bi bi-7-square"></i>
              <h3><strong>ITC Infotech (client - Schneider Electric)</strong> <span className="tenure">Bangalore, Dec 2022 - Present</span></h3>
              <p><i className="bi bi-record-circle-fill"></i><strong>Designation:</strong> Project Manager, Senior Magento2 Frontend Developer</p>
              <p><i className="bi bi-record-circle-fill"></i><strong>Roles & Responsibilties:</strong> Worked as a senior adobe commerce cloud Magento2 frontend developer and a partial role as associate project manager from frontend perspective for Schneider in-house product. Schneider Electric is developing its own product in B2B and B2C multilingual e-commerce marketplace across the globe. It has multi-store websites for its various products based on their region's sales.</p>
            </li>
            <li className="shadow slideUp"><i className="num bi bi-6-square"></i>
              <h3><strong>PushON - Wings Group of Companies</strong> <span className="tenure">Bangalore, August 2021 – Nov 2022</span></h3>
              <p><i className="bi bi-record-circle-fill"></i><strong>Designation:</strong> UI/UX Designer, Magento2 Frontend Developer</p>
              <p><i className="bi bi-record-circle-fill"></i><strong>Roles & Responsibilties:</strong> Involved in development and maintenance of custom themes for adobe commerce cloud Magento2 projects, customization and implementation of new features for complete user journey like checkout, product, catalog, CMS(PageBuilder) pages.</p>
            </li>
            <li className="shadow slideUp"><i className="num bi bi-5-square"></i>
              <h3><strong>Nityo Infotech Services (client - Singpost)</strong> <span className="tenure">Bangalore, April 2019 – July 2021</span></h3>
              <p><i className="bi bi-record-circle-fill"></i><strong>Designation:</strong> Lead UI/UX designer, Magento2 Frontend Developer</p>
              <p><i className="bi bi-record-circle-fill"></i><strong>Roles & Responsibilties:</strong> Worked as a lead UI designer & Adobe Commerce Cloud Magento frontend developer. Have led UI design team for the client “Singpost” leading ecommerce company in Singapore and worked as individual contributor for e-commerce Magento2, WordPress and Shopify frontend theme Internal development and customization.</p>
            </li>
            <li className="shadow slideUp"><i className="num bi bi-4-square"></i>
              <h3><strong>Sigma Info Solutions</strong> <span className="tenure">Bangalore, March 2016 - March 2019</span></h3>
              <p><i className="bi bi-record-circle-fill"></i><strong>Designation:</strong> Senior UI/UX Engineer</p>
              <p><i className="bi bi-record-circle-fill"></i><strong>Roles & Responsibilties:</strong> Worked as a creative guide for all key projects, contribution towards design and implementation for web-based applications in various domains like bank, health, technology, IT services, lifestyle, ecommerce and CMS applications. Worked on various frontend tools like .Net, e-commerce, Open Source and Cloud Magento e-commerce, WordPress design to build user centered web applications. Collaborated closely with Angular, React and Polymer development teams to support UI theme development and customization.</p>
            </li>
            <li className="shadow slideUp"><i className="num bi bi-3-square"></i>
              <h3><strong>Hardwin Software Solutions Pvt Ltd</strong> <span className="tenure">Bangalore, November 2014 - February 2016</span></h3>
              <p><i className="bi bi-record-circle-fill"></i><strong>Designation:</strong> Senior UI/UX Designer and Web Developer</p>
              <p><i className="bi bi-record-circle-fill"></i><strong>Roles & Responsibilties:</strong> Worked as senior UI/UX designer for multiple projects including user and competitive research, wireframing, visual design, branding and various product application designs. Collaboration with Magento, .Net developers to integrate UI design patterns for multiple e-commerce, WordPress websites.</p>
            </li>
            <li className="shadow slideUp"><i className="num bi bi-2-square"></i>
              <h3><strong>Ezone Solutions</strong> <span className="tenure">Kolkata, November 2004 - October 2014</span></h3>
              <p><i className="bi bi-record-circle-fill"></i><strong>Designation:</strong> Senior Web Designer and Web Developer</p>
              <p><i className="bi bi-record-circle-fill"></i><strong>Roles & Responsibilties:</strong> Designed various web interfaces for small to medium-sized businesses across the globe. Designed and developed workflows, user interfaces through iteration process collaborated with multiple roles to drive business alignments. Worked with PHP & .Net developers to support in the development process to achieve user friendly interfaces.</p>
            </li>
            <li className="shadow slideUp"><i className="num bi bi-1-square"></i>
              <h3><strong>Vyoma Technologies</strong> <span className="tenure">Hyderabad, December 2003 - October 2004</span></h3>
              <p><i className="bi bi-record-circle-fill"></i><strong>Designation:</strong> Graphic Designer</p>
              <p><i className="bi bi-record-circle-fill"></i><strong>Roles & Responsibilties:</strong> Designed company logos, business cards, skyscrapers, web banners, business brochure designs, mockup web templates.</p>
            </li>
          </ul>
    </div>

    <div className="color-bg yellow py-8 slideUp">
      <blockquote className="container text-center">
        <h3 className="text-uppercase text-white"><strong>Product Design! Think Me!</strong></h3>
        <p className="text-white px-10">I am actively seeking a dynamic and creative environment where I can contribute significantly. Whether it’s leading a team, driving innovation, or refining user experiences, I am psyched up to add value and make a lasting impact.</p>
        <Button btnlink='contact' btnstyle='btn-outline' label='CONTACT' />
      </blockquote>
      <div className="slant black top"></div>
    </div>

    <div className="hero-banner patrons slideUp">
      <div className="headings">
        <h2 className=" text-center">EMPLOYER & <span className="text-blue ms-2">EMPLOYEE</span></h2>
      </div>
      <div className="overlay"></div>
      <div className="pic"></div>
    </div>
    </>
  );
}

export default Patrons;