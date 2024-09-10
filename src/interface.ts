export interface Ability {
    ability: {
      name: string; // Đổi tên thành name để phản ánh đúng
    };
}
  
export interface Pokemon {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
}
  
export interface PokemonDetail extends Pokemon {
    abilities?: Ability[]; // Sử dụng kiểu Ability[]
}