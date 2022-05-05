import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface Figther extends SimpleFighter{
  lifePoints:number;
  strength:number;
  defense :number;
  energy?:Energy;

  attack(enemy:Figther | SimpleFighter):void
  special(enemy:Figther):void 
  levelUp():void 
  receiveDamage(attackPoints:number):void 
} 