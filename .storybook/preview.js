// .storybook/preview.js
import '../src/index.css';
import { configure } from '@storybook/vue'


// Loads the stories in order. Default will be alphabetical if there isn't a loader function
const loaderFN = () => [
  require('../stories/Task.stories'),
  require('../stories/PureTaskList.stories'),
  require('../stories/PureInboxScreen.stories'),
];

configure(loaderFN, module)
