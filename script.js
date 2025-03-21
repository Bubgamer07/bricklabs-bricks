async function doTheStuff() {
  const response = await fetch("https://bubgamer07.github.io/bricklabs-bricks/recipes.json")
  if (!response.ok) {
    document.write("Couldn't fetch data :(")
    throw new Error(`Error Code: ${response.status}`)
  } else {
    const data = response.json()
    const table = document.getElementById("table")
    console.log(data)
    for (const recipe of data) {
      const row = document.createElement("tr")
      const cell1 = document.createElement("td")
      cell1.innerText = recipe[0]
      row.appendChild(cell1)
      const cell2 = document.createElement("td")
      cell2.innerText = recipe[1]
      row.appendChild(cell2)
      const cell3 = document.createElement("td")
      cell3.innerText = recipe[2]
      row.appendChild(cell3)
    }
  }
}
doTheStuff()
