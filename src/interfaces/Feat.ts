export interface Feat {
    name: string;
    quantity?: number;
    description?: string;
    type: 'race' | 'class' | 'background' | 'general';
    level: number;
}