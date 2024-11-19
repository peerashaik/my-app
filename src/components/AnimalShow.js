import { useState } from 'react';

function randomanimal() {
	const animals = ['bird', 'cat', 'dog', 'fish', 'rabit', 'turtle', 'snake'];
	return animals[Math.floor(Math.random() * animals.length)];
}

export const AnimalShow = () => {
	const [animals, setAnimals] = useState([]);

	function showAnimals() {
		setAnimals([...animals, randomanimal()]);
	}
  return (
    <>
    <button className='btn btn-primary' onClick={showAnimals}>Show Animal</button>
    <div>{animals}</div>
    </>
  );
}

export default AnimalShow;