import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RepoCard from 'Component/RepoCard';
import Loader from 'Component/Loader';
import { CardContainerDiv, SectionHeading, Cards, NonDataMsg } from 'Component/styles'

function CardContainer(props) {
  const { isLoading, error, cardData } = props;

  function renderConditional() {
    if (!isLoading && !error && !cardData.length) return <NonDataMsg>No Data</NonDataMsg>; 
    if (isLoading) return <Loader />;
    if (error) return <NonDataMsg>{error}</NonDataMsg>
    return (
      <Cards>
        {cardData.map((each, index) => ( 
          <RepoCard cardConfig={each} key={index} />    
        ))} 
      </Cards>
    );
  }

  return (
    <>
    <SectionHeading>repo search result</SectionHeading>
    <CardContainerDiv>
      {renderConditional()}
    </CardContainerDiv>
    </>
  );
}

CardContainer.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  cardData: PropTypes.array,
}

const mapStateToProps = state => ({
  isLoading: state.preloadedState.isFetching,
  error: state.preloadedState.errMsg,
  cardData: state.preloadedState.data,
});

export default connect(mapStateToProps, null)(CardContainer);
