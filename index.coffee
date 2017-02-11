# Choix du concept

typePersonnage = [                  #Mage
  "Mage",
  "Compagnon",
  "Servant"
]

# if Mage, une partie 12
maisons = [
  name: "Bjornaer"
  avantage: [
    vertus: "Animal de coeur"
    competence: "Animal de coeur"
    niveau: 1
  ]
,
  name: "Bonisagus"
  avantage: [
    vertus: "Talent"
    speciality: "Théorie de la magie"
  ,
    vertus: "Talent"
    speciality: "Intrigue"
  ]
,
  name: "Criamon"
  avantage: [
    vertus: "Énigme"
    competence: "Sagesse énigmatique"
    niveau: 1
  ]
,
  name: "ExMiscellanea"
  avantage: ["""
    vertus mineur hermétique +
    vertus majeur non-hermétique +
    vis majeur hermétique
  """]
,
  name: "Flambeau"
  avantage: [
    vertus: "Talent"
    speciality: "Perdo"
  ,
    vertus: "Talent"
    speciality: "Ignem"
  ]
,
  name: "Guernicus"
  avantage: [
    vertus: "Prestige hermétique"
  ]
,
  name: "Jerbiton"
  avantage: [
    "Vertus mineure lié à l'hérudition, aux arts ou aux intéractions vulgaire"
  ]
,
  name: "Mercere"
  avantage: [
    vertus: "Talent"
    speciality: "Creo"
  ,
    vertus: "Talent"
    speciality: "Muto"
  ]
,
  name: "Merinita"
  avantage: [
    vertus: "Magie féerique"
    requis: "Un vis ou une vertus lié a la Féerie"
  ]
,
  name: "Tremere"
  avantage: [
    vertus: "Expertise magique mineure"
  ]
,
  name: "Tytalus"
  avantage: [
    vertus: "Confiance en soi"
  ]
,
  name: "Verditius"
  avantage: [
    vertus: "Magie de Verditius"
  ]
]

# 1 point de vis pour 1 de verstus
# Mage max 10 points, min 1 vis majeur
# Compagnon max 10
# Servant max 3 que des mineurs
vertus = [

]

vis = [

]

# Achat de caracts

# Petite enfance

# Vie postérieure

# Mage : apprentissage

# Mage : années après apprentissage

# Personnalité

# Réputation

# Compagnon et Mage : confiance

# Équipement

personnage = {}

setConcept = (concept) ->
  personnage.concept = concept

setType = (type) ->
  personnage.type = type

setMaison = (maison) ->
  personnage.maison = maison




