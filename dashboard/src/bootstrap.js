import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

const devRoot = document.querySelector('#_dashboard-dev-root');

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
const IS_ISOLATED = Boolean(devRoot);

const mount = () => {

  return {
    render (el) {
      const app = createApp(Dashboard);
      app.mount(el);
    }
  };
}

// If we are in development and in isolation,
// call mount immediately
if (IS_DEVELOPMENT) {

  if(IS_ISOLATED) {
    const { render } = mount();

    render(devRoot);
  }
}


// We are running through container
// and we should export the mount function
export { mount };
