import { words } from "./Words";

const capitalizeFirstLetter = (text: string): string => {
  const trimText = text.trim();
  return trimText.charAt(0).toUpperCase() + trimText.slice(1);
};

const randomPunctuation = (): string => {
  const rand: number = Math.floor(Math.random() * Math.floor(100));
  const rarity = 5;

  if (rand >= 0 && rand < rarity) {
    return "?";
  } else if (rand > rarity && rand < rarity * 2) {
    return "...";
  } else if (rand > rarity * 2 && rand < rarity * 3) {
    return "!";
  }
  return ".";
};

const randomInteger = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min);

const randomWord = (): string => {
  return words[randomInteger(0, words.length - 1)];
};

export { randomWord, randomInteger, capitalizeFirstLetter, randomPunctuation };
