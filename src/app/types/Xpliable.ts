export interface XpliableLabel {
  xp: number;
  name: string;
}

export interface Xpliable {
  readonly xp: number;
  readonly lvl: number;
  readonly labels: XpliableLabel[];
  getLabel(name: string): number | undefined;
  setLabel(name: string, xp: number): Xpliable;
  removeLabel(name: string): boolean;
}

export interface ConvertToXpliable {
  convertToXpliable() : Xpliable;
}

export class XpliableImplemantation implements Xpliable {
  private _xp: number = 0
  private _lvl: number = 0;

  constructor(readonly multiplicateur: number = 1, readonly labels: XpliableLabel[] = []) {
    this.updateXpAndLvl();
  }

  findLabel(name: string) {
    return this.labels.find((label) => label.name === name);
  }

  getLabel(name: string) {
    let find = this.findLabel(name);

    if(find) {
      return find.xp;
    } else {
      return;
    }
  }

  setLabel(name: string, xp : number) {
    let find = this.findLabel(name);

    if(find) {
      find.xp = xp;
    } else {
      this.labels.push({
        name,
        xp
      });
    }

    this.updateXpAndLvl();
    return this;
  }

  removeLabel(name: string) {
    let find = this.findLabel(name);
    if(find) {
      let index = this.labels.indexOf(find);
      this.labels.splice(index, 1);
      this.updateXpAndLvl();
      return true;
    } else {
      return false;
    }
  }

  updateXpAndLvl() {
    this._xp = this.labels.reduce(((acc, label) => acc + label.xp), 0);;

    this._lvl = 0;
    let nextPalier = this.multiplicateur;

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
