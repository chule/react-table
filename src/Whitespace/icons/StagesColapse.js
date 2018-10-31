import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const StagesColapse = (props) => {

    if (props.display === "colapse") {
        return (<SvgIcon {...props}>
            <g>
                <line id="svg_8" y2="13.058986" x2="18.652354" y1="13.091018" x1="13.155081" stroke="#2E2E2E" fill="none" />
                <line id="svg_9" y2="13.091017" x2="6.908981" y1="13.123049" x1="1.379678" stroke="#2E2E2E" fill="none" />
                <line id="svg_10" y2="6.941012" x2="6.87695" y1="6.973043" x1="1.379678" stroke="#2E2E2E" fill="none" />
                <line id="svg_11" y2="6.87695" x2="18.716416" y1="6.908981" x1="13.219143" stroke="#2E2E2E" fill="none" />
                <line id="svg_14" y2="18.620322" x2="13.091018" y1="12.610549" x1="13.091018" stroke="#2E2E2E" fill="none" />
                <line id="svg_15" y2="7.406269" x2="13.187112" y1="1.379678" x1="13.187112" stroke="#2E2E2E" fill="none" />
                <line id="svg_16" y2="7.4383" x2="6.908983" y1="1.411709" x1="6.908983" stroke="#2E2E2E" fill="none" />
                <line id="svg_17" y2="18.652353" x2="6.908983" y1="12.610548" x1="6.908983" stroke="#2E2E2E" fill="none" />
                <line id="svg_18" y2="6.974225" x2="7.006257" y1="0.022258" x1="0.054289" stroke="#2E2E2E" fill="none" />
                <line id="svg_19" y2="19.978922" x2="19.946892" y1="13.026955" x1="12.994924" stroke="#2E2E2E" fill="none" />
                <line transform="rotate(90 16.502939224243168,3.4982419013977064) " id="svg_20" y2="6.974225" x2="19.978923" y1="0.022258" x1="13.026956" stroke="#2E2E2E" fill="none" />
                <line transform="rotate(90 3.530273199081418,16.470907211303714) " id="svg_21" y2="19.946891" x2="7.006257" y1="12.994924" x1="0.05429" stroke="#2E2E2E" fill="none" />
            </g>
        </SvgIcon>)
    } else if (props.display === "expand") {
        return (<SvgIcon {...props}>
            <g>
                <line id="svg_8" y2="0.438664" x2="6.032031" y1="0.470695" x1="0.534758" stroke="#2E2E2E" />
                <line id="svg_9" y2="0.438664" x2="19.529304" y1="0.470695" x1="14" stroke="#2E2E2E" />
                <line id="svg_10" y2="19.529303" x2="19.497272" y1="19.561335" x1="14" stroke="#2E2E2E" />
                <line id="svg_11" y2="19.529303" x2="6" y1="19.561335" x1="0.502727" stroke="#2E2E2E" />
                <line id="svg_14" y2="6" x2="0.470696" y1="-0.009774" x1="0.470696" stroke="#2E2E2E" />
                <line id="svg_15" y2="20.026591" x2="0.470696" y1="14" x1="0.470696" stroke="#2E2E2E" />
                <line id="svg_16" y2="20.026591" x2="19.529305" y1="14" x1="19.529305" stroke="#2E2E2E" />
                <line id="svg_17" y2="6" x2="19.529305" y1="-0.041805" x1="19.529305" stroke="#2E2E2E" />
                <line id="svg_18" y2="6.974225" x2="7.006257" y1="0.022258" x1="0.054289" stroke="#2E2E2E" />
                <line id="svg_19" y2="19.978922" x2="19.946892" y1="13.026955" x1="12.994924" stroke="#2E2E2E" />
                <line transform="rotate(90 16.502939224243168,3.4982419013977064) " id="svg_20" y2="6.974225" x2="19.978923" y1="0.022258" x1="13.026956" stroke="#2E2E2E" />
                <line transform="rotate(90 3.530273199081418,16.470907211303714) " id="svg_21" y2="19.946891" x2="7.006257" y1="12.994924" x1="0.05429" stroke="#2E2E2E" />
            </g>
        </SvgIcon>)
    } else {
        return null;
    }
};

export default StagesColapse;