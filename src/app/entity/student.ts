export class Student {
  constructor(
    public name: string,
    public lastName: string,
    public mail: string,
    public password: string,
    public birthdate: Date,
    public province: string,
    public carrerInterest: string
  ) {}
}