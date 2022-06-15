import { createRouter, createWebHistory } from 'vue-router'

let routes:any[] = [];

const modules = import.meta.glob('@/views/*.vue');
const moduleKeys = Object.keys(modules);
routes = moduleKeys.map(key => {
  const arr = key.replaceAll('.vue', '').split('/').filter(Boolean);
  const item = arr.at(-1);
  const cModules = import.meta.glob('@/views/**/*.vue');
  let children = Object.keys(cModules).map(ckey => {
    const cArr = ckey.replaceAll('.vue', '').split('/').filter(Boolean);
    if (cArr.at(-2) == item) {
      const cItem = cArr.at(-1);
      return {
        path: `/${item === 'home' ? '' : `${item}`}${cItem === 'index' ? '' : `${item === 'home' ? '' : '/'}${cItem}`}`,
        name: `${item}.${cItem}`,
        component: cModules[ckey]
      }
    }
  });
  children = children.filter(Boolean);
  return {
    path: `/${item === 'home' ? '' : item}`,
    name: item,
    component: modules[key],
    children: children
  }
});

// console.log(routes)

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {next();});

router.afterEach((to, from) => {
  window.scrollTo(0,0);
});

export default router