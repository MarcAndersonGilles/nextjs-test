const people = [
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

  for (let person of people) {
    if (person.name === "John") {
      console.log(person.hobbies)
    }
  }

  for(let i = 0; i < people.length; i++){
    if(people[i].name.includes("Alice")){
      console.log(people[i].age)
    } 
  }

  for( let person of people){
    const hobbies = ["painting", "dancing"]
    if (
      
      hobbies.every((hobby) => person.hobbies.includes(hobby)) &&
      person.gender === "female"
    ) {
      console.log(person);
      console.log("test");
    }
    
    }