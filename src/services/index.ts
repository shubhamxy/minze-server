import routes from './base';
import modelrunner from './modelrunner';

import {fireroutes} from './firebase';

export default [...routes, ...fireroutes, ...modelrunner];
