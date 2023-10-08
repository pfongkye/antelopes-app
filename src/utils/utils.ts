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

export function prepareDoughnutData(antelopes: Antelope[]) {
  return antelopes.reduce<{ [key: string]: number }>((res, antelope) => {
    if (res[antelope.horns] === undefined) {
      res[antelope.horns] = 1;
    } else {
      res[antelope.horns] += 1;
    }
    return res;
  }, {});
}

export function getRandomColor(alpha: number = 1) {
  return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  }, ${alpha})`;
}
