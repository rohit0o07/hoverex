import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';


export default function StorePopupState() {
    return (
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <h3 variant="contained" {...bindTrigger(popupState)}>
              Store
            </h3>
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>Shop</MenuItem>
              <MenuItem onClick={popupState.close}>Single Product</MenuItem>
              <MenuItem onClick={popupState.close}>Cart</MenuItem>
              <MenuItem onClick={popupState.close}>Checkout</MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    );
  }