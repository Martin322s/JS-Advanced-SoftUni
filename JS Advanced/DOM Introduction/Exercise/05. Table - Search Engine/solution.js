function solve() {

   const searchButton = document.querySelector('#searchBtn');
   searchButton.addEventListener('click', onClick);
   let input = document.getElementById('searchField');
   let rows = document.querySelectorAll('tbody tr');

   function onClick() {

      for (let row of rows) {
         row.classList.remove('select');
         if (input.value !== '' && row.innerHTML.includes(input.value)) {
            row.className = 'select';
         }
      }
      input.value = '';
   }
}