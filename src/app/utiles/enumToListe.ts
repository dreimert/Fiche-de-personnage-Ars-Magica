export const enumToListe = function(myEnum: Object) : string[] {
  return Object.keys(myEnum).map(k => myEnum[k]).filter(v => typeof v === "string") as string[];
};
