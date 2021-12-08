export const file = await Deno.readTextFile("./2021/8/input");
const input = file.replace(/\n+$/, "").split("\n");

function intersection(output: string, value: string): number {
  return [...output].filter((char) => value.includes(char)).length;
}
function outputDigit(output: string, one: string, four: string) {
  if (output.length === 2) return 1;
  if (output.length === 3) return 7;
  if (output.length === 4) return 4;
  if (output.length === 7) return 8;
  if (output.length === 5) {
    return intersection(output, one) === 2
      ? 3
      : intersection(output, four) === 2
      ? 2
      : 5;
  }
  if (output.length === 6) {
    return intersection(output, four) === 4
      ? 9
      : intersection(output, one) === 2
      ? 0
      : 6;
  }
  throw new Error("Invalid output length");
}

let result = 0;
for (const line of input) {
  const [inputs, outputs] = line.split(" | ").map((part) => part.split(" "));
  const patterns = inputs.concat(outputs);
  const one = patterns.find((p) => p.length === 2) as string;
  const four = patterns.find((p) => p.length === 4) as string;
  result += outputs.reduce((t, o) => t * 10 + outputDigit(o, one, four), 0);
}

console.log("2021 Day 8, Part 2: ", result);
