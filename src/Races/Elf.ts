import Race from './Race';

export default class Elf extends Race {
  public _LifePoints:number; 
  private static _count = 0; 

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._LifePoints = 99;
    Elf._count += 1;
  }

  static createdRacesInstances(): number {
    return Elf._count;
  }

  get maxLifePoints(): number {
    return this._LifePoints;
  }
}