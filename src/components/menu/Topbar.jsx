import React from "react";
import { NotificationsNone,Search } from "@mui/icons-material";
import { TextField,Grid,InputAdornment } from '@mui/material';
export default function Topbar() {
  return (
    <div className="topbar">
    <Grid container spacing={2} sx={{ p: 3}}>
      <Grid item xs={2.5}>
        <img src={"img/logo.png"} alt="PeeTani Logo" className="topAvatar"/>
          <span className="logo">Peetani</span>
      </Grid>
      <Grid item xs={8.2}>
        <TextField id="outlined-search" placeholder="Cari . . . " InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search/>
            </InputAdornment>
          ),
        }} type="search" sx={{ width: 2/3, bgcolor: '#F6F5F5'}}/>
      </Grid>
      <Grid item xs={1.3} sx={{ float: 'right' }}>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone className="topAvatar"/>
            <span className="topIconBadge">3</span>
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"  className="topAvatar" />
        </div>
      </Grid>
    </Grid>
    </div>
  );
}
