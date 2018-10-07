const SERVER_PORT = 5000;

export const APP_CONFIG = {
  SERVER_API: `${window.location.origin.replace(window.location.port, SERVER_PORT.toString())}/api`
};
