import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { getStripedStyle } from '../helpers';

const styles = theme => ({
    tr: {
        padding: '5px',
        height: 42,
        border: '1px solid #3A3B3D'
    }
});


function Candidate({ candidate, colapsedSectors, sectorData }) {

    let dummyData = candidate.sectors;
    let dummyDataIDs = dummyData && dummyData.map(d => d.sectorID);

    return (
        <Fragment>




            {sectorData
                .filter(d => {
                    if (colapsedSectors.length) {
                        return !colapsedSectors.includes(d.partentID);
                    }
                    return true;
                })
                .map((n, i) => {
                    return (
                        <TableRow key={i} className={classes.tr}>
                            <TableCell>

                                {(dummyDataIDs.includes(n.sectorID) && n.partentID) ? 'x' : null}

                            </TableCell>
                        </TableRow>
                    );
                })}
        </Fragment>

    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Candidate);