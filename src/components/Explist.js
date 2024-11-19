export const expData = [
  {
    "id": 7,
    "company": "ITC Infotech",
    "location": "Bangalore",
    "tenure": "Dec 2022 - June 2024",
    "designation": "Project Manager, Senior Magento2 Frontend Developer",
    "shortdesc": "Worked as a senior adobe commerce cloud Magento2 frontend developer for Schneider Electric and part of their B2B and B2C in-house product development which is a multilingual e-commerce marketplace across the globe. It has multi-store websites for its various products based on their region's sales."
  },{
    "id": 6,
    "company": "PushON - Wings Group of Companies",
    "location": "Bangalore",
    "tenure": "August 2021 – Nov 2022",
    "designation": "UI/UX Designer, Magento2 Frontend Developer",
    "shortdesc": "Involved in development and maintenance of custom themes for adobe commerce cloud Magento2 projects, customization and implementation of new features for complete user journey like checkout, product, catalog, CMS(PageBuilder) pages."
  },{
    "id": 5,
    "company": "Nityo Infotech Services (client - Singpost)",
    "location": "Bangalore",
    "tenure": "April 2019 – July 2021",
    "designation": "Lead UI/UX designer, Magento2 Frontend Developer",
    "shortdesc": "Worked as a lead UI designer & Adobe Commerce Cloud Magento frontend developer. Have led UI design team for the client “Singpost” leading ecommerce company in Singapore and worked as individual contributor for e-commerce Magento2, WordPress and Shopify frontend theme Internal development and customization."
  },{
    "id": 4,
    "company": "Sigma Info Solutions",
    "location": "Bangalore",
    "tenure": "March 2016 - March 2019",
    "designation": "Senior UI/UX Engineer",
    "shortdesc": "Worked as a creative guide for all key projects, contribution towards design and implementation for web-based applications in various domains like bank, health, technology, IT services, lifestyle, ecommerce and CMS applications. Worked on various frontend tools like .Net, e-commerce, Open Source and Cloud Magento e-commerce, WordPress design to build user centered web applications. Collaborated closely with Angular, React and Polymer development teams to support UI theme development and customization."
  },{
    "id": 3,
    "company": "Hardwin Software Solutions Pvt Ltd",
    "location": "Bangalore",
    "tenure": "November 2014 - February 2016",
    "designation": "Senior UI/UX Designer and Web Developer",
    "shortdesc": "Worked as senior UI/UX designer for multiple projects including user and competitive research, wireframing, visual design, branding and various product application designs. Collaboration with Magento, .Net developers to integrate UI design patterns for multiple e-commerce, WordPress websites."
  },{
    "id": 2,
    "company": "Ezone Solutions",
    "location": "Kolkata",
    "tenure": "November 2004 - October 2014",
    "designation": "Senior Web Designer and Web Developer",
    "shortdesc": "Designed various web interfaces for small to medium-sized businesses across the globe. Designed and developed workflows, user interfaces through iteration process collaborated with multiple roles to drive business alignments. Worked with PHP & .Net developers to support in the development process to achieve user friendly interfaces."
  },{
    "id": 1,
    "company": "Vyoma Technologies",
    "location": "Hyderabad",
    "tenure": "December 2003 - October 2004",
    "designation": "Graphic Designer",
    "shortdesc": "Designed company logos, business cards, skyscrapers, web banners, business brochure designs, mockup web templates."
  }
];

export default function ExpList() {
  const listItems = expData.map(exp =>
    <li className="shadow slideUp" key={exp.id}><i className='num bi bi-square'>{exp.id}</i>
      <h3><strong>{exp.company}</strong> <span className="tenure">{exp.location}, {exp.tenure}</span></h3>
      <p><i className="bi bi-record-circle-fill"></i><strong>Designation:</strong> {exp.designation}</p>
      <p><i className="bi bi-record-circle-fill"></i><strong>Roles & Responsibilties:</strong> {exp.shortdesc}</p>
    </li>
  );
  return listItems;
}