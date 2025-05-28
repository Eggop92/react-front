import { Attack } from "./Attack";
import { Caracteristic } from "./Caracteristic";
import { Feat } from "./Feat";
import { MagicLevel } from "./MagicLevel";

export interface Character {
    attacks: Attack[];
    magicLevels: MagicLevel[];
    feats: Feat[];
    name: string;
    clase: string;
    race: string;
    background: string;
    level: number;
    caracteristics: Caracteristic[]
    proficencyBonus: number;
    proficencies: number[];
    armourClass: number;
    initiativeBonus: number;
    speed: number;
    speedType: "walking" | "flying" | "swimming";
    maxHitPoints: number;
    goldCoins: number;
    silverCoins: number;
    copperCoins: number;
    magicCaracteristic: string;
    magicAttackBonus: number;
    magicSaveDC: number;
    imageProfile?: string;
}