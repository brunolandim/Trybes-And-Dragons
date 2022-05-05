import Figther from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(private _player:Figther, private _player2:Figther) {
    super(_player);
  }

  override fight(): number {
    if (this._player.lifePoints !== -1 && this._player2.lifePoints !== -1) {
      this._player.attack(this._player2);
      this._player2.attack(this._player);
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}
