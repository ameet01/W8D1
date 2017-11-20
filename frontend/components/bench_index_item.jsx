import React from 'react';
import {withRouter} from 'react-router-dom';

const BenchIndexItem = ({bench}) => (
  <li>{bench.description} [{bench.lng}] [{bench.lat}]</li>
);

export default BenchIndexItem;
