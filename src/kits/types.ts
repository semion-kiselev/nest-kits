export enum KitType {
  PLASTIC,
  RESIN
}

export enum ScaleType {
  SMALL = 100,
  MIDDLE = 72,
  LARGE = 35
}

export class KitDto {
  article: string;
  name: string;
  type: KitType;
  scale: ScaleType;
  description: string | null;
  isActive: boolean;
}

export class Kit extends KitDto {
  id: number;
}
