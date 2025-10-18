import { IAutomation, Automation } from './IAutomation';
import S1Automation from './S1Automation';

export default class S0Automation extends Automation {
  output = 0;
  key = 'S0';
  zero(): IAutomation {
    return this;
  }
  one(): IAutomation {
    return new S1Automation();
  }
}
