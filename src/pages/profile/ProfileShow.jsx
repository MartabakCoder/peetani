import * as React from 'react';
import {Box, CardMedia, CardContent, CardHeader, Card, Avatar, Grid, List,ListItemText, ListItem, ListItemIcon, ListItemButton, IconButton} from '@mui/material';
import {MoreVert, Phone, Email, LocationOn} from '@mui/icons-material';
export default function ProfileShow() {
  return (
    <div className="home">
      <Box sx={{
              padding: 2
            }}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="./img/1354.jpg"
              alt="green iguana"
            />
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" sx={{ width: 70, height: 70, bgcolor: '#639B2F'}}>
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings" sx={{ width: 70, height: 70,}}> 
                  <MoreVert />
                </IconButton>
              }
              title="Rajendra Nohan"
              subheader="Web Developer"
            />
            <CardContent>
            
            <Grid container spacing={2}>
              <Grid item xs={6}> 
                <List
                  aria-label="contacts"
                >
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <Phone />
                      </ListItemIcon>
                      <ListItemText primary="+62 8515-7573-144" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <Email />
                      </ListItemIcon>
                      <ListItemText primary="rajendranohan4@gmail.com" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <LocationOn />
                      </ListItemIcon>
                      <ListItemText primary="Jalan Karangrejo Selatan No.34" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={6}>
                <h4>Lokasi Lahan</h4>
              </Grid>
            </Grid>
            </CardContent>
          </Card>
      </Box>
    </div>
  );
}