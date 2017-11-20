import React from 'react';
import BenchIndexItem from './bench_index_item';
import {withRouter} from 'react-router-dom';

class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchBenches();
  }

  render() {
    const {benches} = this.props;
    return (
      <div>
        <ul>
          {benches.map((bench, idx) => (<BenchIndexItem key={idx} bench={bench} />))}
        </ul>
      </div>
    )
  }
}

export default BenchIndex;
