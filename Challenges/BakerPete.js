// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

function cakes(recipe, available) {
  let cakes = []
  for (const ingredient in recipe) {
    if (available[ingredient]) {
      cakes.push(Math.floor(available[ingredient] / recipe[ingredient]))
    } else {
      return 0
    }
  }
  return Math.min(...cakes)
}


console.log(cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5 }))
