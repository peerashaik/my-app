import { useState } from 'react';

const animals = ['bird', 'cat', 'dog', 'fish', 'rabit', 'turtle', 'snake'];

function showAnimals() {
	const result = animals[Math.floor(Math.random() * animals.length)];
	return document.getElementById("demo").innerHTML = result;
}

export const AnimalShow = () => {
  return (
    <>
    <button className='btn btn-primary' onClick={showAnimals}>Show Animal</button>
    <div id="demo"></div>
    </>
  );
}

export default AnimalShow;