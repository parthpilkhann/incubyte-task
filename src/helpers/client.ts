export function add(numbers: string): number {
  if (numbers === "") return 0;
  const nums = numbers.split(",").map(Number);
  return nums.reduce((sum, num) => sum + num, 0);
}
