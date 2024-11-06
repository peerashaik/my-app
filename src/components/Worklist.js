export const worksData = [{
  id: 0,
  name: 'Exercise.co.uk',
  url: 'https://exercise.co.uk',
  image: 'exercise'
}, {
  id: 1,
  name: 'Vita4you.gr',
  url: 'https://vita4you.gr',
  image: 'vita4you'
}, {
  id: 2,
  name: 'Docitt.com',
  url: 'https://www.docitt.com',
  image: 'docitt'
}, {
  id: 3,
  name: 'Invopak.co.uk',
  url: 'https://invopak.co.uk',
  image: 'invopak'
}, {
  id: 4,
  name: 'Hardwinsoftware.co',
  url: 'https://hardwinsoftware.com',
  image: 'hardwin'
}, {
  id: 5,
  name: 'Magnahardwoodfloors.com',
  url: 'https://magnahardwoodfloors.com',
  image: 'magna'
}, {
  id: 6,
  name: 'Camlab.co.uk',
  url: 'https://camlab.co.uk',
  image: 'camlab'
}, {
  id: 7,
  name: 'Startupwind.com',
  url: 'https://www.startupwind.com',
  image: 'startupwind'
}, {
  id: 8,
  name: 'Bainland.co.uk',
  url: 'https://bainland.co.uk',
  image: 'bainland'
}, {
  id: 9,
  name: 'Shop.se',
  url: 'https://shop.se.com/fr/fr',
  image: 'shopse'
}, {
  id: 10,
  name: 'Iniala.com',
  url: 'https://iniala.com',
  image: 'iniala'
}, {
  id: 11,
  name: 'RussellHobbs.com',
  url: 'https://uk.russellhobbs.com',
  image: 'russelhob'
}, {
  id: 12,
  name: 'ElioBay.com',
  url: 'https://eliobay.com',
  image: 'eliobay'
}, {
  id: 13,
  name: 'PowerToolSpares.com',
  url: 'https://powertoolspares.com',
  image: 'powertools'
}];


export function getImage(work) {
  return (
    'https://peerashaik.github.io/ui/images/works/' +
    work.image +
    '.png'
  );
}

export default function List() {
  const listItems = worksData.map(work =>
    
    <div className="item" id={work.id}>
      <div className="img-wrapper">
          <i className="logo"></i>
          <a href={work.url} target="_blank" rel="noreferrer">
            <img src={getImage(work)} alt={work.name} />
          </a>
      </div>
      <h2><a href={work.url} target="_blank" rel="noreferrer">{work.name}</a></h2>
    </div>

  );
  return listItems;
}