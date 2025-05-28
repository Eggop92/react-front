import { Character } from "../interfaces/Character";

export const harsyn: Character = {
    name: "Harsyn Skye",
    clase: "Mago de la escuela de magia de guerra",
    race: "Gnasi de aire",
    background: "Erudito",
    level: 6,
    imageProfile: '../public/harsyn.jpg',
    caracteristics: [
        { id: 1, value: 10 },
        { id: 2, value: 14 },
        { id: 3, value: 14 },
        { id: 4, value: 18 },
        { id: 5, value: 10 },
        { id: 6, value: 10 }
    ],
    proficencyBonus: 3,
    proficencies: [8, 9, 10, 11, 14, 18],
    armourClass: 12,
    initiativeBonus: 6,
    speed: 35,
    speedType: "walking",
    maxHitPoints: 39,
    goldCoins: 22,
    silverCoins: 0,
    copperCoins: 0,
    magicCaracteristic: "INT",
    magicAttackBonus: 8,
    magicSaveDC: 15,
    attacks: [],
    magicLevels: [
        {
            name: "Cantrips", slots: 0, spells: [
                { name: 'Ráfaga', damageModifier: 0, description: "Arrojas una mota de fuego a una criatura u objeto dentro del alcance. Realiza un ataque de conjuro a distancia contra el objetivo. Con un impacto, el objetivo sufre 1d10 puntos de daño por fuego. Un objeto inflamable impactado por este conjuro se prende si no está siendo sujetado o transportado. El daño de este conjuro se incrementa en 1d10 cuando alcanzas el nivel 5 (2d10), nivel 11 (3d10) y nivel 17 (4d10)." },
                { name: 'Reparar', damageModifier: 0 },
                { name: 'Rayo de escarcha', attackModifier: 8, damageModifier: 0, numberDiceDamage: 2, typeDiceDamage: 8, typeDamage: "cold" },
                { name: 'Prestidigitación', damageModifier: 0, description: '' },
                { name: 'Agarre electrizante', attackModifier: 7, damageModifier: 0, numberDiceDamage: 2, typeDiceDamage: 10, typeDamage: 'lightning', description: '' }
            ]
        },
        {
            name: "Nivel 1", slots: 4, spells: [
                { name: 'Detectar magia', damageModifier: 0 },
                { name: 'Comprender idiomas', damageModifier: 0 },
                { name: 'Alarma', damageModifier: 0, description: '' },
                { name: 'Identificar', damageModifier: 0, description: '' },
                { name: 'Orbe cromático', attackModifier: 8, damageModifier: 0, numberDiceDamage: 3, typeDiceDamage: 8, typeDamage: 'fire', description: '' },
                { name: 'Manos ardientes', savingThrow: 15, savingThrowType: 'DEX', damageModifier: 0, numberDiceDamage: 3, typeDiceDamage: 6, typeDamage: 'fire', description: '' },
                { name: 'Escudo', damageModifier: 0, description: '' },
                { name: 'Absorber elementos', damageModifier: 0, numberDiceDamage: 1, typeDiceDamage: 6, typeDamage: 'fire', description: '' },
                { name: 'Orden imperiosa', savingThrow: 15, savingThrowType: 'WIS', damageModifier: 0, description: '' },
                { name: 'Caída de pluma', damageModifier: 0, description: '' }
            ]
        },
        {
            name: "Nivel 2", slots: 2, spells: [
                { name: 'Burbuja de aire', damageModifier: 0 },
                { name: 'Rayo abrasador', attackModifier: 7, damageModifier: 0, numberDiceDamage: 2, typeDiceDamage: 6, typeDamage: 'fire', description: '' },
                { name: 'Paso brumoso', damageModifier: 0, description: '' },
                { name: 'Estallar', savingThrow: 15, savingThrowType: 'CHA', damageModifier: 0, numberDiceDamage: 3, typeDiceDamage: 8, typeDamage: 'lightning', description: '' }
            ]
        },
        {
            name: "Nivel 3", slots: 2, spells: [
                { name: 'Contrahechizo', damageModifier: 0, description: '' },
                { name: 'Disipar magia', damageModifier: 0, description: '' },
                { name: 'Acelerar', damageModifier: 0, description: '' },
                { name: 'Bola de fuego', savingThrow: 15, savingThrowType: 'DEX', damageModifier: 0, numberDiceDamage: 8, typeDiceDamage: 6, typeDamage: 'fire', description: '' }
            ]
        }
    ],
    feats: [
        { level: 1, type: 'race', name: 'Mejora de caracteristicas', description: '+2 INT, +1 CON' },
        { level: 1, type: 'race', name: 'Aliento interminable', description: 'Puedes aguantar la respiración de forma indefinida mientras no estes incapacitado.' },
        { level: 1, type: 'race', name: 'Mezclarse con el viento: Agarre electrizante', description: 'Sabes agarre electrizante.' },
        { level: 3, type: 'race', name: 'Mezclarse con el viento: Caída de pluma', description: 'Sabes Caída de pluma.' },
        { level: 5, type: 'race', name: 'Mezclarse con el viento: Levitar', description: 'Sabes Levitar.' },
        { level: 1, type: 'race', name: "Visión en la Oscuridad", description: "" },
        { level: 1, type: 'race', name: 'Resistencia a la electricidad', description: '' },
        { level: 1, type: 'background', name: 'Investigador', description: 'Cuando intentas aprender o recordar un fragmento de informacion, si no sabes nada sobre el tema, a menudo si sabes a donde o de quien puedes obtenerlo. Por lo general, esta informacion viene de una biblioteca, scriptorium o universidad, un sabio u otra persona o criatura culta.' },
        { level: 1, type: 'class', name: 'Lanzamientos de conjuros', description: '' },
        { level: 1, type: 'class', name: 'Recuperación arcana', description: 'Una vez por descanso corto o largo, puedes recuperar un espacio de conjuro de nivel 1 o 2. Para ello, debes gastar al menos 1 espacio de conjuro de nivel 1 o 2.' },
        { level: 3, type: 'class', name: 'Tradicion arcana: Magia de guerra', description: '' },
        { level: 3, type: 'subclass', name: 'Magia de guerra: Desviación arcana', description: '' },
        { level: 3, type: 'subclass', name: 'Magia de guerra: Astucia táctica', description: '' },
        { level: 4, type: 'class', name: 'Formula de trucos', description: '' },
        { level: 4, type: 'class', name: 'Feat: Tocado por lo desconocido', description: '' },
        { level: 6, type: 'subclass', name: 'Magia de guerra: Sobrecarga de poder', quantity: 4, description: '' }
    ],
}

