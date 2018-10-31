import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
// import { TableCell } from 'material-ui/Table';

const styles = theme => ({
    nameCell: {
        // border: "1px solid #3A3B3D",
        padding: "5px",
        textAlign: "center",
        minWidth: 100,
        background: "#2F3032",
        color: "#DDDEDF",
        fontSize: "10px"
    },
    jobTitle: {
        marginTop: "4px",
        color: "#84858A",
        display: "block"

    }
});

function Candidates({ classes, candidate, colapsedSectors, sectorData }) {

    return (
        <Fragment>

            <td className={classes.nameCell}>
                {`${candidate.first} ${candidate.last}`}
                
                <span className={classes.jobTitle}>
                    {candidate.jobCategory}
                </span>

            </td>

        </Fragment>

    );
}

Candidates.propTypes = {
    candidate: PropTypes.object.isRequired,
    colapsedSectors: PropTypes.array.isRequired,
    sectorData: PropTypes.array.isRequired
};

export default withStyles(styles)(Candidates);