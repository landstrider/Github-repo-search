import React, { useEffect } from 'react';
import SearchContainer from 'Component/SearchContainer';
import CardContainer from 'Component/CardContainer';
import { FluidContainer, SectionContainer } from 'Component/styles'
import { ContentContainer } from './styles';

function RepoSearch(props) {
  useEffect(() => {
    /* Search bar sticks to screen top while user scrolls */
    window.onscroll = function() {
      scrollFunction();
    }

    const stickyDiv = document.getElementById('thisSticks');
    const stickyInput = document.getElementById('userInput'); 
    const stickyBtn = document.getElementById('search-btn');

    const stickyDivHeight = stickyDiv.offsetTop;

    function scrollFunction() {
      if (window.pageYOffset > stickyDivHeight) {
        stickyDiv.classList.add("sticky")
        stickyDiv.firstChild.classList.add("sticky-child");
        stickyInput.classList.add("sticky-input");
        stickyBtn.classList.add("sticky-btn");

      } else {
        stickyDiv.classList.remove("sticky")
        stickyDiv.firstChild.classList.remove("sticky-child");
        stickyInput.classList.remove("sticky-input");
        stickyBtn.classList.remove("sticky-btn");
      }
    }
  }, [])

  return (
    <FluidContainer>
      <ContentContainer>
        <SectionContainer>
          <SearchContainer />
        </SectionContainer>
        <SectionContainer>
          <CardContainer />
        </SectionContainer>
      </ContentContainer>
    </FluidContainer>
  );
}


export default RepoSearch;
