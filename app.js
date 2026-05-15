const restaurants = [
  {
    name: "Lokki",
    url: "https://ravintolalokki.fi/"
  },
  {
    name: "Sibeliustalo",
    url: "https://www.sibeliustalo.fi/ravintolat/viikon-lounaslista/"
  },
  {
    name: "Kokka",
    url: "https://bistrokokka.fi/#lounaslista"
  },
  {
    name: "Einstein",
    url: "https://lounasravintolaeinstein.com/lounas/"
  },
  {
    name: "ISKU Center",
    url: "https://www.compass-group.fi/ravintolat-ja-ruokalistat/foodco/kaupungit/lahti/isku-center/"
  } ,,
  {
    name: "Kaarlo",
    url: "https://www.kaarlosocial.fi/lounas"
  }
  {
    name: "Mänty
    url: "https://lounasravintolamanty.fi/lounas/"
  },
  {
    name: "Majakka",
    url: "https://majakkapaviljonki.fi/"
  }
]

const container = document.getElementById("menus")

restaurants.forEach(function(r) {
  const card = document.createElement("div")

  card.style.border = "1px solid black"
  card.style.margin = "10px"
  card.style.padding = "10px"

  const title = document.createElement("h2")
  title.textContent = r.name

  const link = document.createElement("a")
  link.href = r.url
  link.target = "_blank"
  link.textContent = "Avaa lounaslista"

  card.appendChild(title)
  card.appendChild(link)

  container.appendChild(card)
})
