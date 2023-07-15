function solve() {
  let generateBtn = document.querySelector("#exercise > button:nth-child(3)")
  generateBtn.addEventListener('click', addElementToTable)

  let textArea = document.querySelector("#exercise > textarea:nth-child(5)")
  let buyBtn = document.querySelector("#exercise > button:nth-child(6)")
  buyBtn.addEventListener('click', generateOutput)

  let tableBody = document.querySelector("#exercise > div > div > div > div > table > tbody")

  let buyedItems = []
  let totalPrice = 0
  let decFactor = 0
  let totalItems = 0

  function generateOutput() {
    for (let tableRow = 1; tableRow <= tableBody.rows.length; tableRow++) {
      let currCheckBox = document.querySelector(`#exercise > div > div > div > div > table > tbody > tr:nth-child(${tableRow}) > td:nth-child(5) > input[type=checkbox]`)

      if (currCheckBox.checked === true) {
        let currItemName = currCheckBox.parentElement.parentElement.cells[1].innerText
        let currPrice = +currCheckBox.parentElement.parentElement.cells[2].innerText
        let currDecFactor = +currCheckBox.parentElement.parentElement.cells[3].innerText

        buyedItems.push(currItemName)
        totalPrice += currPrice
        decFactor += currDecFactor
        totalItems++
      }

      let avrDecFactor = decFactor / totalItems

      textArea.value = `Bought furniture: ${buyedItems.join(', ')}\n`
      textArea.value += `Total price: ${totalPrice.toFixed(2)}\n`
      textArea.value += `Average decoration factor: ${avrDecFactor}`
    }
  }

  function addElementToTable() {
    let textArea = document.querySelector("#exercise > textarea:nth-child(2)")
    let currObj = JSON.parse(textArea.value)

    for (const furniture of currObj) {
      let tableRow = document.createElement('tr')

      let image = document.createElement('td')
      let imgTag = document.createElement('img')
      imgTag.src = furniture.img
      image.appendChild(imgTag)

      let nameTag = document.createElement('td')
      let nameValue = document.createElement('p')
      nameValue.innerText = furniture.name
      nameTag.appendChild(nameValue)

      let priceTag = document.createElement('td')
      let priceValue = document.createElement('p')
      priceValue.innerText = furniture.price
      priceTag.appendChild(priceValue)

      let decFactorTag = document.createElement('td')
      let decFactorValue = document.createElement('p')
      decFactorValue.innerText = furniture.decFactor
      decFactorTag.appendChild(decFactorValue)

      let checkBoxTag = document.createElement('td')
      let checkBox = document.createElement('input')
      checkBox.type = 'checkbox'
      checkBoxTag.appendChild(checkBox)

      tableRow.appendChild(image)
      tableRow.appendChild(nameTag)
      tableRow.appendChild(priceTag)
      tableRow.appendChild(decFactorTag)
      tableRow.appendChild(checkBoxTag)

      tableBody.appendChild(tableRow)
    }
    textArea.value = ''
  }
}