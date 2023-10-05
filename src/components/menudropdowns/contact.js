import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function ContactPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <h3 variant="contained" {...bindTrigger(popupState)}>
            <MoreVertIcon/>
          </h3>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Contact</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}




