export const worksData = [{
  id: 0,
  name: 'Exercise',
  url: 'https://exercise.co.uk',
  image: 'exercise'
}, {
  id: 1,
  name: 'Vita4you',
  url: 'https://vita4you.gr',
  image: 'vita4you'
}, {
  id: 2,
  name: 'Docitt',
  url: 'https://www.docitt.com',
  image: 'docitt'
}, {
  id: 3,
  name: 'Invopak',
  url: 'https://invopak.co.uk',
  image: 'invopak'
}, {
  id: 4,
  name: 'Hardwinsoftware',
  url: 'https://hardwinsoftware.com',
  image: 'hardwin'
}, {
  id: 5,
  name: 'Magnahardwoodfloors',
  url: 'https://magnahardwoodfloors.com',
  image: 'magna'
}, {
  id: 6,
  name: 'Camlab',
  url: 'https://camlab.co.uk',
  image: 'camlab'
}, {
  id: 7,
  name: 'Startupwind',
  url: 'https://www.startupwind.com',
  image: 'startupwind'
}, {
  id: 8,
  name: 'Bainland',
  url: 'https://bainland.co.uk',
  image: 'bainland'
}, {
  id: 9,
  name: 'Shop',
  url: 'https://shop.se.com/fr/fr',
  image: 'shopse'
}, {
  id: 10,
  name: 'Iniala',
  url: 'https://iniala.com',
  image: 'iniala'
}, {
  id: 11,
  name: 'RussellHobbs',
  url: 'https://uk.russellhobbs.com',
  image: 'russelhob'
}, {
  id: 12,
  name: 'ElioBay',
  url: 'https://eliobay.com',
  image: 'eliobay'
}, {
  id: 13,
  name: 'PowerToolSpares',
  url: 'https://powertoolspares.com',
  image: 'powertools'
}, {
  id: 14,
  name: 'Corporatecaresolutions',
  url: 'https://www.corporatecaresolutions.com/',
  image: 'corporatecare'
}, {
  id: 15,
  name: 'Faye',
  url: 'https://faye.in',
  image: 'faye'
}, {
  id: 16,
  name: 'PowerToolSpares.com',
  url: 'https://powertoolspares.com',
  image: 'powertools'
}, {
  id: 17,
  name: 'Mynpp',
  url: 'https://mynpp.co',
  image: 'mynpp'
}, {
  id: 18,
  name: 'Nlfisher',
  url: 'https://nlfisher.com',
  image: 'nlfisher'
}, {
  id: 19,
  name: 'Surecopy',
  url: 'https://surecopyladner.com',
  image: 'surecopy'
}, {
  id: 20,
  name: 'Tellofy',
  url: 'https://tellofy.com',
  image: 'tellofy'
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
      <h2 className="my-10 relative"><a href={work.url} target="_blank" rel="noreferrer">{work.name}</a></h2>
    </div>

  );
  return listItems;
}