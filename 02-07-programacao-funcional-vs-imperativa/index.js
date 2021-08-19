var person = {
  age: 17,
  name: 'Lucas'
}

//função pura
function getRemainingyearsToMajorty (person){
  return 18 - person.age
}

//função impura, gera efeitos colaterais
function increasePersonAge (person) {
  person.age = person.age + 1
}

//método impuro
increasePersonAge(person)

var remainingYears = getRemainingyearsToMajorty(person)
console.log(remainingYears)