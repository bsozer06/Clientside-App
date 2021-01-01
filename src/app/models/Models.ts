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
  Id: number;
  Name: string;
  Job: string;
  Gender: string;
  Age: number;
  constructor(id: number, name: string, gender: string, age: number) {
    this.Id = id;
    this.Name = name;
    this.Gender = gender;
    this.Age = age;
  }
}

export class Field {
  //Geom: any;
  Id: number;
  IsActive: boolean;
  Name: string;
  NeighId: number;
  PersonId: string;
  CityId: number;
  Wkt: string;
  constructor(id: number, isActive:boolean, name: string, neighId: number, personId: string, cityId: number, wkt: string) {
    this.Id = id;
    this.IsActive = isActive;
    this.Name = name;
    this.NeighId = neighId;
    this.PersonId = personId;
    this.CityId = cityId;
    this.Wkt = wkt;
  }
}
