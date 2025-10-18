import type { Input } from '../models/IAutomation';
import S0Automation from '../models/S0Automation';

export function modThree(input: string) : number
{
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }
  const regexp = new RegExp('^[01]+$');
  if (!regexp.test(input)) {
    throw new Error('Input must be a binary string');
  }
  let current = new S0Automation();
  for (let char of input) {
    const input: Input  = char as Input;
    current = current.step(input);
  }
  return current.output;
}
