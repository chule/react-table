import { connect } from 'react-redux';
import { switchSector } from '../actions/colapsedSectors';
import Candidate from '../components/Candidate';

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
    mapStateToProps
    // mapDispatchToProps
)(Candidate)