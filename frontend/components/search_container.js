import {connect} from 'react-redux';
import Search from './search';
import {fetchBenches} from '../actions/bench_actions';
import values from 'lodash/values';

const mapStateToProps = (state) => ({
  benches: values(state.entities.benches)
})

const mapDispatchToProps = (dispatch) => ({
  fetchBenches: () => dispatch(fetchBenches())
})


export default connect(mapStateToProps, mapDispatchToProps)(Search);
