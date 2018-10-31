import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableHead } from 'material-ui/Table';
// import Paper from 'material-ui/Paper';
import ArrowIcon, { iconStyles } from '../icons/ArrowIcon';
import { getStripedStyle } from '../helpers';

const styles = theme => ({
    root: {
        width: '25%',
        overflowX: 'auto'

    },
    row: {
        padding: '5px',
        height: 30,

    },
    table: {
        border: '2px solid #EAEDF4',
    },
    headRow: {
        padding: '5px',
        height: 42
    },
    headRowCell: {
        padding: '5px',
        textAlign: 'center',
        borderLeft: '1px solid rgba(224, 224, 224, 1)',
        fontSize: '9px',
        width: '30px',
        background: 'rgb(238, 243, 247)'
    },
    cell: {
        border: '0',
        font: '12px sans-serif',
        paddingLeft: '10px',
        paddingRight: '10px',
        cursor: 'pointer'
    },
    cellGreen: {
        border: '0',
        font: '12px sans-serif',
        paddingLeft: '7px',
        paddingRight: '10px',
        cursor: 'pointer',
        background: 'rgb(236,251,250)',
        borderLeft: '5px solid #45D9D0'
    },
    cellChild: {
        border: '0',
        font: '12px sans-serif',
        paddingLeft: '35px',
        paddingRight: '10px'
    },
    cellChildGreen: {
        border: '0',
        font: '12px sans-serif',
        marginLeft: '22px',
        paddingRight: '10px',
        background: 'rgb(236,251,250)',
        borderLeft: '5px solid #45D9D0',
        display: 'block',
        padding: '8px'
    },
    headTotals: {
        borderLeft: '1px solid rgba(224, 224, 224, 1)',
        fontSize: '10px',
    },
    cellTotals: {
        borderLeft: '1px solid rgba(224, 224, 224, 1)',
        borderBottom: 0,
        fontSize: '11px',
        textAlign: 'center'

    },
    headRowTitle: {
        fontWeight: 'normal'
    }
});

function SimpleTable({ classes, colapsedSectors, handleSwitchSector, sectorData, usedSectors }) {

    const handleOnClick = (n) => {
        handleSwitchSector(n)
    }

    return (
        <div className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <tr className={classes.headRow}>
                        <th className={classes.headRowTitle}>White Space Tracker</th>
                        <th colSpan={2} className={classes.headTotals}>TOTALS</th>
                    </tr>
                    <tr className={classes.headRow}>
                        <th ></th>
                        <th className={classes.headRowCell}>
                            HIRES
                        </th>
                        <th className={classes.headRowCell}>
                            TOUCH POINT
                        </th>
                    </tr>
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
                                <tr key={n.sectorID} style={{ ...getStripedStyle(i), 'border': 0 }} className={classes.row} >
                                    <td
                                        className={n.partentID === null
                                            ? usedSectors.includes(n.sectorID) ? classes.cell : classes.cellGreen
                                            : usedSectors.includes(n.sectorID) ? classes.cellChild : classes.cellChildGreen
                                        }
                                        style={{ fontWeight: n.partentID === null ? 'bold' : 100 }}
                                        onClick={
                                            () => {
                                                if (n.partentID === null) {
                                                    handleOnClick(n.sectorID)
                                                }
                                            }
                                        }
                                    >
                                        {n.partentID === null &&
                                            <ArrowIcon style={{
                                                ...iconStyles,
                                                transform: colapsedSectors.includes(n.sectorID) ? 'rotate(0deg)' : 'rotate(90deg)'
                                            }}
                                            />
                                        }
                                        {n.name}
                                    </td>
                                    <td className={classes.cellTotals}>
                                        4
                                    </td>
                                    <td className={classes.cellTotals}>
                                        2
                                    </td>
                                </tr>
                            );
                        })}
                </TableBody>
            </Table>
        </div>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);