import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRepoData, isLoading, clearRepoData } from 'actions/actions';
import { SectionHeading, SearchDiv, SearchButton, Input } from 'Component/styles'

function SearchContainer(props) {
  const { getRepoData, unsetIsLoading, clearData } = props;

  const [inputVal, setInput] = useState('');

  useEffect(() => {
    /* auto click search button on CR press */
    document.getElementById("userInput").addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("search-btn").click();
      }
    });
  }, []);

  function handleChange(e) {
    setInput(e.target.value);
    if (!e.target.value) {
      clearData();
      unsetIsLoading(false);
    }
  }

  function handleClick() {
    if(inputVal) getRepoData(inputVal);
  }

  return (
    <>
    <SectionHeading>git repo search filter</SectionHeading>
    <div id='thisSticks'>
      <SearchDiv>
        <Input
          value={inputVal}
          placeholder='Search Repo'
          type="text"
          id='userInput'
          onChange={e => handleChange(e)} 
          name="userInput"
          autoFocus
        />
        <SearchButton 
          id='search-btn'
          onClick={handleClick}
        >
          Search
        </SearchButton> 
      </SearchDiv>
    </div>
    </>
  );
}

SearchContainer.propTypes = {
  getRepoData: PropTypes.func,
  unsetIsLoading: PropTypes.func,
  clearData: PropTypes.func,
}

const mapDispatchToProps = dispatch => ({
  getRepoData: payload => dispatch(fetchRepoData(payload)),
  unsetIsLoading: payload => dispatch(isLoading(payload)),
  clearData: () => dispatch(clearRepoData()),
});

export default connect(null, mapDispatchToProps)(SearchContainer);
