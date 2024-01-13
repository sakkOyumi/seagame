const MEDALS = [
  {
    name: "brunei",
    gold: 2,
    silver: 1,
    bronze: 6
  },
  {
    name: "cambodia",
    gold: 81,
    silver: 74,
    bronze: 127
  },
  {
    name: "indonesia",
    gold: 87,
    silver: 80,
    bronze: 109
  },
  {
    name: "laos",
    gold: 6,
    silver: 22,
    bronze: 60
  },
  {
    name: "malaysia",
    gold: 34,
    silver: 45,
    bronze: 96
  },
  {
    name: "myanmar",
    gold: 21,
    silver: 25,
    bronze: 68
  },
  {
    name: "philipine",
    gold: 58,
    silver: 85,
    bronze: 117
  },
  {
    name: "singapore",
    gold: 51,
    silver: 43,
    bronze: 64
  },
  {
    name: "timor-leste",
    gold: 0,
    silver: 0,
    bronze: 6
  },
  {
    name: "thailand",
    gold: 108,
    silver: 96,
    bronze: 108
  },
  {
    name: "vietnam",
    gold: 136,
    silver: 105,
    bronze: 118
  },

]


function createOptions() {
  console.log("create another country option")
  const select = document.querySelector("#country")
  select.innerHTML = ``

  for (let i = 0; i < MEDALS.length; i++) {
    let currentMedal = MEDALS[i]
    select.innerHTML += `
    <option value="${currentMedal.name}">${currentMedal.name}</option>
    `

    console.log(currentMedal.name)
  }

}

function displayData(country) {
  console.log("display result of", country)
  const select = document.querySelector("#country")
  select.value = country

  let selectedCountry = MEDALS.find((eachCountry) => eachCountry.name == country)
  // console.log(selectedCountry)
  const medalContainer = document.querySelector(".medal-container")
  medalContainer.innerHTML = `
  <img src="./images/${selectedCountry.name}.gif" alt="">
  <div class="medal-wrapper">
    <ion-icon name="medal" class="gold"></ion-icon>
    <h3 class="gold">${selectedCountry.gold}</h3>
    <ion-icon name="medal" class="silver"></ion-icon>
    <h3 class="silver">${selectedCountry.silver}</h3>
    <ion-icon name="medal" class="bronze"></ion-icon>
    <h3 class="bronze">${selectedCountry.bronze}</h3>
    <ion-icon name="podium"></ion-icon>
    <h3 class="bronze">${selectedCountry.gold + selectedCountry.silver + selectedCountry.bronze}</h3>
  </div>
        
  `

}

function displayTable() {
  const tbody = document.querySelector("tbody")
  tbody.innerHTML = ``

  for (let i = 0;i < MEDALS.length; i++) {
    let currentCountry = MEDALS[i]
    tbody.innerHTML += `
    <tr>
      <td>1</td>
      <td>
        <div class="row">
          <img src="./images/${currentCountry.name}.gif" alt="">
          <p>${currentCountry.name}</p>
        </div>
      </td>
      <td>${currentCountry.gold}</td>
      <td>${currentCountry.silver}</td>
      <td>${currentCountry.bronze}</td>
      <td>${currentCountry.gold + currentCountry.silver + currentCountry.bronze}</td>
    </tr>
    `
  }
}


function main() {
  console.log("everything is running from here")
  createOptions()
  displayData("cambodia")

  const select = document.querySelector("#country")
  select.addEventListener("change", (e) => {
    let country = select.value

    displayData(country)
  })

  displayTable()
  

}


main()