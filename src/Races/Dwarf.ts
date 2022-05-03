import Race from './Race';

export default class Dwarf extends Race {
  private _LifePoints:number; 
  private static _count = 0; 

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._LifePoints = 80;
    Dwarf._count += 1;
  }

  get maxLifePoints(): number {
    return this._LifePoints;
  }

  static createdRacesInstances():number {
    return Dwarf._count;
  }
}