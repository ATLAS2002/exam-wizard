import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function breakWords(sentence: string, lines: number): string {
  const words = sentence.split(" ");
  const length = sentence.length;

  let finalString = "";
  let currentLength = 0;
  const charEachLine = length / lines;

  words.forEach((word) => {
    const newLength = currentLength + word.length + 1;
    if (
      Math.abs(charEachLine - newLength) <=
      Math.abs(charEachLine - currentLength)
    ) {
      finalString += " " + word;
      currentLength = newLength;
    } else {
      finalString += "\n" + word;
      currentLength = word.length;
    }
  });

  return finalString;
}

const defaultOptions = {
  limit: 3,
  separator: "",
  startFrom: 0,
};

export function getInitials(
  word: string,
  options?: Partial<typeof defaultOptions>,
): string {
  const { limit, separator, startFrom } = { ...defaultOptions, ...options };
  return word
    .trim()
    .split(" ")
    .map((part) => part[0]?.toUpperCase())
    .join(separator)
    .slice(startFrom + separator.length, limit + 2 * separator.length);
}

export * from "./util.adapter";
