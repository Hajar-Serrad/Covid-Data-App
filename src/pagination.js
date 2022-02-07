import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pagination = ({ dataPerPage, totalData, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData/ dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    
    <nav>
      <ul className='pagination pagination-sm' style={{marginTop:"80px"}}>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;