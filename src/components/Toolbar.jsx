import React from 'react';

function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className='btns'>
      {filters.map((filter) => (
        <div
          key={filter}
          onClick={() => onSelectFilter(filter)}
          className={`btn ${filter === selected ? 'active' : ''}`}
        >
          {filter}
        </div>
      ))}
    </div>
  );
}

export default Toolbar;