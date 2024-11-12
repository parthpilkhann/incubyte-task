export function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  let delimiter = /[\n,]/; // Default delimiters: newline and comma

  // Check for a custom delimiter at the start of the string
  if (numbers.startsWith("//")) {
    const delimiterEnd = numbers.indexOf("\n");
    const customDelimiter = numbers.substring(2, delimiterEnd);
    delimiter = new RegExp(escapeRegExp(customDelimiter));
    numbers = numbers.substring(delimiterEnd + 1);
  }

  const nums = numbers
    .split(delimiter) // Split by specified delimiters
    .map((num) => Number(num.trim())) // Convert to numbers and trim whitespace
    .filter((num) => !isNaN(num)); // Filter out non-numeric values

  const negatives = nums.filter((num) => num < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return nums.reduce((sum, num) => sum + num, 0);
}

// Function to escape special characters in the delimiter
function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
