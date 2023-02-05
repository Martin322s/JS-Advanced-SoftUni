function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {

      let array = JSON.parse(document.querySelector('#inputs textarea').value);
      let objWinner = findBestResturant(array);
      document.querySelector('#bestResturant>p').textContent = getMsgRest(objWinner);
      document.querySelector('#workers>p').textContent = getMsgEmp(objWinner.workers);
   }

   function getMsgRest(objWinner) {
      return `Name: ${objWinner.name} Average Salary: ${objWinner.avgSalary.toFixed(2)} Best Salary: ${objWinner.maxSalary.toFixed(2)}`;

   }

   function getMsgEmp(workers) {
      return workers.map(w => `Name: ${w.worker} With Salary: ${w.salary}`).join(' ');
   }

   function findBestResturant(array) {
      let resultResturants = array.reduce((acc, e) => {
         let [resturant, ...workers] = e.split(/(?: - )|(?:, )/g);
         workers = workers.map(w => {
            let [worker, salary] = w.split(' ');
            return {
               worker: worker,
               salary: +salary
            };
         });
         let foundResturant = acc.find(e => resturant.name === resturant);
         if (foundResturant) {
            foundResturant.workers = foundResturant.workers.concat(workers);
         } else {
            acc.push({
               name: resturant,
               workers: workers
            });
         }
         return acc;
      }, []);

      resultResturants.forEach((el, idx) => {
         el.inputOrder = idx;
         el.avgSalary = el.workers.reduce((acc, el) => acc + el.salary, 0) / el.workers.length;
         el.maxSalary = Math.max(...el.workers.map(w => w.salary));
      });

      resultResturants.sort((a, b) => b.avgSalary = a.avgSalary || a.inputOrder - b.inputOrder);
      let bestResturant = resultResturants[0];
      bestResturant.workers.sort((a, b) => b.salary - a.salary);

      return bestResturant;
   }
}