export function add(numbers: string): number {
  if (numbers === "") return 0;

  let delimiter = /[\n,]/;
  let numsStr = numbers;

  if (numbers.startsWith("//")) {
    const delimiterEnd = numbers.indexOf("\n");
    const customDelimiter = numbers.substring(2, delimiterEnd);

    // Simplified to use a single custom delimiter
    delimiter = new RegExp(escapeRegExp(customDelimiter));

    numsStr = numbers.substring(delimiterEnd + 1);
  }

  const nums = numsStr.split(delimiter).map((num) => Number(num.trim()));

  const validNums = nums.filter((num) => !isNaN(num));
  const negatives = validNums.filter((num) => num < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return validNums.reduce((sum, num) => sum + num, 0);
}

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
