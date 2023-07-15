function solve() {

   const button = document.getElementsByTagName("button");
   const textArea = document.getElementsByTagName("textarea")[0];
   let list = {};
   let buttonArray = Array.from(button);

   buttonArray.forEach(button => {
      button.addEventListener("click", (e) => {
         if (e.target.className === "add-product") {
            let currentElement = e.target.parentElement;
            let priceElement = Number(currentElement.nextElementSibling.innerHTML);
            let brandElement = currentElement.previousElementSibling.children[0].innerHTML;

            if (!list[brandElement]) {
               list[brandElement] = 0;
            }

            list[brandElement] += priceElement;
            textArea.innerHTML += `Added ${brandElement} for ${priceElement.toFixed(2)} to the cart.\n`;
         } else {
            let totalPrice = Number(Object.values(list).reduce((acc, b) => acc + b, 0));
            textArea.innerHTML += `You bought ${Object.keys(list).join(', ')} for ${totalPrice.toFixed(2)}`;

            buttonArray.forEach(button => button.disabled = true);
         }
      });
   });
}