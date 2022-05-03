import Race from './Race';

export default class Halfling extends Race {
  public _LifePoints:number;
  private static _count = 0;  

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._LifePoints = 60;
    Halfling._count += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._count;
  }

  get maxLifePoints(): number {
    return this._LifePoints;
  }
}