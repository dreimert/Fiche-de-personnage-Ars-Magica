import { Nature } from './Nature';
import { Caracteristique } from './Caracteristique';
import { Art, ArtXpliable } from './Art';
import { Competence, CompetenceXpliable } from './Competence';
import { Maison } from './Maison';
import { Sort } from './Sort';
import { parse } from './Jsonable';

export enum PersonnageType {
    Mage,
    Compagnon,
    Servant
}

export class Personnage {
  name: string;
  concept: string;
  type: PersonnageType;
  maison: Maison;
  natures: Nature[];
  caracterisques: Caracteristique[];
  competences: CompetenceXpliable[];
  arts: ArtXpliable[];
  sorts: Sort[];
  notes: string;
}

export function parseJsonPersonnage(json : string): Personnage {
  return JSON.parse(json, (key, value) => {
    if(value === null) {
      return value;
    } else {
      return parse(value);
    }
  });
}

export let Mure : Personnage = {
  name: "Mûre",
  concept: "Demi-fée à l'apparence de 15 ans spécialisé dans la manipulation des plantes et de la magie",
  type: PersonnageType.Mage,
  maison: Maison.Merinita,
  natures: [
    Nature.enum["Magie de Diedne"],
    Nature.enum["Sang féerique saillant"],
    Nature.enum["Magie féerique"],
    Nature.enum["Double vue"],
    Nature.enum["Verdeur"],
    Nature.enum["Affinité pour [Art]"].specify(Art.Rego),
    Nature.enum["Talent en [Art]"].specify(Art.Rego),
    Nature.enum["Expertise magique mineure"], // : Maintient de sorts
    Nature.enum["Le Don"],
    Nature.enum["Mage hermétique"],
    Nature.enum["Sombre secret"],
    Nature.enum["Technique déficiente"], //  : Perdo
    Nature.enum["Optimisme majeur"],
    Nature.enum["Ami féerique"],
    Nature.enum["Visions" ],
    Nature.enum["Petite carrure"],
    Nature.enum["Magie étrange"]
  ],
  caracterisques: [
    new Caracteristique("Intelligence", 3),
    new Caracteristique("Perception", 2),
    new Caracteristique("Force", -3),
    new Caracteristique("Énergie", 2),
    new Caracteristique("Présence", 2),
    new Caracteristique("Communication", 1),
    new Caracteristique("Dextérité", 0),
    new Caracteristique("Vivacité", -2),
  ],
  // competences: Competence.liste.map((comp) => comp.convertToXpliable())
  competences: [
    Competence.enum["Double vue"].convertToXpliable().setLabel("Gratuit", 5).setLabel("Vie postérieure", 10),
    Competence.enum["Connaissance de la Féerie"].convertToXpliable().setLabel("Vie postérieure", 15),
    Competence.enum["[Langue]"].specify("Français").convertToXpliable().setLabel("Petite enfance", 75),
    Competence.enum["Attention"].convertToXpliable().setLabel("Petite enfance", 5),
    Competence.enum["Charme"].convertToXpliable().setLabel("Petite enfance", 5),
    Competence.enum["Connaissance des gens"].convertToXpliable().setLabel("Petite enfance", 5),
    Competence.enum["Connaissance [domaine]"].specify("Forêt des pins blancs").convertToXpliable().setLabel("Petite enfance", 5),
    Competence.enum["Discrétion"].convertToXpliable().setLabel("Petite enfance", 5),
    Competence.enum["Survie"].convertToXpliable().setLabel("Petite enfance", 15),
    Competence.enum["Natation"].convertToXpliable().setLabel("Petite enfance", 5),

    Competence.enum["Étiquette"].convertToXpliable().setLabel("Vie postérieure", 5),
    Competence.enum["Intrigue"].convertToXpliable().setLabel("Vie postérieure", 5),
    Competence.enum["Chasse"].convertToXpliable().setLabel("Vie postérieure", 5),
    Competence.enum["Concentration"].convertToXpliable().setLabel("Vie postérieure", 15).setLabel("Apprentissage", 15),
    Competence.enum["Profession [type]"].specify("Garde forestier").convertToXpliable().setLabel("Vie postérieure", 5),

    Competence.enum["Ars libéraux"].convertToXpliable().setLabel("Apprentissage", 5),
    Competence.enum["Droit hermétique"].convertToXpliable().setLabel("Apprentissage", 5),
    Competence.enum["[Langue ancienne]"].specify("Latin").convertToXpliable().setLabel("Apprentissage", 50),
    Competence.enum["Théorie de la magie"].convertToXpliable().setLabel("Apprentissage", 30),
    Competence.enum["Parma Magica"].convertToXpliable().setLabel("Apprentissage", 5),
    Competence.enum["Pénétration"].convertToXpliable().setLabel("Apprentissage", 5),
    Competence.enum["Finesse"].convertToXpliable().setLabel("Apprentissage", 5),
  ],
  arts: [//Art.liste.map(art => art.convertToXpliable())
    Art.Creo.convertToXpliable().setLabel("Apprentissage", 3),
    Art.Intelligo.convertToXpliable().setLabel("Apprentissage", 3),
    Art.Muto.convertToXpliable().setLabel("Apprentissage", 3),
    Art.Perdo.convertToXpliable().setLabel("Apprentissage", 1),
    Art.Rego.convertToXpliable().setLabel("Apprentissage", 30),

    Art.Animal.convertToXpliable().setLabel("Apprentissage", 3),
    Art.Aquam.convertToXpliable().setLabel("Apprentissage", 3),
    Art.Auram.convertToXpliable().setLabel("Apprentissage", 3),
    Art.Corpus.convertToXpliable().setLabel("Apprentissage", 3),
    Art.Herbam.convertToXpliable().setLabel("Apprentissage", 28),
    Art.Ignem.convertToXpliable().setLabel("Apprentissage", 3),
    Art.Imaginem.convertToXpliable().setLabel("Apprentissage", 3),
    Art.Mentem.convertToXpliable().setLabel("Apprentissage", 3),
    Art.Terram.convertToXpliable().setLabel("Apprentissage", 3),
    Art.Vim.convertToXpliable().setLabel("Apprentissage", 28),
  ],
  sorts: [],
  notes: `
    Mûre est la fille de Maureen la gérisseuse / sorcière du village des pins blanc et de Tan Ket Tyr prince de la forêt des pins blancs. Elle est le fruit d'un pacte de non-agression / protection passé entre la Féerie et le village. Dès sa naisssance, sa mère l'emmène aux diffèrentes rituels pour honorer le pacte et invitations dans la cours Féerique que les fées font.

    Peu apprécié par les autres enfants, elle passe beaucoup de temps dans la forêt et rencontre de nombreuses fées, des agents de son père la surveillant ou des fées intriguées par cette humaine qui les comprends.

    Un jour, une bande de brigants attaque le village et endommage la forêt. En accord avec le pacte et aussi par vengeance, les fées massacrent les brigants. Mais il y a eu un survivant qui raconta son histoire attirant l'attention de l'Ordre d'Hermes. Les mages découvrirent Mûre, donnairent un simple avertissement aux fées et partir avec elle pour la former.

    Elle fut formé par un Merinita, seul capable d'ouvrir ses pouvoirs malgré sa nature féerique. Durant toute la formation, son père pris réculièrement des nouvelles et passa même plusieurs fois.
  `
};
