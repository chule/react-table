import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { getStripedStyle } from '../helpers';

const styles = theme => ({
    root: {
        width: '75%',
        //marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        border: '0'
    },
    row: {
        padding: '5px',
        height: 30,

    },
    cell: {
        border: '0'
    }
});


function SimpleTable(props) {
    const { classes, candidateStageData, sectorData, colapsedSectors } = props;

    let dummyData = candidateStageData.length && candidateStageData[0].candidates[0].sectors;
    
    let dummyDataIDs = dummyData && dummyData.map(d => d.sectorID);


    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Names</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sectorData
                        .filter(d => {
                            if (colapsedSectors.length) {
                                return !colapsedSectors.includes(d.partentID);
                            }
                            return true;
                        })
                        .map((n, i) => {
                            return (
                                <TableRow key={i} style={{ ...getStripedStyle(i), 'border': 0 }} className={classes.row}>
                                    <TableCell className={classes.cell} component="th" scope="row">

                                        {(dummyDataIDs.includes(n.sectorID) && n.partentID) ? 'x' : null}

                                    </TableCell>
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
        </Paper>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);