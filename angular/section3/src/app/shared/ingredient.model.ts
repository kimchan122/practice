export class Ingredient {
  // public name: string;
  // public amount: number;
  // constructor에 접근자(public, private...)추가해서, 주석부분 생략해서 간략화 가능
  constructor(public name: string, public amount: number) {
    // this.name = name;
    // this.amount = amount;
  }
}
