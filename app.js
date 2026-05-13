const restaurants = [
  {
    name: "Sibeliustalo",
    url: "https://www.sibeliustalo.fi/ravintolat/viikon-lounaslista/"
  }
]

const container = document.getElementById("menus")

restaurants.forEach(r => {
  const div = document.createElement("div")

  div.innerHTML = `
    <h2>${r.name}</h2>
    <iframe src="${r.url}" width="100%" height="600"></iframe>
  `

  container.appendChild(div)
})
