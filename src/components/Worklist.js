export const worksData = [{
  id: 0,
  name: 'Vita4you',
  url: 'https://vita4you.gr',
  image: 'vita4you',
  title: 'Health Care Product Redesign and Customization',
  theme: 'A complete new design integration of a ecommerce application',
  framework: 'Magetno2 UI'
}, {
  id: 1,
  name: 'Bainland',
  url: 'https://bainland.co.uk',
  image: 'bainland',
  title: 'Luxory Lodges Rental Application Customization',
  theme: 'Part of customization, layout corrections and design elements',
  framework: 'Woocommerce'
}, {
  id: 2,
  name: 'Docitt',
  url: 'https://www.docitt.com',
  image: 'docitt',
  title: 'Loan Lending Application Development',
  theme: 'Involved to design and development of application',
  framework: 'Polymer Library'
}, {
  id: 3,
  name: 'Invopak',
  url: 'https://invopak.co.uk',
  image: 'invopak',
  title: 'Manufacturing of Industry Products Development',
  theme: 'Part of customization and development of magento2 modules',
  framework: 'Magento2'
}, {
  id: 4,
  name: 'Hardwinsoftware',
  url: 'https://hardwinsoftware.com',
  image: 'hardwin',
  title: 'IT Services WebDesign and Development',
  theme: 'Designed and developed custom wesite for it services company',
  framework: 'Custom HTML',
}, {
  id: 5,
  name: 'Magnahardwoodfloors',
  url: 'https://magnahardwoodfloors.com',
  image: 'magna',
  title: 'Wood Suppliers Application Design and Development',
  theme: 'Developed a ecommerce web application',
  framework: 'Magetno2 UI'
}, {
  id: 6,
  name: 'Camlab',
  url: 'https://camlab.co.uk',
  image: 'camlab',
  title: 'Hospital Equipments Website Design and Development',
  theme: 'Part of customization and development of magento2 modules',
  framework: 'Magetno2 UI'
}, {
  id: 7,
  name: 'Startupwind',
  url: 'https://www.startupwind.com',
  image: 'startupwind',
  title: 'Small Entrepreneurship Website Development',
  theme: 'Developed custom web application',
  framework: 'Custom PHP'
}, {
  id: 8,
  name: 'Exercise',
  url: 'https://exercise.co.uk',
  image: 'exercise',
  title: 'Healthier Lifestyle, Customization of Magetno2 Theme',
  theme: 'Involved to customise the theme and the modules as per customer needs.',
  framework: 'Magetno2 UI'
}, {
  id: 9,
  name: 'Shop',
  url: 'https://shop.se.com/fr/fr',
  image: 'shopse',
  title: 'A B2B & B2C Seller Commerce Application',
  theme: 'Part of customization of Magento2 theme and modules',
  framework: 'Magetno2 UI'
}, {
  id: 10,
  name: 'Iniala',
  url: 'https://iniala.com',
  image: 'iniala',
  title: 'Hotel Bookings Website Design',
  theme: 'Designed and developed custom web application',
  framework: 'Custom Development'
}, {
  id: 11,
  name: 'RussellHobbs',
  url: 'https://uk.russellhobbs.com',
  image: 'russelhob',
  title: 'Manufacturing of Household Products Development',
  theme: 'Part of customization and development of magento2 modules',
  framework: 'Magetno2 UI'
}, {
  id: 12,
  name: 'ElioBay',
  url: 'https://eliobay.com',
  image: 'eliobay',
  title: 'Solar Energy Custom Web Application Design',
  theme: 'Designed and developed custom web application',
  framework: 'Custom Application'
}, {
  id: 13,
  name: 'PowerToolSpares',
  url: 'https://powertoolspares.com',
  image: 'powertools',
  title: 'Power Tools for Auto Industry Web Application Design',
  theme: 'Designed and developed custom web application',
  framework: 'October CMS'
}, {
  id: 14,
  name: 'Corporatecaresolutions',
  url: 'https://www.corporatecaresolutions.com/',
  image: 'corporatecare',
  title: 'Corporate Students Informative web Application',
  theme: 'Designed and developed Wordpress web application',
  framework: 'Wordpress UI'
}, {
  id: 15,
  name: 'Faye',
  url: 'https://faye.in',
  image: 'faye',
  title: 'Manufacturing of Kids Lifestyle Itesm Website Development',
  theme: 'Designed and development of magento2 theme and modules',
  framework: 'Magetno2 UI'
}, {
  id: 16,
  name: 'Mynpp',
  url: 'https://mynpp.com',
  image: 'mynpp',
  title: 'Purchasing partner application design and integration',
  theme: 'Designing a custom theme of a Wordpress application',
  framework: 'Wordpress UI'
}, {
  id: 17,
  name: 'Tellofy',
  url: 'https://tellofy.com',
  image: 'tellofy',
  title: 'Transforming Business Web Application Development',
  theme: 'Designed and developed custom web application',
  framework: 'Custom Development'
}, {
  id: 18,
  name: 'Surecopy',
  url: 'https://surecopyladner.com',
  image: 'surecopy',
  title: 'Print Medai Custom Web Application Design',
  theme: 'Designed and developed custom web application',
  framework: 'Custom PHP'
}, {
  id: 19,
  name: 'Nlfisher',
  url: 'https://nlfisher.com',
  image: 'nlfisher',
  title: 'Engineering & Supervision Custom Web Application Design',
  theme: 'Designed and developed custom web application',
  framework: 'Custom Development'
}];


export function getImage(work) {
  return (
    'https://peerashaik.github.io/portfolio/images/works/' +
    work.image +
    '.png'
  );
}

export default function List() {
  const listItems = worksData.map(work =>
    
    <div className="item w-full md:w-5/12" key={work.id}>
      <div className="img-wrapper">
          <i className="logo"></i>
          <a href={work.url} target="_blank" rel="noreferrer">
            <img src={getImage(work)} alt={work.name} />
          </a>
      </div>
      <h2 className="text-white mt-10 mb-2 relative">{work.title}</h2>
          <p className="mb-5 text-sm">{work.theme}</p>
          <span className="inline bg-gray-800 text-gray-400">UI Design</span> <span className="inline bg-gray-800 text-gray-400">UI Development</span> <span className="inline bg-gray-800 text-gray-400">{work.framework}</span>
    </div>

  );
  return listItems;
}