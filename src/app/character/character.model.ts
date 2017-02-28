export interface Character {
  $key?: string;
  name: string;
  alignment: string;
  class: string;
  hp: number;
  maxHp: number;
  race: string;
  initiative: number;
}
