let age: number;
age = 12;

let userName: string;
userName = "CC";

let isInstructor: boolean;
isInstructor = true;

//More complex types

let hobbies: string[];
hobbies = ["Sports", "Cooking"];

let person: { name: string; age: number };

person = {
  name: "CC",
  age: 26,
};

let people: {
  name: string;
  age: number;
}[];

// Type inference

let course = "React-The Complete Guide";
// 타입 추론이 가능하므로, 명시적으로 표시해야 하는 것이 아닌 이상 모든 것에 타입 정의해놓는 방법은 지양.
// course = 12341;

// Union

let lecture: string | number = "React-The Complete Guide"; // 두개 이상 타입 설정 가능
let personName: string | string[];

lecture = 12341;

// 유형 별칭 지정(type alias)

type Person = {
  name: string;
  age: number;
  //Javascript에 없음
};

let a_Person: Person;
let b_person: { name: string; age: number };

// Functions & Types

function add(a: number, b: number): number /** 반환값 */ | string {
  return a + b;
}

function print(value: any): void /**반환하지 않는 함수 */ {
  console.log(value);
}

// Generics

function insertAtBegginning<T>(array: T[], value: T) {
  // <> 안에 함수서만 사용되는 타입 정의(보통 T 라고 적음), 이렇게 해서 첫번째 인수의 배열의 유형과, 두번째 인수의 유형이 동일함을 TypeScript에 알림.
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBegginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBegginning(["a", "b", "c"], "d");
// updatedArray[0].split('');

// Class & TypeScript

class Student {
  // firstName: string;
  // lastName: string;
  // age: number;
  // private courses: string[];

  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    private courses: string[]
  ) {
    // 위쪽 주석처럼 타입 정의하고 해도 되지만, 이것처럼 축약형으로 사용 가능.
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.courses = courses;
  }

  enrol(courseName: string) {
    // function 키워드가 없음.
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses.slice();
  }
}

const student = new Student("CC", "KK", 26, ["Angular"]);
student.enrol("React"); // [Angular, React]

// Interfaces

interface Human {
  firstName: string;
  age: number;

  greet: () => void; // 화살표 함수, 반환값이 없는 함수.
}

let koko: Human;
koko = {
  firstName: "koko",
  age: 26,
  greet() {
    console.log("Hello!");
  },
};

class Instructor implements Human {
  firstName: string;
  age: number;
  greet() {
    console.log("HELLLLLLLOOOO");
  }
}
