import { Component } from '@angular/core';

import { PersonnageType, Personnage } from './Personnage';
import { Maison } from './Maison';
import { NatureType, NatureCategory, NatureValeur, Nature} from './Nature';
import { Caracteristique } from './Caracteristique';
import { Xpliable } from './Xpliable';
import { Competence, CompetenceType } from './Competence';
import { Art } from './Art';

let creo = Art.Creo.convertToXpliable();
creo.xp = 20;
console.log(`${creo}`);

let survie = Competence.enum["Survie"].convertToXpliable();
survie.xp = 20;
console.log(`${survie}`);
survie.xp = 5;
console.log(`${survie}`);
survie.xp = 5;
console.log(`${survie}`);

let leDon : Nature = Nature.enum["Le Don"];

let special : Nature = new Nature(
    null,
    NatureCategory.Spéciale,
    NatureValeur.Gratuite,
    null
);

let hermetique : Nature = new Nature(
  null,
  NatureCategory.Hermétique,
  null,
  null
)

console.log(special.include(leDon), special.isPattern());
console.log(hermetique.include(leDon), hermetique.isPattern());
console.log(leDon.isPattern());

export const tests = "test";