mage =
  concept: "Demi-fée manipulant des pantins végétales"
  type: "Mage"
  maison: "Merinita"
  vertus: [
    "Le Don"                                         # 0 # 0
    "Magie féerique"                                 # 0 # 0
    "Magie de Diedne"                                # 3 # 3
    "Sang féerique saillant"                         # 3 # 6
    # Vieillissement 50 ans et -3,
    # Double vue
    # Avantage de l'ascendant : +1 énergie et sang vert ?
    "Double vue"                                     # 0 # 6
    "Verdeur"                                        # 1 # 7
    "Affinité pour Rego"                             # 1 # 8
    "Talent pour Rego"                               # 1 # 9
    "Expertise magique mineur : Maintient de sorts"  # 1 # 10
  ]
  vis: [
    "Sombre secret"          # 0 # 0
    "Technique déficiente : Perdo"   # 3 # 3
    "Optimiste"              # 3 # 6
    "Ami féerique"           # 1 # 7
    "Visions"                # 1 # 8 ?
    "Petite carrure"         # 1 # 9
    "Magie étrange"          # 1 # 10
  ]
  caracterisques: {
    Intelligence: 3
    Perception: 2
    Force: -3
    Énergie: 2 + 1
    Présence: 2
    Communication: 1
    Dextérité: 0
    Vivacité: -2
  }
  competences: {
    "Double vue": 1 + 1             # gratuit # 10 | 10
    "Connaissance de la Féerie": 0 + 1  # gratuit # 5 | 15
    "Langue natale": 5              # gratuit
    "Athlétisme":  0
    "Attention": 1                  # 5  | 5
    "Bagarre": 0
    "Charme": 0
    "Connaissance des gens": 1      # 5  | 10
    "Tromperie": 0
    "Langue vivante [langue]": 0
    "Connaissance [région]": 0
    "Connaissance forêt féerique": 1# 5  | 15
    "Discrétion": 2                 # 15 | 30
    "Survie": 2                     # 15 | 45
    "Natation": 0
    # Fin petite enfance
    "Concentration": 2 + 1     # 15 | 30 # 15 | 15
    "Connaissance plantes": 2  # 15 | 45
    # Apprentissage à 8 ans
    "Ars libéraux": 1          # 5 | 20
    "Latin": 4                 # 50 | 70
    "Théorie de la magie": 3   # 30 | 100
    "Parma Magica": 1          # 5  | 105
    "Pénétration": 1           # 5  | 110
    "Finesse": 1               # 5  | 115
    "Profession : Jardinier": 1# 5  | 120
  }
  ars: { # 119 xp + 1 au choix
    Creo: 2      # 3 | 3
    Intelligo: 2 # 3 | 6
    Muto: 2      # 3 | 9
    Perdo: 0     # Déficient
    Rego: 9 + 3  # xp * 1.5 # Talent # 30 | 39

    Animal: 2    # 3 | 42
    Aquam: 2     # 3 | 45
    Auram: 2     # 3 | 48
    Corpus: 2    # 3 | 51
    Herbam: 7    # 28 | 79
    Ignem: 2     # 3 | 82
    Imaginem: 2  # 3 | 85
    Mentem: 2    # 3 | 88
    Terram: 2    # 3 | 91
    Vim: 7       # 28 | 119
  }
  sorts: { # 120 points # technique + forme + 9
    "Maintien du sort épuisant : lune - 25": # Max 12 + 7 * 2 + 9 = 35
      Portée: "toucher"
      Durée: "lune"
      Cible: "Individu"
      Puissance: 35
      Effet: "Maintient un sort de niveau 25 ou moins"
    "Maintien du sort épuisant : jour - 20": # Max 12 + 7 * 2 + 9 = 35
      Portée: "toucher"
      Durée: "jour"
      Cible: "Individu"
      Puissance: 25
      Effet: "Maintient un sort de niveau 20 ou moins"
    "Serviteur sylvestre": # Max 12 + 7 + 9 = 28
      Portée: "toucher"
      Durée: "concentration"
      Cible: "Individu"
      Puissance: 20
      Effet: """
        Anime une plante qui obéit aux ordres du lanceur.
        Elle est intelligente.
        Elle peut se déplacer librement.
      """
    # "Grand serviteur sylvestre":
    #   Portée: "toucher"
    #   Durée: "concentration"
    #   Cible: "Individu"
    #   Modificateur: "+2 Taille"
    #   Puissance: 30
    #   Effet: """
    #     Anime une plante qui obéit aux ordres du lanceur.
    #     Elle est intelligente.
    #     Elle peut se déplacer librement.
    #   """
    "Protection contre le feu et la chaleur": # Max 12 + 2 + 9 = 23
      Portée: "toucher"
      Durée: "concentration"
      Cible: "Individu"
      Modificateur: "+2 pour les dégats à +15"
      Puissance: 20
      Effet: """
        Protége la cible contre le feu et la chaleur.
        +15 encaissement contre le feu.
      """
    "Maniment de la fronde invisible": # Max 12 + 2 + 9 = 23
      Portée: "Toucher"
      Durée: "Moment"
      Cible: "Individu"
      Puissance: 5
      Effet: """
        Projette violament un object.
      """
    "Maniment de l'arc invisible": # Max 12 + 7 + 9 = 28
      Portée: "Voix"
      Durée: "Moment"
      Cible: "Individu"
      Puissance: 5
      Effet: """
        Projette violament un object en bois.
      """
    "Appel de Morphée": # Max 12 + 2 + 9 = 23
      Portée: "Contact visuel"
      Durée: "Moment"
      Cible: "Individu"
      Puissance: 5
      Effet: """
        Endort la cible.
      """
    "Tas de terre": # Max 2 + 2 + 9 = 13
      Portée: "Voix"
      Durée: "Jour"
      Cible: "Individu"
      Puissance: 5
      Effet: """
        Crée un tas de terre.
      """
  }
