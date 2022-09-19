

export interface HeroInfo {

  appearance?: {
    gender?: string;
    race?: string;
    height?: string [];
    weight?: string [];
    'eye-color'?: string;
  };
  biography?: {
    "full-name"?: string;
    "alter-egos"?: string;
    "aliases"?: string [];
    "place-of-birth"?: string;
    "first-appearance"?: string;
    "publisher"?: string;
    "alignment"?: string;
  };
  connections?: {};
  id?: string;
  image?: {url:string};
  name?: string;
  "powerstats"?: any;
    // combat: string;
    // intelligence: string;
    // strength: string;
    // speed: string;
    // durability: string;
    // power: string;};
  work?: {};
}
