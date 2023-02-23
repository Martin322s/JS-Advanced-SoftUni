window.addEventListener('load', solve);

function solve() {

    const model = document.getElementById('model');
    const year = document.getElementById('year');
    const description = document.getElementById('description');
    const price = document.getElementById('price');
    const addBtn = document.getElementById('add');
    const informationTable = document.getElementById('furniture-list');
    const totalPriceElement = document.querySelector('td.total-price');

    addBtn.addEventListener('click', addFurniture);

    function addFurniture(ev) {
        ev.preventDefault();

        if (model.value && description.value && year.value && price.value) {
            if (year.value >= 0 && price.value >= 0) {

                let trElement = document.createElement('tr');
                let tdModel = document.createElement('td');
                let tdYear = document.createElement('td');
                let tdDescription = document.createElement('td');
                let tdPrice = document.createElement('td');
                let tdButtons = document.createElement('td');
                let moreInfoBtn = document.createElement('button');
                let buyBtn = document.createElement('button');
                let trHide = document.createElement('tr');

                tdModel.textContent = model.value;
                tdYear.textContent = `Year: ${year.value}`;
                tdDescription.textContent = `Description: ${description.value}`;
                tdPrice.textContent = Number(price.value).toFixed(2);
                moreInfoBtn.textContent = 'More Info';
                buyBtn.textContent = 'Buy it';

                trElement.classList.add('info');
                moreInfoBtn.classList.add('moreBtn');
                buyBtn.classList.add('buyBtn');
                trHide.classList.add('hide');
                tdDescription.setAttribute('colspan', 3);

                trElement.appendChild(tdModel);
                trElement.appendChild(tdPrice);
                tdButtons.appendChild(moreInfoBtn);
                tdButtons.appendChild(buyBtn);
                trElement.appendChild(tdButtons);
                trHide.appendChild(tdYear);
                trHide.appendChild(tdDescription);

                informationTable.appendChild(trElement);
                informationTable.appendChild(trHide);

                let tempPrice = Number(price.value);
                model.value = '';
                year.value = '';
                description.value = '';
                price.value = '';

                moreInfoBtn.addEventListener('click', moreInfo);

                function moreInfo(ev) {
                    ev.preventDefault();

                    if (moreInfoBtn.textContent === 'More Info') {
                        moreInfoBtn.textContent = 'Less Info';
                        trHide.style.display = 'contents';
                    } else {
                        moreInfoBtn.textContent = 'More Info';
                        trHide.style.display = 'none';
                    }
                }

                buyBtn.addEventListener('click', buyFurniture);

                function buyFurniture(ev) {
                    ev.preventDefault();

                    let currentTotalPrice = Number(totalPriceElement.textContent);
                    let totalPrice = currentTotalPrice + tempPrice;
                    totalPriceElement.textContent = totalPrice.toFixed(2);

                    trElement.remove();
                    trHide.remove();
                }
            }
        }
    }
}