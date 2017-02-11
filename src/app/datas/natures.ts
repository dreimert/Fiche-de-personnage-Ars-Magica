import { NatureType, NatureCategory, NatureValeur, Nature, NatureSpecialite} from '../types/Nature';
import { Competence } from '../types/Competence';
import { Art } from '../types/Art';

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

for(let ntype in data) {
  for(let ncat in data[ntype]) {
    for(let nval in data[ntype][ncat]) {
      if(nval === "majeurOuMineur") {
        for(let name of data[ntype][ncat][nval]) {
          liste.push(new Nature(
            name,
            NatureType[<string>ntype],
            NatureCategory[<string>ncat],
            null
          ));
        }
      } else {
        for(let name of data[ntype][ncat][nval]) {
          if(name.match(/.*\[.*\]/)) {
            liste.push(new NatureSpecialite(
              name,
              NatureType[<string>ntype],
              NatureCategory[<string>ncat],
              NatureValeur[<string>nval]
            ));
          } else {
            liste.push(new Nature(
              name,
              NatureType[<string>ntype],
              NatureCategory[<string>ncat],
              NatureValeur[<string>nval]
            ));
          }
        }
      }
    }
  }
}

const dictionnaire = {};

liste.forEach(function(nature){
  dictionnaire[nature.name] = nature;
});

export const natures : Nature[] = liste;
export const naturesEnum = dictionnaire;
