export interface Xpliable {
  xp : number;
  readonly lvl : number;
}

export interface ConvertToXpliable {
  convertToXpliable() : Xpliable;
}

export class XpliableImplemantation implements Xpliable {
  private _xp: number = 0
  private _lvl: number = 0;

  constructor(readonly multiplicateur: number = 1, xp: number = 0) {
    this.xp = xp;
  }

  set xp(xp: number) {
    this._xp = xp;

    this._lvl = 0;
    let nextPalier = 5;

    while(this._xp >= nextPalier) {
      this._lvl += 1;
      nextPalier += (this._lvl + 1) * this.multiplicateur;
    }
  };

  get xp(): number {
    return this._xp;
  }

  get lvl() : number {
    return this._lvl;
  }
}
