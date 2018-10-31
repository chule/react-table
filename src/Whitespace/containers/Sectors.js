import { connect } from 'react-redux';
import { switchSector } from '../actions/colapsedSectors';
import Sectors from '../components/Sectors';

const mapStateToProps = (state) => {
    return { 
        colapsedSectors: state.colapsedSectors,
        candidateStageData: state.candidateStageData,
        sectorData: state.sectorData,
        usedSectors: state.usedSectors
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleSwitchSector: (id) => dispatch(switchSector(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sectors)