import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function LanguagePopupState() {
    return (
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <h3 variant="contained" {...bindTrigger(popupState)}>
              languages
            </h3>
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>English</MenuItem>
              <MenuItem onClick={popupState.close}>Spanish</MenuItem>
              <MenuItem onClick={popupState.close}>Telugu</MenuItem>
              <MenuItem onClick={popupState.close}>Hindi</MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    );
  }
 