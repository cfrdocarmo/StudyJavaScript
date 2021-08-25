type Person = {
  name: string,
  age: number,
  contacts?: string[],
  isAlive: boolean
}

const person: Person = {
  age:22,
  name: 'Lucas',
  isAlive: true,
  contacts: [
    'cfrdocarmo@gmail.com'
  ]
}

const person2: Person = {
  name: 'Joao',
  isAlive: true,
  age: 18,
  contacts: ['teste@teste.com']
}