import { all, fork, put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function fetchRepoData(queryParam) {
  return axios({
    method: "get",
    url: `https://api.github.com/search/repositories?q=${queryParam}`,
  })
}

function organizeData(reposJSONArr) {
  /* crate requred repo data array consumable by components */
  let reqRepoDataArr = (function getSubset(array, keys) {
    return array.map(o => Object.assign(...keys.map(k => {
      if (~k.indexOf(".")) {
        let propValArr = k.split(".");
        let validPropName = propValArr[0] + "__" + propValArr[1];
        if(o[propValArr[0]] === null) return {[validPropName] : null}
        return ({[validPropName] : o[propValArr[0]][propValArr[1]]});
      }
      return {[k] : o[k]}
    })))  
  })(reposJSONArr, ['name', 'description', 'forks', 'open_issues', 'owner.avatar_url', 'html_url', 'stargazers_count']);

  return reqRepoDataArr;    
}

function* fetchRepoDataWorker(actionObj) {
  const queryParam = actionObj.payload;
  try {
    yield put({ type: 'IS_LOADING', payload: true });
    const repoData = yield call(fetchRepoData, queryParam);

    /* organize fetched data into consumable array for components */
    const organizedData = yield call(organizeData, repoData.data.items);
    yield put({ type: 'FETCH_REPO_DATA_SUCCESS', payload: organizedData });
  } catch(error) {
    yield put({ type: 'IS_LOADING', payload: false });
    yield put({ type: 'FETCH_REPO_DATA_FAILURE' });
    console.log(error);
  }
}

function* fetchRepoDataWatcher() {
  yield takeLatest('FETCH_REPO_DATA', fetchRepoDataWorker);
}

export default function *rootRunner() {
  yield all([
    fork(fetchRepoDataWatcher),
  ]);
}

