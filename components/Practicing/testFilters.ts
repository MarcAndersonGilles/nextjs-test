
const peopleFilter = [
    {
  
        name: 'John',
        age: 25,
        hobbies: ['reading', 'swimming'],
        gender: 'male',
        profession: 'teacher'
    },
    {
        name: 'Jane',
        age: 30,
        hobbies: ['painting', 'dancing'],
        gender: 'female',
        profession: 'engineer'
    },
    {
        name: 'Bob',
        age: 40,
        hobbies: ['hiking', 'cooking'],
        gender: 'male',
        profession: 'doctor'
    },
    {
        name: 'Alice',
        age: 20,
        hobbies: ['singing', 'playing guitar'],
        gender: 'female',
        profession: 'student'
    },
    {
        name: 'Mike',
        age: 35,
        hobbies: ['running', 'playing basketball'],
        gender: 'male',
        profession: 'programmer'
    }
  ];

  peopleFilter.filter((person) => {
    if(person.age < 26)
    return console.log(person)
  })
  
  peopleFilter.filter((person) => {
    if(person.profession != 'programmer' && person.profession != 'student')
    return console.log(person)
  })
  
  peopleFilter.filter((person) => {
    if(person.name.length <= 3 )
    return {
      name : console.log(person),
      test : console.log(person.name.length)
  
  }
  })