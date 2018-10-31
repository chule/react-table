import React, { Fragment } from 'react';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    nameCell: {
        // border: "1px solid #55565B",
        padding: "5px",
        textAlign: "center",
        minWidth: 100,
        background: "#55565B",
        color: "#fff",
        fontSize: "10px"
    },
    jobTitle: {
        marginTop: "4px",
        color: "#DDDEDF",
        display: "block",
        fontSize: 13

    }
});

function CandidatesEmpty({ classes, value }) {

    return (
        <Fragment>

            <td className={classes.nameCell}>
                
                <span className={classes.jobTitle}>
                    {value}
                </span>

            </td>

        </Fragment>

    );
}

export default withStyles(styles)(CandidatesEmpty);