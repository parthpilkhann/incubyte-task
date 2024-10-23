export function add(numbers: string): number {
  if (!numbers) return 0;

  const delimiterRegex = /\/\/(.+)\n/;
  let delimiter = ",";
  let numberString = numbers;

  const customDelimiterMatch = numbers.match(delimiterRegex);
  if (customDelimiterMatch) {
    delimiter = customDelimiterMatch[1];
    numberString = numbers.split("\n")[1];
  }

  const sanitizedNumbers = numberString.replace(/\n/g, delimiter);
  const numberArray = sanitizedNumbers
    .split(delimiter)
    .map((num) => parseInt(num, 10));

  const negativeNumbers = numberArray.filter((num) => num < 0);
  if (negativeNumbers.length) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(", ")}`
    );
  }

  return numberArray.reduce((sum, num) => sum + num, 0);
}
