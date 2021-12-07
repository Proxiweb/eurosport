export interface Player {
    firstname: string;
    lastname: string;
    shortname: string;
    sex: string;
    country: {
      picture: {
        url: string;
      }
      code: string;
    };
    picture: {
      url: string;
    }
    stats: {
      rank: number;
      points: number;
      age: number;
      weight: number;
      height: number;
      last: boolean[];
    };
}

export type Players = Player[];

interface Head2Head {
  headToHead: Players
}

export default Head2Head;
