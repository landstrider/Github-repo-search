export const fetchRepoData = payload => ({
  type: 'FETCH_REPO_DATA',
  payload,
})

export const isLoading = payload => ({
  type: 'IS_LOADING',
  payload,
})

export const clearRepoData = () => ({
  type: 'CLEAR_REPO_DATA',
});
