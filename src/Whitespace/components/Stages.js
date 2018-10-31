import React from 'react';
import PropTypes from 'prop-types';
import Table, { TableBody, TableHead, TableRow } from 'material-ui/Table';
import { getStripedStyle } from '../helpers';
import Candidates from '../containers/Candidates';
import CandidatesEmpty from './CandidatesEmpty';
import StagesColapse from '../icons/StagesColapse';
// import StagesExpand from '../icons/StagesExpand';


function Stages({ classes, sectorData, colapsedSectors, stage, handleSwitchStage, colapsedStages, combinedStageData }) {
    return (
        <div>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.headRow}>
                        <th colSpan={stage.candidates.length} className={classes.headCell}>
                            <div style={{ "float": "left", "fontSize": 10 }}>
                                {stage.stage.name.toUpperCase()}
                            </div>

                            <div style={{ "float": "right" }}>
                                <StagesColapse
                                    display={!stage.candidates.length
                                        ? "none"
                                        : colapsedStages.includes(stage.stage.order)
                                            ? 'expand'
                                            : 'colapse'
                                    }
                                    style={{ "width": 12, "height": 12, "cursor": "pointer" }}
                                    onClick={() => handleSwitchStage(stage.stage.order)}
                                />
                            </div>

                        </th>
                    </TableRow>

                </TableHead>
                <TableBody>
                    <TableRow className={classes.headRowNames}>
                        {colapsedStages.includes(stage.stage.order)
                            ? <CandidatesEmpty value={stage.candidates.length} />
                            : !stage.candidates.length
                                ? <CandidatesEmpty value={0} />
                                : stage.candidates.map((d, i) => <Candidates key={i} candidate={d} />)
                        }
                    </TableRow>

                    {sectorData
                        .filter(d => {
                            if (colapsedSectors.length) {
                                return !colapsedSectors.includes(d.partentID);
                            }
                            return true;
                        })
                        .map((n, i) => {

                            return (
                                <TableRow key={i} style={{ ...getStripedStyle(i) }} className={classes.row}>

                                    {
                                        colapsedStages.includes(stage.stage.order)
                                            ? (<td key={i} className={classes.cell}
                                                    style={(combinedStageData[stage.stage.order].includes(n.sectorID))
                                                        ? { background: "#EEF3F7" }
                                                        : null}>
                                                    {(combinedStageData[stage.stage.order].includes(n.sectorID)) ? 'x' : null}
                                                </td>)
                                            : null


                                    }

                                    {(stage.candidates && !colapsedStages.includes(stage.stage.order)) &&
                                        stage.candidates.map((d, i) => {

                                            let tempData = d.sectors;
                                            let tempDataIDs = tempData && tempData.map(d => d.sectorID);

                                            return (
                                                <td key={i} className={classes.cell}
                                                    //style={(tempDataIDs.includes(n.sectorID) && n.partentID)
                                                    style={(tempDataIDs.includes(n.sectorID))
                                                        ? { background: "#EEF3F7" }
                                                        : null}>
                                                    {/* {(tempDataIDs.includes(n.sectorID) && n.partentID) ? 'x' : null} */}
                                                    {(tempDataIDs.includes(n.sectorID)) ? 'x' : null}
                                                </td>
                                            )
                                        })
                                    }


                                    {!stage.candidates.length && (
                                        <td className={classes.cell}>

                                        </td>
                                    )}
                                </TableRow>
                            );
                        })}

                </TableBody>
            </Table>
        </div>


    );
}

Stages.propTypes = {
    classes: PropTypes.object.isRequired,
    sectorData: PropTypes.array.isRequired,
    colapsedSectors: PropTypes.array.isRequired,
    stage: PropTypes.object.isRequired
};

export default Stages;