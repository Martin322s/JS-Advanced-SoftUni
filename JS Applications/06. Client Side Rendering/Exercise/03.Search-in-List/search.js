import { towns } from './towns.js';

function search() {
   const townsDiv = document.getElementById('towns');
   townsDiv.appendChild(createList(towns));
}

function createList(textArray) {
   let ul = document.createElement('ul');

   textArray.forEach(x => {
      let li = document.createElement('li');
      li.textContent = x;
      ul.appendChild(li);
   });

   return ul;
}

search();