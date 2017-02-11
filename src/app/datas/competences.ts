import { Competence, CompetenceType } from '../types/Competence';

let data = {
  [CompetenceType[CompetenceType.Générale]]: [
    "Artisanat (types)",
    "Athlétisme",
    "Attention",
    "Bagarre",
    "Charme",
    "Chasse",
    "Chirurgie",
    "Commandement",
    "Concentration",
    "Connaissance (organisation)",
    "Connaissance des animaux",
    "Connaissance des gens",
    "Connaissance (domaine)",
    "Discrétion",
    "Doigts agiles",
    "Enseignement",
    "Équitation",
    "Étiquette",
    "Intrigue",
    "(Langue)",
    "Marchandage",
    "Musique",
    "Natation",
    "Profession (type)",
    "Ripaille",
    "Survie",
    "Tromperie",
  ],
  [CompetenceType[CompetenceType.Académique]]: [
    "Ars libéraux",
    "Droit civil et canon",
    "Droit commun",
    "(Langue ancienne)",
    "Médecine",
    "Philosophies",
    "Théologie"
  ],
  [CompetenceType[CompetenceType.Mystique]]: [
    "Connaissance de l'occulte",
    "Connaissance de la Féerie",
    "Connaissance de la magie",
    "Connaissance du Divin",
    "Droit hermétique",
    "Finesse",
    "Parma Magica",
    "Pénétration",
    "Théorie de la magie"
  ],
  [CompetenceType[CompetenceType.Martiale]]: [
    "Archerie",
    "Armes à deux mains",
    "Armes à une main",
    "Armes de jet"
  ],
  [CompetenceType[CompetenceType.Surnaturelle]]: [
    "Changeforme",
    "Double vue",
    "Empathie avec les animaux",
    "Hypnotisme",
    "Musique enchanteresse",
    "Perception de la sainteté et de la malignité",
    "Prémonitions",
    "Sens de la nature",
    "Sensibilité à la magie",
    "Sourcier"
  ]
}

let liste = [];

for(let ctype in data) {
  for(let name of data[ctype]) {
    liste.push(new Competence(
      name,
      CompetenceType[<string>ctype]
    ));
  }
}

const dictionnaire = {};

liste.forEach(function(competence){
  dictionnaire[competence.name] = competence;
});

export const competences : Competence[] = liste;
export const competencesEnum = dictionnaire;
