import React from 'react';
import { connect } from 'react-redux';
import { updatePageNumber } from 'actions/actions';
import {
  Pagination,
  NavControl,
  ChevronArrowLeft,
  ChevronArrowRight,
} from './styles';

function PaginationControl(props) {
  const { setPageNumber, pageNumber, data } = props;

  function handleArrowClick(navDirection) {
    setPageNumber(navDirection)
  }

  return (
    <Pagination>
      <NavControl>
        <ChevronArrowLeft 
          length={data.length}
          page={pageNumber}
          onClick={() => {
            handleArrowClick('left');
          }}
        />
        <ChevronArrowRight 
          length={data.length}
          page={pageNumber}
          onClick={() => {
            handleArrowClick('right');
          }}
        />
      </NavControl>
    </Pagination>
  );
}

const mapStateToProps = state => ({
  data: state.preloadedState.data,
  pageNumber: state.preloadedState.pageNumber,
});

const mapDispatchToProps = dispatch => ({
  setPageNumber: payload => dispatch(updatePageNumber(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaginationControl);
