
export type Position = 'GK' | 'DF' | 'MF' | 'FW';

export interface PlayerStats {
  [key: string]: string | number;
}

export interface Player {
  type: Position;
  pos: string;
  pos_ko: string;
  name: string;
  number: string;
  career: string;
  stats: PlayerStats;
  image?: string;
}

export interface Coach {
  name: string;
  pos: string;
  career: string;
  role: string;
}

export interface News {
  date: string;
  title: string;
}

export enum SectionType {
  SQUAD = 'squad',
  COACH = 'coach',
  CLUB = 'club',
  NEWS = 'news',
  MAP = 'map'
}
