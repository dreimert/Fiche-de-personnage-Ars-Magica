import {Art} from './Art';
import {Competence} from './Competence';
import {Named} from './Named';
import {Caracteristique} from './Caracteristique';
import {Specifiable, Choices} from './Specifiable';
import {Specificite} from './Specificite';

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

export enum NatureValeur {
  Majeure = 3,
  Mineure = 1,
  Gratuite = 0
}


let data = {
  [NatureType[NatureType.Vertus]]: {
    [NatureCategory[NatureCategory.Spéciale]]: {
      [NatureValeur[NatureValeur.Gratuite]]: [
        "Le Don"
      ]
    },
    [NatureCategory[NatureCategory.Hermétique]]: {
      [NatureValeur[NatureValeur.Majeure]]: [
        "Don de Velours",
        "Expertise magique majeure",
        "Magie de Diedne",
        "Magie de Mercure",
        "Magie élémentaire",
        "Magie formelle flexible",
        "Magie parfaite",
        "Magie spontannée vitalisée",
        "Révélations secondaires",
        "Sang mythique",
      ],
      [NatureValeur[NatureValeur.Mineure]]: [
        "Affinité pour [Art]",
        "Animal de coeur",
        "Bonus aux études",
        "Circonstances spéciales",
        "Effet secondaires",
        "Études libres",
        "Étudiant laborantin adepte",
        "Expertise magique mineure",
        "Forme de prédilection",
        "Génie inventif",
        "Indifférence des animaux",
        "Énigme",
        "Lancement méthodique",
        "Lancement rapide",
        "Magie contrôlée",
        "Magie cyclique (positive)",
        "Magie de Verditius",
        "Magie féerique",
        "Magie persistante",
        "Magie silencieuse",
        "Magie subtile",
        "Maîtrise des sorts",
        "Mémoire magique",
        "Parens compétent",
        "Prestige hermétique",
        "Prudence en sorcellerie",
        "Renforcement vital",
        "Source de vis personnelle",
        "Talent en [Art]",
      ]
    },
    [NatureCategory[NatureCategory.Surnaturelle]]: {
      [NatureValeur[NatureValeur.Majeure]]: [
        "Changeforme",
        "Hypnotisme",
        "Immunité majeure",
        "Imposition des mains majeure",
        "Sang féerique saillant",
      ],
      [NatureValeur[NatureValeur.Mineure]]: [
        "Changepeau",
        "Double vue",
        "Empathie avec les animaux",
        "Immunité mineure",
        "Imposition des mains mineure",
        "Musique enchanteresse",
        "Perception de la sainteté et de la malignité",
        "Prémonitions",
        "Sens de la nature",
        "Sensibilité à la magie",
        "Sourcier",
      ]
    },
    [NatureCategory[NatureCategory.StatutSocial]]: {
      [NatureValeur[NatureValeur.Majeure]]: [
        "Magister in Artibus",
        "Noble propriétaire terrien",
        "Toque Rouge",
      ],
      [NatureValeur[NatureValeur.Mineure]]: [
        "Apprenti raté",
        "Capitaine mercenaire",
        "Chevalier",
        "Clerc",
        "Custos",
        "Gentilhomme / Gente dame",
        "Moine mendiant",
        "Prêtre",
        "Sage",
      ],
      [NatureValeur[NatureValeur.Gratuite]]: [
        "Artisant",
        "Mage hermétique",
        "Marchand",
        "Paysan",
        "Résident d'une alliance",
        "Vagabond",
      ]
    },
    [NatureCategory[NatureCategory.Générale]]: {
      [NatureValeur[NatureValeur.Majeure]]: [
        "Ange gardien",
        "Connaissance du [terrain]",
        "Fantôme protecteur",
        "Foi exaltée",
        "Prophétie de mort",
        "Richesse",
        "Sang de géant",
      ],
      [NatureValeur[NatureValeur.Mineure]]: [
        "Affinité pour [Compétence]",
        "Amour véritable [Pj]",
        "Aptitude magique latente",
        "Bénédiction de Vénus",
        "Bon sens",
        "Caractéristiques supèrieures",
        "Célèbre",
        "Chance",
        "Clarté de pensée",
        "Colosse",
        "Combattant",
        "Confiance en soi",
        "Connaissances mystiques",
        "Constitution solide",
        "Contacts socieux",
        "Convalescence rapide",
        "Créativité foisonnante",
        "Doigté",
        "Éducation bohémienne",
        "Éducation classique",
        "Éducation privilégiée",
        "Endurance",
        "Erreurs profitable en [Compétence]",
        "Étudiant [Dimension]",
        "Étudiant attentif",
        "Exaltation",
        "Excellente [Caractèristique]",
        "Frénésie berserk",
        "Grand voyageur",
        "Indépendance",
        "Indifférence des animaux",
        "Influence temporelle",
        "Intuition",
        "Lecteur perspicace",
        "Ouïe fine",
        "Pédagogue",
        "Protecteur",
        "Prudence pour [Compétence]",
        "Ragots",
        "Réflexes éclair",
        "Regard perçant",
        "Relique",
        "Réserves de force",
        "Sang féerique",
        "Sens de l'équilibre",
        "Talent pour [Compétence]",
        "Verdeur",
        "Vigeur",
        "Vision acérée",
      ]
    },
  },
  [NatureType[NatureType.Vis]]: {
    [NatureCategory[NatureCategory.Hermétique]]: {
      [NatureValeur[NatureValeur.Majeure]]: [
        "Condition nécessaire",
        "Dépendance à la magie",
        "Don tapageur",
        "Enclin au Crépuscule",
        "Études contraintes",
        "Gâchis de vis",
        "Mage non structuré",
        "Magie à portée réduite",
        "Magie chaotique",
        "Magie douloureuse",
        "Magie rigide",
        "Magie spontannée difficile",
        "Magie spontannée faible",
        "Résistance magique faible",
        "Restriction",
        "Rituel de longévité difficile",
        "Technique déficiente",
      ],
      [NatureValeur[NatureValeur.Mineure]]: [
        "Arts incompatibles",
        "Circonstances délétères",
        "Créativité asséchée",
        "Élève sans imagination",
        "Enchantement ardu",
        "Érudition limitée",
        "Faible Parma Magica",
        "Forme déficiente",
        "Haine des animaux",
        "Imprudence en sorcellerie",
        "Lancement lent",
        "Magie biscornue",
        "Magie cyclique (négative)",
        "Magie désorientante",
        "Magie disjointe",
        "Magie émoussée",
        "Magie éphémère",
        "Magie étrange",
        "Magie imprévisible",
        "Magie lâche",
        "Magie maladroite",
        "Magie spontannée difficile",
        "Maître tristement célèbre",
        "Mauvaise magie formelle",
        "Parens incompétent",
        "Rebouteux",
        "Résistance magique limitée",
        "Vulnérable au pouvoir divin",
        "Vulnérable au pouvoir féerique",
        "Vulnérable au pouvoir infernal"
      ]
    },
    [NatureCategory[NatureCategory.Personnalité]]: {
      majeurOuMineur: [
        "Ambition",
        "Arrogance",
        "Avarice",
        "Compassion",
        "Courroux",
        "Détermination",
        "Envie",
        "Fierté",
        "Générosité",
        "Gourmandise",
        "Haine",
        "Ingérence",
        "Luxure",
        "Optimisme",
        "Piété",
      ],
      [NatureValeur[NatureValeur.Mineure]]: [
        "Amour perdu",
        "Chasteté",
        "Commérage",
        "Compulsion",
        "Concentration médiocre",
        "Délicatesse",
        "Dépression",
        "Éducation dans une alliance",
        "Éducation féerique",
        "Éducation solitaire",
        "Humilité",
        "Illusions",
        "Insouciance",
        "Interdit",
        "Mauvaise mémoire",
        "Méjugement",
        "Mission supérieure",
        "Nocturne",
        "Non-combattant",
        "Obéissance",
        "Obsession",
        "Pessismisme",
        "Peur",
        "Point faible",
        "Réclusion",
        "Sens du devoir",
        "Sensibilité",
        "Simple d'esprit",
        "Témérité",
        "Tempérance",
        "Travesti",
        "Voeu"
      ]
    },
    [NatureCategory[NatureCategory.Histoire]]: {
      [NatureValeur[NatureValeur.Majeure]]: [
        "Amour véritable [PNJ]",
        "Brebis galeuse",
        "Ennemis",
        "Erreur sur la personne",
        "Faveurs",
        "Harcelé par une entité surnaturelle",
        "Indiscrétion",
        "Maître ennemi",
        "Malédiction de Venus",
        "Nuissance surnaturelle",
        "Passé diabolique",
        "Querelle",
        "Responsabilité",
        "Serment de fidélité",
        "Sombre secret",
        "Subalternes difficiles",
        "Voeux monastiques",
      ],
      [NatureValeur[NatureValeur.Mineure]]: [
        "Ami féerique",
        "Chantage",
        "Compagnon animal",
        "Compagnon animal magique",
        "Héritier",
        "Liens familiaux étroits",
        "Mentor",
        "Visions",
      ]
    },
    [NatureCategory[NatureCategory.Surnaturelle]]: {
      [NatureValeur[NatureValeur.Majeure]]: [
        "Grande malédiction",
        "Lycanthrope",
        "Vieillissement accéléré",
      ],
      [NatureValeur[NatureValeur.Mineure]]: [
        "Haine des animaux",
        "Petite malédiction",
        "Visions",
      ]
    },
    [NatureCategory[NatureCategory.StatutSocial]]: {
      [NatureValeur[NatureValeur.Majeure]]: [
        "Étranger",
        "Hors-la-loi",
      ],
      [NatureValeur[NatureValeur.Mineure]]: [
        "Chef hors-la-loi",
        "Criminel marqué",
        "Marginal",
      ]
    },
    [NatureCategory[NatureCategory.Générale]]: {
      [NatureValeur[NatureValeur.Majeure]]: [
        "Asthénie",
        "Cécité",
        "Halo magique",
        "Infirmité",
        "Manque de confiance en soi",
        "Mutisme",
        "Nain",
        "Pauvreté",
        "Privé de mains",
        "Surdité",
      ],
      [NatureValeur[NatureValeur.Mineure]]: [
        "Arthrite",
        "Caractèrisques inférieures",
        "Compétences inhibées",
        "Constitution fragile",
        "Défaut de prononciation",
        "Défiguration",
        "Désorientation",
        "Difformité",
        "Dur d'oreille",
        "Éducation sauvage",
        "Haine des animaux",
        "Handicap",
        "Handicap social",
        "Inconpréhensible",
        "Main manquante",
        "Mal des transports",
        "Maladresse",
        "Mauvais étudiant",
        "Obésité",
        "Oeil manquant",
        "Oreille manquante",
        "Petite carrure",
        "Piètre [Caractèristique]",
        "Souillure maléfique",
        "Tremblote",
        "Tristement célébre",
        "Vue basse",
      ]
    },
  }
}

