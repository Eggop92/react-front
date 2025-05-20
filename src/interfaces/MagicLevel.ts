import { Attack } from "./Attack";

export interface MagicLevel {
    name: string;
    slots: number;
    spells: Attack[];
}