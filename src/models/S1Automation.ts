import { Automation, IAutomation } from './IAutomation';
import S0Automation from './S0Automation';
import S2Automation from './S2Automation';

export default class S1Automation extends Automation {
  output = 1;
  key = 'S1';
  zero(): IAutomation {
    return new S2Automation();
  }
  one(): IAutomation {
    return new S0Automation();
  }
}
