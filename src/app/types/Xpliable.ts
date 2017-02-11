export class Xpliable {
  private _xp: number = 0
  private _niveau: number = 0;
  private _nextPalier: number = 5;

  constructor(private multiplicateur: number = 1) {}

  set xp(xp: number) {
    this._xp = xp;

    this._niveau = 0;
    this._nextPalier = 5;

    while(this._xp >= this._nextPalier) {
      this._niveau += 1;
      this._nextPalier += (this._niveau + 1) * this.multiplicateur;
    }
  };

  get xp(): number {
    return this._xp;
  }

  get niveau() : number {
    return this._niveau;
  }
}