let liste = [];
const dictionnaire = {};

export class Nature implements Named, Specifiable<Nature, Nature | Art | Competence | Caracteristique> {
  public static readonly liste : Nature[] = liste;
  public static readonly enum = dictionnaire;

  private _typeSpeciality: Specificite;
  constructor(
    public readonly type: NatureType = null,
    public readonly category: NatureCategory = null,
    public readonly valeur: NatureValeur = null,
    public readonly name: string = null,
    public readonly speciality: Named | string = null
  ){
    this._typeSpeciality = new Specificite(name, speciality);
  }

  isPattern() {
    return this.type === null || this.category === null || this.valeur === null || !this._typeSpeciality.isSpecified();
  }

  include(other){
    if(this.type !== null && this.type !== other.type) {
      return false;
    }
    if(this.category !== null && this.category !== other.category) {
      return false;
    }
    if(this.valeur !== null && this.valeur !== other.valeur) {
      return false;
    }
    if(this.name !== null && this.name !== other.name) {
      return false;
    }
    if(this._typeSpeciality.isSpecifiable() && this._typeSpeciality.isSpecified() && this._typeSpeciality.name !== other._typeSpeciality.name){
      return false;
    }
    return true;
  }

  exclude(other){
    return !this.include(other);
  }

  isSpecifiable() {
    return this.isPattern();
  }

