import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <h3 variant="contained" {...bindTrigger(popupState)}>
            Home
          </h3>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>CryptoCurrency</MenuItem>
            <MenuItem onClick={popupState.close}>Element Demo</MenuItem>
            <MenuItem onClick={popupState.close}>Video background demo</MenuItem>
            <MenuItem onClick={popupState.close}>ICO donation</MenuItem>
            <MenuItem onClick={popupState.close}>Boxed version</MenuItem>
            <MenuItem onClick={popupState.close}>NFT shop</MenuItem>
            <MenuItem onClick={popupState.close}>Corporate</MenuItem>
            <MenuItem onClick={popupState.close}>News Portal</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}




