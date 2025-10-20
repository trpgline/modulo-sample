# Binary Modulo-3 Automaton Practice

This project implements a small TypeScript practice: a deterministic finite automaton that computes the remainder modulo 3 of a binary string. It demonstrates TypeScript modeling, simple state machines, and unit testing with npm.

I created pointers in each state(in this practice, zero and one), each state tells where the next state should go. Hence, it is not necessary to create a finite set of states at very begin.

## What this practice is about
- Implement a finite automaton (states S0, S1, S2) that processes a binary string (`0`/`1`) and outputs the remainder of the parsed binary number modulo 3.
- Provide a small API function `modThree(input: string): number` (see `src/lib/modulo.ts`) that validates input and runs the automaton.
- Include type-safe models (see `src/models/IAutomation.ts`) and unit tests to verify behavior.

## Features
- TypeScript implementation with strict types
- Input validation for binary strings
- Small, testable automaton core
- npm scripts for build, test and development

## Setup
1. Clone the repository and change directory:
    - `git clone <repository-url>`
    - `cd <project-directory>`

2. Install dependencies:
    - `npm install`

## Run
- Run the built app (if an entry exists):
    - `npm run start`

## How to run the tests
- Run the test suite:
    - `npm run test`

## Usage example
In code, call the exposed helper to get the remainder, the example is also in `src/main.ts`:

```ts
import { modThree } from './src/lib/modulo';

console.log(modThree('1011')); // returns a number 0 | 1 | 2
```
