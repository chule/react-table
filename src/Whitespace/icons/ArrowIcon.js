import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const ArrowIcon = (props) => (
    <SvgIcon {...props}>
        <path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z" />
    </SvgIcon>
);

export const iconStyles = {
    marginRight: 5,
    width: 10,
    height: 10,
    fill: '#767676'    
};

export default ArrowIcon;