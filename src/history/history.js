import createHistory from 'history/createBrowserHistory';

function checkUrl() {
  const baseUrl = '';
  window.localStorage.setItem('baseUrl', baseUrl);
  return `/${baseUrl}`;
}

const history = createHistory({
  basename: checkUrl(),
});

export default history;
