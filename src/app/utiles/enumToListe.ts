export const enumToListe = function(myEnum: { [key: string]: string}) : string[] {
  return Object.keys(myEnum).map(k => myEnum[k]).filter(v => typeof v === "string") as string[];
};

export function enumToValuesList <T extends Record<string, string>> (enumType: T): T[keyof T][] {
  return Object.values(enumType) as T[keyof T][]
}