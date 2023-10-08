import { Antelope } from "../types/antelope";

export function prepareScatterData(antelopes: Antelope[]) {
  return antelopes.reduce<{ [key: string]: { x: number; y: number }[] }>(
    (res, antelope) => {
      if (res[antelope.continent] === undefined) {
        res[antelope.continent] = [];
      }
      res[antelope.continent].push({ x: antelope.weight, y: antelope.height });
      return res;
    },
    {}
  );
}
