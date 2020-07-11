import { randomWord, randomInteger, capitalizeFirstLetter, randomPunctuation } from "./Helper";

class Generator {
  constructor(private minWords: number = 3, private maxWords: number = 10) {}

  public generateWords(quantity: number): string {
    let words = "";
    quantity = Math.abs(quantity);
    if (quantity) {
      for (let index = 0; index < quantity; index++) words = `${randomWord()} ${words}`;
      return capitalizeFirstLetter(words).trim();
    } else return "";
  }

  public generateSentences(quantity: number): string {
    let sentences = "";
    quantity = Math.abs(quantity);
    if (quantity) {
      for (let index = 0; index < quantity; index++)
        sentences = `${this.generateWords(
          randomInteger(this.minWords, this.maxWords)
        )}${randomPunctuation()} ${sentences}`;
      return sentences.trim();
    } else return "";
  }
}

export { Generator };
