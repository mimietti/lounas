alert("v2")
  const restaurants = [
  {
    name: "Ravintola Lokki",
    url: "https://ravintolalokki.fi/"
  },
  {
    name: "Sibeliustalo",
    url: "https://www.sibeliustalo.fi/ravintolat/viikon-lounaslista/"
  },
  {
    name: "Einstein",
    url: "https://lounasravintolaeinstein.com/lounas/"
  },
  {
    name: "ISKU Center M19",
    url: https://www.compass-group.fi/ravintolat-ja-ruokalistat/foodco/kaupungit/lahti/isku-center/"
  }
]

const container = document.getElementById("menus")

restaurants.forEach(r => {
  const card = document.createElement("div")

  card.className = "card"

  card.innerHTML = `
    <h2>${r.name}</h2>
    <a href="${r.url}" target="_blank">
      Avaa lounaslista
    </a>
  `

  container.appendChild(card)
})
