import { connect } from 'react-redux';
import { switchStage } from '../actions/colapsedStages';
import Stages from '../components/Stages';

const mapStateToProps = (state) => {
    return { 
        colapsedSectors: state.colapsedSectors,
        candidateStageData: state.candidateStageData,
        sectorData: state.sectorData,
        colapsedStages: state.colapsedStages,
        combinedStageData: state.combinedStageData
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleSwitchStage: (id) => dispatch(switchStage(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Stages)