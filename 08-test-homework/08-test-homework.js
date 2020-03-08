console.log("SFE homework #8");

// 1. У стдентов должны быть следующие свойства: university, course, fullName, они передаются при создании студента(в конструктор).
// 2. Создайте метод this.getInfo() -> "Студент 1го курса Высшей Школы Мошенничества г.Одесса, Остап Родоманський Бендер", метод возвращает совокупную информацию о курсе, учебном заведении и имени студента.
// 3. Создайте геттер оценок this.marks, который возвращает массив оценок студента [5, 4, 4, 5].
// 4. Создайте сеттер оценок this.marks = 5, который позволяет поставить оценку студенту. После того, как оценка поставлена, геттер должен вернуть массив this.marks -> [5, 4, 4, 5, 5].
// 5. Создайте метод получения среднего балла this.getAverageMark() -> 4.6.
// 6. Создайте метод this.dismiss, который "исключит" студента. После вызова этого метода – ставить студенту оценки и получать их больше нельзя. (Никаких ошибок, просто возвращается всегда null вместо массива оценок).
// 7. Создайте метод this.recover, который позволит восстановить студента.

class Student {
  marks = [5, 4, 4, 5];
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
  }
  getInfo() {
    let studentInfo = `Студент ${this.course} курса, школы программирования ${this.university}, ${this.fullName}.`;
    return studentInfo;
  }
  get getMarks() {
    if (this.marks === null) {
      return null;
    } else {
      let studentMarks = this.marks;
      return studentMarks;
    }
  }
  set setMarks(value) {
    if (this.marks === null) {
      let dismissStudent = value;
      dismissStudent = null;
      return dismissStudent;
    } else {
      let settingMark = this.marks = [...this.marks, value];
      return settingMark;
    }
  }
  getAverageMark() {
    if (this.marks === null) {
      return null;
    } else {
      let studentMarks = this.marks;
      let averageMark = null;
      averageMark = studentMarks.reduce((sum, eachMark) => sum + eachMark) / studentMarks.length;
      averageMark = averageMark.toFixed(1);
      return averageMark;
    }
  }
  dismiss() {
    this.marks = null;
    return `Студент отчислен!`;
  }
  recover() {
    this.marks = [5, 4, 4, 5];
    return `Студент востановлен!`;
  }
}

let student1 = new Student("CURSOR Education", "Front-end", "Stanislav Fedorko");

console.log('getInfo =>', student1.getInfo());
console.log('get marks =>', student1.getMarks);
console.log('set mark 5 =>', student1.setMarks = 5);
console.log('get marks after set =>', student1.getMarks);
console.log('getAverageMark =>', student1.getAverageMark());
console.log('dismiss =>', student1.dismiss());
console.log('-----');
console.log('set mark 1 =>', student1.setMarks = 1);
console.log('get marks after dismiss =>', student1.getMarks);
console.log('getAverageMark dismiss =>', student1.getAverageMark());
console.log('-----');
console.log('recover =>', student1.recover());
console.log('set mark 1 =>', student1.setMarks = 1);
console.log('get marks after dismiss =>', student1.getMarks);
console.log('getAverageMark dismiss =>', student1.getAverageMark());