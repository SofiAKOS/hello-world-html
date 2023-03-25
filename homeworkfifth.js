//1
class Circle {
    constructor(x, y, radius) {
        this.x = x; 
        this.y = y;
        this.radius = radius; 
      }
      getLength() {
        const length = 2 * Math.PI * this.radius;
        return length;
      }
      static getLengthByRadius(radius) {
        const length = 2 * Math.PI * radius;
        return length;
      }
      getCopy() {
        const copy = new Circle(this.x, this.y, this.radius);
        return copy;
      }
      static create(x, y, radius) {
        const circle = new Circle(x, y, radius);
        return circle;
      }
      containsPoint(x, y) {
        const distanceFromCenter = Math.sqrt((this.x - x) ** 2 + (this.y - y) ** 2);
        return distanceFromCenter <= this.radius;
      }
      
      toString() {
        return `Circle: x = ${this.x}, y = ${this.y}, radius = ${this.radius}`;
      }
    }
//2
function propsCount(currentObject) {
    return Object.keys(currentObject).length;
  }
//3
class Person {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
  
    showFullName() {
      console.log(`${this.name} ${this.surname}`);
    }
  }
  
  class Student extends Person {
    constructor(name, surname, year) {
      super(name, surname);
      this.year = year;
    }
  
    showFullName(middleName) {
      console.log(`${this.surname} ${this.name} ${middleName}`);
    }
  
    showCourse() {
      const currentYear = new Date().getFullYear();
      const course = currentYear - this.year + 1;
      console.log(`Current course: ${course}`);
    }
  }
  
  const student = new Student('John', 'Doe', 2019);
  student.showFullName('William'); 
  student.showCourse(); 

  //part 2 
  //4
  

  //5
  class Worker {
    constructor(fullName, dayRate, workingDays) {
      this.fullName = fullName;
      this.dayRate = dayRate;
      this.workingDays = workingDays;
      this._experience = 1.2;
    }
  
    get experience() {
      return this._experience;
    }
  
    set experience(value) {
      this._experience = value;
    }
    showSalary() {
        const salary = this.dayRate * this.workingDays;
        console.log(`${this.fullName} salary: ${salary}`);
        return salary;
      }
      showSalaryWithExperience() {
        const salary = this.dayRate * this.workingDays * this._experience;
        console.log(`${this.fullName} salary: ${salary}`);
        return salary;
      }
    }
const worker1 = new Worker("John Doe", 100, 20);
const worker2 = new Worker("Jane Doe", 80, 15);
const worker3 = new Worker("Bob Smith", 120, 25);

worker1.showSalary();
worker2.showSalary();
worker3.showSalary();

const workers = [worker1, worker2, worker3];

workers.sort((a, b) => a.experience - b.experience);
workers.forEach((worker) => {
  console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`);
});

function sortWorkers(workers, key, direction) {
    workers.sort((a, b) => {
      if (direction === "desc") {
        return b[key] - a[key];
      }
      return a[key] - b[key];
    });
  
    workers.forEach((worker) => {
      console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`);
    });
  }
  sortWorkers(workers, "showSalaryWithExperience", "desc");
  sortWorkers(workers, "workingDays", "asc");
