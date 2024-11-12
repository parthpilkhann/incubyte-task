export function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  let delimiter = /[\n,]/;

  if (numbers.startsWith("//")) {
    const delimiterEnd = numbers.indexOf("\n");

    const customDelimiter = numbers.substring(2, delimiterEnd);

    // Simplified to use a single custom delimiter
    delimiter = new RegExp(escapeRegExp(customDelimiter));

    numbers = numbers.substring(delimiterEnd + 1);
  }

  const nums = numbers.split(delimiter);

  const validNums = [];
  const negatives = [];

  for (let i = 0; i < nums.length; i++) {
    const num = Number(nums[i].trim());

    if (!isNaN(num)) {
      validNums.push(num);

      if (num < 0) {
        negatives.push(num);
      }
    }
  }

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  let sum = 0;

  for (let i = 0; i < validNums.length; i++) {
    sum += validNums[i];
  }

  return sum;
}

// This ensures the custom delimiters don't break the regular expressions
function escapeRegExp(string: string): string {
  // Replace special characters with a backslash followed by the character
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
