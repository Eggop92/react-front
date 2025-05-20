export interface Attack {
    name: string;
    attackModifier?: number;
    damageModifier: number;
    numberDiceDamage?: number;
    typeDiceDamage?: 4 | 6 | 8 | 10 | 12 | 20;
    typeDamage?: 'slashing' | 'piercing' | 'bludgeoning' | 'fire' | 'cold' | 'lightning' | 'thunder' | 'poison' | 'necrotic' | 'radiant' | 'psychic' | 'force' | 'acid' | 'healing';
    savingThrow?: number;
    savingThrowType?: 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';
    description?: string;
}