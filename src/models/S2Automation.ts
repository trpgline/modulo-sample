import { Automation, IAutomation } from './IAutomation';
import S1Automation from './S1Automation';

export default class S2Automation extends Automation {
  output = 2;
  key = 'S2';
  zero(): IAutomation {
    return new S1Automation();
  }
  one(): IAutomation {
    return this;
  }
}
