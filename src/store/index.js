import { createStore } from 'vuex';
import module from './modules';

export default createStore({
  modules: {
    module,
  },
});
