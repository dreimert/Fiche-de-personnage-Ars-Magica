export enum Technique {
  Creo,
  Intelligo,
  Muto,
  Perdo,
  Rego,
}

export enum Forme {
  Animal,
  Aquam,
  Auram,
  Corpus,
  Herbam,
  Ignem,
  Imaginem,
  Mentem,
  Terram,
  Vim,
}

export enum ArtType {
  Technique,
  Forme
}

export enum MaisonName {
  Bjornaer,
  Bonisagus,
  Criamon,
  ExMiscellanea,
  Flambeau,
  Guernicus,
  Jerbiton,
  Mercere,
  Merinita,
  Tremere,
  Tytalus,
  Verditius
};

export enum CompetenceType {
  Générale,
  Académique,
  Mystique,
  Martiale,
  Surnaturelle,
  Sort
}

export enum NatureType {
  Vertus,
  Vis
}

export enum NatureCategory {
  Hermétique,
  Surnaturelle,
  StatutSocial,
  Générale,
  Personnalité,
  Histoire,
  Spéciale
}

// Utiliser des masques pour les enums : 1 << 1
// Permet d'avoir plusieurs type / Category / Valeur en même temps
// Mais il faut modifier le compte des cout des valeurs
export enum NatureValeur {
  Majeure = 3,
  Mineure = 1,
  Gratuite = 0
}

export enum SortPortee {
  Personnel,
  Toucher,
  Regard,
  Voix,
  Vue,
  "Lien mystique"
}

export enum SortDuree {
  Momentane,
  Concentration,
  Diametre,
  Soleil,
  Anneau,
  Lune,
  Annee
}

export enum SortCible {
  Individu,
  Cercle,
  Partie,
  Groupe,
  Piece,
  Structure,
  Zone
}

export enum SortSens {
  Gout,
  Toucher,
  Odorat,
  Ouie,
  Vue
}
