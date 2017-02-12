import { Component } from '@angular/core';

import { PersonnageType, Personnage } from './Personnage';
import { Maison } from './Maison';
import { NatureType, NatureCategory, NatureValeur, Nature} from './Nature';
import { Caracteristique } from './Caracteristique';
import { Xpliable } from './Xpliable';
import { Competence, CompetenceType } from './Competence';
import { Art } from './Art';

let creo = new Art(Art.Perdo);
creo.xp = 20;
console.log(`${creo}`);

let survie = new Competence("Survie", CompetenceType.Générale);
survie.xp = 20;
console.log(`${survie}`);
survie.xp = 5;
console.log(`${survie}`);
survie.xp = 5;
console.log(`${survie}`);

let leDon : Nature = new Nature(
    "Le Don",
    NatureType.Vertus,
    NatureCategory.Spéciale,
    NatureValeur.Gratuite
);

let special : Nature = new Nature(
    null,
    null,
    NatureCategory.Spéciale,
    NatureValeur.Gratuite
);

let hermetique : Nature = new Nature(
  null,
  null,
  NatureCategory.Hermétique,
  null
)

console.log(special.include(leDon), special.isPattern());
console.log(hermetique.include(leDon), hermetique.isPattern());
console.log(leDon.isPattern());
