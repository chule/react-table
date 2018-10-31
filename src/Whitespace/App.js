import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles';
import Sectors from './containers/Sectors';
import CandidateStage from './containers/CandidateStage';
import { handleInitialData } from './actions/shared';
import { sectorData, candidateStageData } from './data/whitespaceData';
import './App.css';

const styles = theme => ({
  root: {
    display: 'flex'
  }
});

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleInitialData(sectorData, candidateStageData))
  }

  render() {
    const { classes } = this.props;

    return (
      
      <div className={classes.root}>
        
        <Sectors />
        <CandidateStage />
      </div>
      
    );
  }


}

export default connect()(withStyles(styles)(App));
