import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';


export default function FeaturePopupState() {
    return (
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <h3 variant="contained" {...bindTrigger(popupState)}>
              Features
            </h3>
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>Typography</MenuItem>
              <MenuItem onClick={popupState.close}>ShortCodes</MenuItem>
              <MenuItem onClick={popupState.close}>Service Plus</MenuItem>
              <MenuItem onClick={popupState.close}>Privacy policy</MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    );
  }