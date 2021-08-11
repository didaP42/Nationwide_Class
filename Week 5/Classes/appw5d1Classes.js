// a class is a blueprint for an object
class Person {
    constructor (name, age, eyes, hair, lovesCats = false, lovesDogs) {
      this.legs = 2;
      this.arms = 2;
      this.name = name;
      this.age = age;
      this.eyes = eyes;
      this.hair = hair;
      this.lovesCats = lovesCats;
      this.lovesDogs = lovesDogs || false;
    }
    greet (otherPerson) {
      console.log('hi ' + otherPerson + '!');
    }
    classyGreeting (otherClassyPerson) {
      console.log('Greetings ' + otherClassyPerson.name + '!');
    }
    setHair (hairColor) {
      this.hair = hairColor;
    }
    walk () {
      console.log('I hate when my Segway is in the shop.');
    }
  }
  const me = new Person('Dida', 113, 'green', 'pink', true, true);
  const you = new Person('Matt', 36, 'blue', 'blonde', true);
  
  console.log(me)
  console.log(you)
  me.classyGreeting(you);
  you.classyGreeting(me);
  
  class superHuman extends Person{
      fly(){
          console.log("zoom!")
      }
  }

  let Kal = new superHuman('Kal el', 40, 'Green', 'Black', true)

  console.log(Kal)
  Kal.fly()