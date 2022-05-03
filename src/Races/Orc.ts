import Race from './Race';

export default class Orc extends Race {
  public _LifePoints:number; 
  private static _count = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._LifePoints = 74;
    Orc._count += 1;
  }

  static createdRacesInstances(): number {
    return Orc._count;
  }

  get maxLifePoints(): number {
    return this._LifePoints;
  }
}