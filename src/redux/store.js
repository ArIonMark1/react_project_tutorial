// файл створення стор Redux
import { createStore } from 'redux';
// import appState from './features/systemApi/reduxApi';
import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducer';
import { rootReducer } from './reducer';

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
