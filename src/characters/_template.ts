import { Character } from "../interfaces/Character";

export const clerigo: Character = {
    name: "Pepe Chulo",
    clase: "Clerigo",
    race: "Humano",
    background: "Noble",
    level: 3,
    caracteristics: [
        { id: 1, value: 15 },
        { id: 2, value: 13 },
        { id: 3, value: 10 },
        { id: 4, value: 10 },
        { id: 5, value: 17 },
        { id: 6, value: 8 }
    ],
    proficencyBonus: 2,
    proficencies: [1, 2, 3],
    armourClass: 15,
    initiativeBonus: 2,
    speed: 30,
    speedType: "walking",
    maxHitPoints: 30,
    goldCoins: 30,
    silverCoins: 10,
    copperCoins: 0,
    magicCaracteristic: "SAB",
    magicAttackBonus: 6,
    magicSaveDC: 15,
    attacks: [
        { name: 'Hacha', attackModifier: 3, damageModifier: 1, numberDiceDamage: 1, typeDiceDamage: 12, typeDamage: "slashing" },
        { name: 'Mandoble', attackModifier: 5, damageModifier: 2, numberDiceDamage: 2, typeDiceDamage: 6, typeDamage: "slashing" },
        { name: 'Daga', attackModifier: 1, damageModifier: -1, numberDiceDamage: 1, typeDiceDamage: 4, typeDamage: "piercing" }
    ],
    magicLevels: [
        {
            name: "Cantrips", slots: 0, spells: [
                { name: 'Saeta de fuego', attackModifier: 6, damageModifier: 0, numberDiceDamage: 1, typeDiceDamage: 10, typeDamage: "fire", description: "Arrojas una mota de fuego a una criatura u objeto dentro del alcance. Realiza un ataque de conjuro a distancia contra el objetivo. Con un impacto, el objetivo sufre 1d10 puntos de daño por fuego. Un objeto inflamable impactado por este conjuro se prende si no está siendo sujetado o transportado. El daño de este conjuro se incrementa en 1d10 cuando alcanzas el nivel 5 (2d10), nivel 11 (3d10) y nivel 17 (4d10)." },
                { name: 'Bola de fuego', attackModifier: 6, damageModifier: 0, numberDiceDamage: 8, typeDiceDamage: 6, typeDamage: "fire" },
                { name: 'Bola de fuego', savingThrow: 15, savingThrowType: 'DEX', damageModifier: 0, numberDiceDamage: 8, typeDiceDamage: 6, typeDamage: "fire" }
            ]
        },
        {
            name: "Nivel 1", slots: 3, spells: [
                { name: 'Bola de fuego', attackModifier: 6, damageModifier: 0, numberDiceDamage: 8, typeDiceDamage: 6, typeDamage: "fire" }
            ]
        },
        {
            name: "Nivel 2", slots: 2, spells: [
                { name: 'Bola de fuego', attackModifier: 6, damageModifier: 0, numberDiceDamage: 8, typeDiceDamage: 6, typeDamage: "fire" }
            ]
        },
    ],
    feats: [
        { level: 1, type: 'class', name: 'Lanzamiento de Conjuros', description: 'Como conductor de poder divino, eres capaz de lanzar conjuros de clérigo.' },
        { level: 1, type: 'class', name: 'Dominio Divino', description: '' },
        { level: 2, type: 'class', name: 'Canalizar Divinidad: Expulsar Muertos Vivientes', description: 'Como una acción, muestras tu símbolo sagrado y entonas una plegaria negando a los muertos vivientes. Cada muerto viviente que pueda verte u oírte en un radio de 30 pies (9 metros) debe realizar una tirada de salvación de Sabiduría. Si la criatura falla la tirada de salvación, se encuentra expulsada durante 1 minuto o hasta que reciba cualquier daño. Una criatura expulsada debe emplear sus turnos intentando moverse tan lejos de ti como sea capaz, y no puede acercarse voluntariamente a una distancia de 30 pies (9 metros) de ti. Tampoco puede realizar reacciones. Como acción, solo puede usar la acción de Carrera o intentar escapar de un efecto que le impida moverse. Si no hay ningún lugar para moverse, la criatura puede usar la acción de Esquivar.' },
        { level: 1, type: 'background', name: 'Rasgo: Vagabundo', description: 'Tienes una excelente memoria para los mapas y la geografía y siempre puedes recordar la disposición general del terreno, los asentamientos y otras circunstancias de entorno que te rodea. Además, puedes encontrar comida y agua fresca para ti y para otras cinco personas cada día, siempre y cuando la tierra tenga bayas, algo de caza menor, agua y cosas por el estilo.' },
        { level: 1, type: 'race', name: 'Sentidos Agudos', description: 'Eres competente con la habilidad de Percepción.' },
        { level: 1, name: "Visión en la Oscuridad", description: "Acostumbrados a los bosques iluminados por el crepúsculo y el cielo nocturno, tienen una visión superior en la oscuridad y la luz tenue. Puedes ver en luz tenue hasta los 60 pies (18 m.) como si fuera a plena luz, y en la oscuridad como si fuera en luz tenue. No puedes distinguir colores en la oscuridad, sólo tonos de gris.", type: 'race' }
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