import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

class App extends React.Component {
  // handleChange = () => {
  //   this.setState({ foo: Math.random() });
  // };

  render() {
    return (
      <>
        <div onClick={this.props.handleChange}>
          {this.props.stuff.someStuff.foo}
        </div>
      </>
    );
  }
}

const mapStoreStateToProps = state => ({
  stuff: state,
});

const mapDispatchToProps = dispatch => ({
  handleChange: newStuff => dispatch(actions.changer(newStuff)),
});

export default connect(
  mapStoreStateToProps,
  mapDispatchToProps
)(App);
