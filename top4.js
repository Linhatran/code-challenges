function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last,
  }
  this.age = age,
  this.gender = gender,
  this.interests = interests,
  this.bio = function bio() {
    let pronounce = (this.gender === 'male') ? "He":"She";
    let things = '';
    
    if (this.interests.length === 1) {
      return things += this.interests[0] + '.';
    } else if (this.interests.length === 2) {
      return things += `${this.interests[0]} and ${this.interests[1]}.` 
    } else {
      for (let i = 0; i < this.interests.length; i++) {
       if (i === (this.interests.length - 1)) { 
          things += `and ${this.interests[i]}.`
       } else {
          things += `${this.interests[i]}, `}
       }
    }
    console.log(things)
    console.log(`${this.name.first} ${this.name.last} is ${this.age} years old. ${pronounce} likes ${things}`)
  }
}
const person1= new Person('Linh', 'Tran', 23, 'female', ['music', 'skiing', 'photography'])
person1.bio()
