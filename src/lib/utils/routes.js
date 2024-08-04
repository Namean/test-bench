const APP_PORT = process.env.APP_PORT ? process.env.APP_PORT : "3000";
const API_PORT = process.env.API_PORT ? process.env.API_PORT : "8000";
const IP = process.env.ip ? process.env.ip : "192.168.10.235";


const protocol = "http";
const __origin = `${protocol}://${IP}`;



function routeWrapper(port, routePath) {
  return `${__origin}:${port}/${routePath}`;
}

function routeWrapperFactory(port) {
  return function (routePath) {
    return routeWrapper(port, routePath);
  }
}

const appRouter = routeWrapperFactory(APP_PORT, 'dashboard');




