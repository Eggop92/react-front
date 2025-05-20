export interface Feat {
    name: string;
    quantity?: number;
    description?: string;
    type: 'race' | 'class' | 'subclass' | 'background' | 'general';
    level: number;
}