/*
{ id: 1, name: 'Fuerza', skills: [
       { id: 1, name: 'Salvación' }, 
       { id: 2, name: 'Atletismo' }], icon: <GiBiceps /> },
{ id: 2, name: 'Destreza', skills: [
       { id: 3, name: 'Salvación' }, 
       { id: 4, name: 'Acrobacias' }, 
       { id: 5, name: 'Sigilo' }, 
       { id: 6, name: 'Juego de manos' }], icon: <GiWalkingBoot /> },
{ id: 3, name: 'Constitución', skills: [
       { id: 7, name: 'Salvación' }], icon: <FaHeartbeat /> },
{ id: 4, name: 'Inteligencia', skills: [
       { id: 8, name: 'Salvación' }, 
       { id: 9, name: 'Arcana' }, 
       { id: 10, name: 'Historia' }, 
       { id: 11, name: 'Investigación' }, 
       { id: 12, name: 'Naturaleza' }, 
       { id: 13, name: 'Religión' }], icon: <GiSpellBook /> },
{ id: 5, name: 'Sabiduría', skills: [
       { id: 14, name: 'Salvación' }, 
       { id: 15, name: 'Percepción' }, 
       { id: 16, name: 'Supervivencia' }, 
       { id: 17, name: 'Medicina' }, 
       { id: 18, name: 'Perspicacia' }, 
       { id: 19, name: 'Trato animal' }], icon: <GiSolidLeaf /> },
{ id: 6, name: 'Carisma', skills: [
       { id: 20, name: 'Salvación' }, 
       { id: 21, name: 'Engañar' }, 
       { id: 22, name: 'Intimidación' }, 
       { id: 23, name: 'Actuación' }, 
       { id: 24, name: 'Persuasión' }], icon: <GiPublicSpeaker /> },
*/