// Backend'de olsuturulan entity'ler burada model olarak olusturulu !!!!
export class People {
  people: Array<Person>;
  constructor() { }
}

export class Fields {
  fields: Array<Field>;
  constructor() { }
}

export class Person {
  id: number;
  name: string;
  job: string;
  gender: string;
  age: number;
  fieldId: number;
  constructor(id: number, name: string, gender: string, age: number, fieldId: number) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.fieldId = fieldId;
  }
}

export class Field {
  geom: any;
  id: number;
  name: string;
  isActive: boolean;
  neighId: number;
  person?: any;
  personId: number;
  cityId: number;
  createdTime: Date;
  wkt: string;
  age: number;
  constructor(id: number, name: string,  neighId: number,
    person:any, isActive:boolean, personId: number, cityId: number, createdTime: Date,
    wkt: string, age: number) {
    this.id = id;
    this.name = name;
    this.neighId = neighId;
    this.person = person;
    this.isActive = isActive;
    this.personId = personId;
    this.cityId = cityId;
    this.wkt = wkt;
    this.age = age;
  }
}
