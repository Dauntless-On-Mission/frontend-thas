//----------------------------------------THA-9------------------------------

//Call(), bind(), Apply()

//Call()

const player1 = {
    name: 'Virat',
    age: 34,
    };
    
    const player2 = {
      name: 'Sachin',
      age: 41,
    };
    
    function greetingDis(lang) {
        console.log(`Hi! My name is ${this.name} and I'm ${this.age} years old and i speak ${lang}`);
    }
    
    greetingDis.call(player1);
    greetingDis.call(player2);
    
    //bind() 
    
    const a = greetingDis.bind(player1);
    a();
    
    const b = greetingDis.bind(player2);
    b();
    
    // apply()
    
    greetingDis.apply(player1,['English']);
    greetingDis.apply(player2,['Japanese']);
    