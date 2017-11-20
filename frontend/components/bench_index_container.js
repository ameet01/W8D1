import {connect} from 'react-redux';
import BenchIndex from './bench_index';
import {fetchBenches} from '../actions/bench_actions';
import values from 'lodash/values';

const mapStateToProps = (state) => ({
  benches: values(state.entities.benches)
})

const mapDispatchToProps = (dispatch) => ({
  fetchBenches: () => dispatch(fetchBenches())
})


export default connect(mapStateToProps, mapDispatchToProps)(BenchIndex);
