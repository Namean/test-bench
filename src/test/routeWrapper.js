const { Router } = require("react-router-dom/cjs/react-router-dom.min");


const protocol = "http";
const IP = "192.168.10.235";
const __origin = `${protocol}://${IP}`;

function routeWrapper(port, routePath) {
  const url = `${__origin}:${port}/${routePath}`;
  const length = url.length - 1;

  return routePath === '/' ? url.slice(0, length) : url;
}


function routeWrapperFactory(port) {

  return function (routePath) {
    return routeWrapper(port, routePath);
  }
}


const port = 3000;
routePath = "dashboard";

const appRoute = routeWrapperFactory(port)
const authRoute = routeWrapperFactory(8000)
const apiRoute = routeWrapperFactory(3005)

console.log(appRoute(routePath));
console.log(authRoute('login'));
console.log(apiRoute('/'));
