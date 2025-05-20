import { Character } from "../interfaces/Character";

export const naur: Character = {
    name: "Narv Naur",
    clase: "Druida",
    race: "Tiefling",
    background: "Vagabundo",
    level: 9,
    caracteristics: [
        { id: 1, value: 10 },
        { id: 2, value: 16 },
        { id: 3, value: 14 },
        { id: 4, value: 10 },
        { id: 5, value: 17 },
        { id: 6, value: 10 }
    ],
    proficencyBonus: 3,
    proficencies: [2, 8, 14, 19, 15],
    armourClass: 21,
    initiativeBonus: 3,
    speed: 30,
    speedType: "walking",
    maxHitPoints: 55,
    goldCoins: 125,
    silverCoins: 130,
    copperCoins: 0,
    magicCaracteristic: "SAB",
    magicAttackBonus: 7,
    magicSaveDC: 15,
    attacks: [
        { name: 'Espada caliente', attackModifier: 1, damageModifier: 0, numberDiceDamage: 1, typeDiceDamage: 8, typeDamage: "slashing" },
        { name: 'Espada caliente (dos manos)', attackModifier: 1, damageModifier: 0, numberDiceDamage: 1, typeDiceDamage: 10, typeDamage: "slashing" },
        { name: 'Baston', attackModifier: 3, damageModifier: 0, numberDiceDamage: 1, typeDiceDamage: 6, typeDamage: "bludgeoning" },
        { name: 'Cimitarra de plata', attackModifier: 7, damageModifier: 3, numberDiceDamage: 1, typeDiceDamage: 6, typeDamage: "piercing", description: ' Dispone de ventaja contra licantropos y diablillos' }
    ],
    magicLevels: [
        {
            name: "Cantrips", slots: 0, spells: [
                { name: 'Guia', damageModifier: 0, numberDiceDamage: 1, typeDiceDamage: 4, typeDamage: "psychic", description: "Tocas una criatura voluntaria. Antes de que el conjuro finalice el objetivo puede lanzar un d4 y agregar el resultado a una prueba de característica que el elija. Puede tirar el dado antes o después de realizar su prueba de característica. El conjuro entonces finaliza." },
                { name: 'Salvajismo primigenio', attackModifier: 7, damageModifier: 0, numberDiceDamage: 2, typeDiceDamage: 10, typeDamage: "acid" },
                { name: 'Controlar llamas', damageModifier: 0 },
                { name: 'Taumaturgia', damageModifier: 0, }
            ]
        },
        {
            name: "Nivel 1", slots: 4, spells: [
                { name: 'Manos ardientes', savingThrow: 15, savingThrowType: 'DEX', damageModifier: 0, numberDiceDamage: 3, typeDiceDamage: 6, typeDamage: "fire" },
                { name: 'Curar heridas', damageModifier: 4, numberDiceDamage: 1, typeDiceDamage: 8, typeDamage: "healing" },
                { name: 'Detectar venenos y enfermedades', damageModifier: 0 },
                { name: 'Proteccion contral el mal y el bien', damageModifier: 0, description: '' },
                { name: 'Hablar con los animales', damageModifier: 0, description: '' },
                { name: 'Ola atronadora', savingThrow: 15, savingThrowType: 'CON', damageModifier: 0, numberDiceDamage: 2, typeDiceDamage: 8, typeDamage: 'thunder', description: '' },
                { name: 'Represion infernal', savingThrow: 15, savingThrowType: 'DEX', damageModifier: 0, numberDiceDamage: 2, typeDiceDamage: 10, typeDamage: 'fire', description: '' }
            ]
        },
        {
            name: "Nivel 2", slots: 3, spells: [
                { name: 'Hoja de fuego', attackModifier: 7, damageModifier: 0, numberDiceDamage: 3, typeDiceDamage: 6, typeDamage: 'fire', description: '' },
                { name: 'Esfera llameante', savingThrow: 15, savingThrowType: 'DEX', damageModifier: 0, numberDiceDamage: 2, typeDiceDamage: 6, typeDamage: 'fire', description: '' },
                { name: 'Espiritu sanador', damageModifier: 0, numberDiceDamage: 1, typeDiceDamage: 6, typeDamage: 'healing', description: '' },
                { name: 'Calentar metal', damageModifier: 0, numberDiceDamage: 2, typeDiceDamage: 8, typeDamage: 'fire', description: '' },
                { name: 'Restablecimiento menor', damageModifier: 0, description: '' },
                { name: 'Rayo de luna', savingThrow: 15, savingThrowType: 'CON', damageModifier: 0, numberDiceDamage: 2, typeDiceDamage: 10, typeDamage: 'radiant', description: '' },
                { name: 'Rayo abrasador', attackModifier: 7, damageModifier: 0, numberDiceDamage: 2, typeDiceDamage: 6, typeDamage: 'fire', description: '' },
                { name: 'Oscuridad', damageModifier: 0, description: '' }
            ]
        },
        {
            name: "Nivel 3", slots: 3, spells: [
                { name: 'Arma elemental', attackModifier: 7, damageModifier: 0, numberDiceDamage: 1, typeDiceDamage: 4, typeDamage: 'fire', description: '' },
                { name: 'Crecimiento vegetal', damageModifier: 0, description: '' },
                { name: 'Revivir', damageModifier: 0, description: '' }
            ]
        },
        {
            name: "Nivel 4", slots: 3, spells: [
                { name: 'Piel petrea', damageModifier: 0, description: '' },
                { name: 'Escudo de fuego', damageModifier: 0, numberDiceDamage: 2, typeDiceDamage: 8, typeDamage: 'fire', description: '' },
                { name: 'Escudo de fuego', damageModifier: 0, numberDiceDamage: 2, typeDiceDamage: 8, typeDamage: 'cold', description: '' },
                { name: 'Aura de vida', damageModifier: 0, description: '' }
            ]
        },
        {
            name: "Nivel 5", slots: 1, spells: [
                { name: 'Curar heridas en masa', damageModifier: 4, numberDiceDamage: 3, typeDiceDamage: 8, typeDamage: 'healing', description: '' },
                { name: 'Golpe flamigeo', savingThrow: 15, savingThrowType: 'DEX', damageModifier: 0, numberDiceDamage: 8, typeDiceDamage: 6, typeDamage: 'fire', description: '' }
            ]
        }
    ],
    feats: [
        { level: 1, type: 'race', name: 'Mejora de caracteristica', description: '+2 SAB, +1 INT' },
        { level: 1, type: 'race', name: "Visión en la Oscuridad", description: "Acostumbrados a los bosques iluminados por el crepúsculo y el cielo nocturno, tienen una visión superior en la oscuridad y la luz tenue. Puedes ver en luz tenue hasta los 60 pies (18 m.) como si fuera a plena luz, y en la oscuridad como si fuera en luz tenue. No puedes distinguir colores en la oscuridad, sólo tonos de gris." },
        { level: 1, type: 'race', name: 'Resistencia infernal', description: 'Posees resistencia al daño por fuego.' },
        { level: 1, type: 'race', name: 'Lineaje infernal: Taumaturgia', description: 'Conoces el truco taumaturgia.' },
        { level: 3, type: 'race', name: 'Lineaje infernal: Represion infernal', quantity: 1, description: 'Puedes conjurar el truco reprensión infernal una vez al día como si fuese un conjuro de nivel 2.' },
        { level: 5, type: 'race', name: 'Lineaje infernal: Oscuridad', quantity: 1, description: 'Puedes también lanzar el conjuro oscuridad una vez al día.' },
        { level: 1, type: 'class', name: 'Druidico', description: 'Conoces el druídico, el idioma secreto de los druidas. Puedes usarlo para hablar o para dejar escritos mensajes ocultos. Tú y otros que conozcan druídico advierten la presencia de mensajes automáticamente. Otros deben tener éxito en una prueba de Sabiduría (Percepción) CD 15 para ver el mensaje, pero no podrán descifrarlo sin magia.' },
        { level: 1, type: 'class', name: 'Lanzamiento de conjuros', description: 'Basándose en la esencia divina de la naturaleza misma, puedes lanzar conjuros para dar a dicha esencia la forma que desees.' },
        { level: 2, type: 'class', name: 'Forma salvaje', quantity: 2, description: 'Puedes utilizar tu acción para asumir mágicamente la forma de una bestia que has visto antes. Puede utilizar esta habilidad dos veces. Recuperas los usos gastados cuando terminas un descanso corto o largo. Tu nivel de druida determina en qué bestias puedes transformarte, como se muestra en la tabla Formas Salvajes.' },
        { level: 3, type: 'class', name: 'Circulo druidico', description: 'Eliges identificarte con un círculo druídico' },
        { level: 3, type: 'subclass', name: 'Invocar espíritu del fuego salvaje', description: '' },
        { level: 4, type: 'class', name: 'Feat: Versado en el fuego', description: '' },
        { level: 6, type: 'subclass', name: 'Circulo druidico: Vinculo mejorado', description: '' },
        { level: 8, type: 'class', name: 'Feat: Conjurador de guerra', description: '' },
    ],
}