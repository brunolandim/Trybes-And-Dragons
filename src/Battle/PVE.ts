import Figther, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(player:Figther, private _monsters:SimpleFighter[]) {
    super(player);
  }

  mosntersAlive() {
    const alive = this._monsters.every((m):boolean => m.lifePoints > 0);
    return alive;
  }
  
  override fight(): number {
    if (this.player.lifePoints > 0 && this.mosntersAlive()) {
      this._monsters.forEach((m) => {
        this.player.attack(m);
        m.attack(this.player);
      });
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}