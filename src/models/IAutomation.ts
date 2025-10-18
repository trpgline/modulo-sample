export type Input = '0' | '1';

export interface IAutomation {
  output: number;
  key: string;
  transition: Map<'0' | '1', IAutomation>;
  accepting: number[];

  step(input: Input): IAutomation;
  zero(): IAutomation;
  one(): IAutomation;
}

/**
 * Base Automation class implementing IAutomation interface
 * The subclasses should override the output, key, zero, and one methods
 */
export class Automation implements IAutomation {
  // Default values, should be overridden
  output = 0;
  // Default key, should be overridden
  key = '';
  transition = new Map<Input, IAutomation>();
  // Theoretically the automaton should have a validation for accepting inputs
  // However, due to the Automation could only be triggered by modThree in this practice and modThree already validates the input,
  // we can assume all states are accepting
  accepting = [0, 1];

  /**
   * this is the main method to move between states, based on input
   * The subclasses should override zero() and one() methods
   * @param input
   */
  step(input: Input): IAutomation {
    this.transition = new Map<Input, IAutomation>([
      ['0', this.zero()],
      ['1', this.one()]
    ]);
    return this.transition.get(input);
  }

  zero(): IAutomation {
    return this;
  }
  one(): IAutomation {
    return this;
  }
}

