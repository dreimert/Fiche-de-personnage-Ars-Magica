export interface Jsonable {
  toJSON() : Object;
}

export interface FromJSON {
  fromJSON(source: any) : any;
}

let froms = {};

export function registerJsonable(name: string, from: FromJSON) {
  froms[name] = from;
}

export function parse(source: any): any {
  if(source.fromJSON) {
    if(!froms[source.fromJSON]) {
      throw new Error(`from not found: ${source.fromJSON}`);
    }
    return froms[source.fromJSON].fromJSON(source);
  } else {
    return source;
  }
}
