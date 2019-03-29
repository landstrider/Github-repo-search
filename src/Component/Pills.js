import React from 'react';
import { Pill } from 'Component/styles';
import Star from 'svg/star';
import Fork from 'svg/fork';
import Issue from 'svg/issue';

function Pills(props) {
  const { name, count } = props.pillConfig;

  const renderIcon = function() {
    if (name === 'Stars') return <Star />;
    else if (name === 'Fork') return <Fork />;
    return <Issue />; 
  }
  return (
    <Pill>
      {renderIcon()}
      <span>{name}</span>
      <span>{count}</span>
    </Pill>
  );
}

export default Pills;
