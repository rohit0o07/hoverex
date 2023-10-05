import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function PagePopupState() {
    return (
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <h3 variant="contained" {...bindTrigger(popupState)}>
              Pages
            </h3>
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>About</MenuItem>
              <MenuItem onClick={popupState.close}>Token Sale</MenuItem>
              <MenuItem onClick={popupState.close}>Features</MenuItem>
              <MenuItem onClick={popupState.close}>RoadMap</MenuItem>
              <MenuItem onClick={popupState.close}>our Team</MenuItem>
              <MenuItem onClick={popupState.close}>Gallery</MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    );
  }