export function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  let delimiter = /[\n,]/;

  if (numbers.startsWith("//")) {
    const delimiterEnd = numbers.indexOf("\n");
    const customDelimiter = numbers.substring(2, delimiterEnd);
    delimiter = new RegExp(escapeRegExp(customDelimiter));
    numbers = numbers.substring(delimiterEnd + 1);
  }

  const nums = numbers
    .split(delimiter)
    .map((num) => Number(num.trim()))
    .filter((num) => !isNaN(num));

  const negatives = nums.filter((num) => num < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return nums.reduce((sum, num) => sum + num, 0);
}

// This ensures the custom delimiters don't break the regular expressions
function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