  isSpecified() {
    return !this.isSpecifiable();
  }

  choices() {
    // if(this.type !== null && this.category !== null && this.valeur === null && this.name !== null) {
    //   return new Choices<Nature | Art | Competence | Caracteristique>([NatureValeur.Majeure, NatureValeur.Mineure]);
    // } else
    if(this.type === null || this.category === null || this.valeur === null || this.name === null) {
      return new Choices<Nature | Art | Competence | Caracteristique>(Nature.liste.filter(this.include, this));
    } else {
      switch (this._typeSpeciality.type) {
          case "art": return new Choices<Nature | Art | Competence | Caracteristique>(Art.liste);
          case "competence": return new Choices<Nature | Art | Competence | Caracteristique>(Competence.liste);
          case "caracteristique": return new Choices<Nature | Art | Competence | Caracteristique>(Caracteristique.liste);
          default: return new Choices<Nature | Art | Competence | Caracteristique>();
      };
    }
  }

  specify(value) {
    if(typeof value === "Nature") {
      return value;
    // } else if(this.type !== null && this.category !== null && this.valeur === null && this.name !== null) {
    //   return new Nature(this.type, this.category, value, this.name, this.speciality);
    } else {
      return new Nature(this.type, this.category, this.valeur, this.name, value);
    }
  }

  toString() {
    return this._typeSpeciality.toString();//`${name} : ${NatureType[this.type]}, ${NatureCategory[this.category]}, ${NatureValeur[this.valeur]}`;
  }

  toJSON() {
    return {
      fromJSON: "Nature",
      type: this.type,
      category: this.category,
      valeur: this.valeur,
      name: this.name,
      speciality: this.speciality
    }
  }
}

for(let ntype in data) {
  for(let ncat in data[ntype]) {
    for(let nval in data[ntype][ncat]) {
      if(nval === "majeurOuMineur") {
        for(let name of data[ntype][ncat][nval]) {
          liste.push(new Nature(
            NatureType[<string>ntype],
            NatureCategory[<string>ncat],
            NatureValeur.Majeure,
            `${name} majeur`,
          ));
          liste.push(new Nature(
            NatureType[<string>ntype],
            NatureCategory[<string>ncat],
            NatureValeur.Mineure,
            `${name} mineur`,
          ));
        }
      } else {
        for(let name of data[ntype][ncat][nval]) {
          liste.push(new Nature(
            NatureType[<string>ntype],
            NatureCategory[<string>ncat],
            NatureValeur[<string>nval],
            name,
          ));
        }
      }
    }
  }
}

liste.sort((a, b) => {
  return a.name.localeCompare(b.name);
});


liste.forEach(function(nature){
  dictionnaire[nature.name] = nature;
});
