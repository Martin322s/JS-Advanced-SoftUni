function search() {

   const input = document.getElementById('searchText').value;
   const liItems = document.querySelectorAll('#towns li');
   const resultElement = document.getElementById('result');
   let count = 0;

   for (const town of liItems) {
      if (input !== '' && town.textContent.includes(input)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         count++;
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }

   resultElement.textContent = `${count} matches found`;
}
