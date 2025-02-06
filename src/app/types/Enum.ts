export enum Technique {
  Creo = "Creo",
  Intelligo = "Intelligo",
  Muto = "Muto",
  Perdo = "Perdo",
  Rego = "Rego",
}

export enum Forme {
  Animal = "Animal",
  Aquam = "Aquam",
  Auram = "Auram",
  Corpus = "Corpus",
  Herbam = "Herbam",
  Ignem = "Ignem",
  Imaginem = "Imaginem",
  Mentem = "Mentem",
  Terram = "Terram",
  Vim = "Vim",
}

export enum ArtType {
  Technique = "Technique",
  Forme = "Forme",
}

export enum MaisonName {
  Bjornaer = "Bjornaer",
  Bonisagus = "Bonisagus",
  Criamon = "Criamon",
  ExMiscellanea = "Ex Miscellanea",
  Flambeau = "Flambeau",
  Guernicus = "Guernicus",
  Jerbiton = "Jerbiton",
  Mercere = "Mercere",
  Merinita = "Merinita",
  Tremere = "Tremere",
  Tytalus = "Tytalus",
  Verditius = "Verditius",
};

export enum CompetenceType {
  Générale = "Générale",
  Académique = "Académique",
  Mystique = "Mystique",
  Martiale = "Martiale",
  Surnaturelle = "Surnaturelle",
  Sort = "Sort",
}

export enum NatureType {
  Vertus = "Vertus",
  Vis = "Vis",
}

export enum NatureCategory {
  Hermétique = "Hermétique",
  Surnaturelle = "Surnaturelle",
  StatutSocial = "Statut social",
  Générale = "Générale",
  Personnalité = "Personnalité",
  Histoire = "Histoire",
  Spéciale = "Spéciale",
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
  Personnel = "Personnel",
  Toucher = "Toucher",
  Regard = "Regard",
  Voix = "Voix",
  Vue = "Vue",
  LienMystique = "Lien mystique",
}

export enum SortDuree {
  Momentane = "Momentané",
  Concentration = "Concentration",
  Diametre = "Diamètre",
  Soleil = "Soleil",
  Anneau = "Anneau",
  Lune = "Lune",
  Annee = "Année",
}

export enum SortCible {
  Individu = "Individu",
  Cercle = "Cercle",
  Partie = "Partie",
  Groupe = "Groupe",
  Piece = "Pièce",
  Structure = "Structure",
  Zone = "Zone",
}

export enum SortSens {
  Gout = "Goût",
  Toucher = "Toucher",
  Odorat = "Odorat",
  Ouie = "Ouïe",
  Vue = "Vue",
}
