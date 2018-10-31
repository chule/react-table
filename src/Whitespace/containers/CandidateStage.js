import { connect } from 'react-redux';
import CandidateStage from '../components/CandidateStage';

const mapStateToProps = (state) => {

    return {
        colapsedSectors: state.colapsedSectors,
        candidateStageData: state.candidateStageData,
        sectorData: state.sectorData
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     handleSwitchSector: (id) => dispatch(switchSector(id))
// })

export default connect(
    mapStateToProps,
    //mapDispatchToProps
)(CandidateStage)