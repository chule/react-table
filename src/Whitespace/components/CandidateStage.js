import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
// import Paper from 'material-ui/Paper';
import Stages from '../containers/Stages';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

const styles = theme => ({
    root: {
        width: '75%',
        overflowX: 'auto',
        display: 'flex'
    },
    table: {
        border: '2px solid #EAEDF4',
        borderTop: '4px solid #EAEDF4',
        borderBottom: '3px solid #EAEDF4'
    },
    row: {
        padding: '5px',
        height: 30

    },
    headRow: {
        padding: '5px',
        height: 42

    },
    headRowNames: {
        padding: '5px',
        height: 41
    },
    headCell: {
        padding: '10px'
    },
    cell: {
        border: '0',
        borderRight: '1px solid rgba(224, 224, 224, 1)',
        borderLeft: '1px solid rgba(224, 224, 224, 1)',
        textAlign: "center",
        padding: '5px',
        fontSize: '10px'
    }
});

function SimpleTable(props) {
    const { classes, candidateStageData, sectorData } = props;

    return (
        
            <PerfectScrollbar className={classes.root}>

                {candidateStageData.map((d) => {
                    // return d.candidates.length 
                    //     ? <Stages key={d.stage.name} classes={classes} sectorData={sectorData} stage={d}/>
                    //     : null;
                    return <Stages key={d.stage.name} classes={classes} sectorData={sectorData} stage={d} />

                })}


            </PerfectScrollbar>
        

    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);