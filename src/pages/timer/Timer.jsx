import {Box, Typography, CardMedia, CardContent, Modal, Card, List, ListItem, ListItemText, TextField} from '@mui/material';
import TableHistory from "../../components/table/TableHistory";
import Button from '@material-ui/core/Button';
import Grid from '@mui/core/Grid';
import * as React from 'react';
export default function Timer() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="home">
      <Box sx={{
              padding: 2
            }}>
        <Grid container spacing={2} sx={{mt:4}}>
          <Grid item xs={4}> 
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div" sx={{textAlign: 'center'}}>
                Timer
              </Typography>
            </CardContent>
            <CardMedia
              height="194"
              component="img"
              image="./img/1354.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div" sx={{textAlign: 'center'}}>
              <Button variant="contained" color="primary" onClick={handleOpen}>Tambah</Button>
              </Typography>
              
              <List>
                  <ListItem>
                    <ListItemText
                      primary="Today"
                      secondary="Menyiram"
                    />
                    09:30
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Tommorow"
                      secondary="Panen"
                    />
                    12:10
                  </ListItem>
              </List>
            </CardContent>
            
          </Card>
          </Grid>
          <Grid item xs={8}>
              <h1>Riwayat Pertanian Terkini</h1>
              <TableHistory/>
          </Grid>
      </Grid>
     </Box>
     <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 400,
                  bgcolor: 'background.paper',
                  borderRadius: 1,
                  boxShadow: 24,
                  p: 4,
                }}>
          <Typography>Kegiatan</Typography>
          <TextField placeholder="Ex: Menanam" sx={{width: '100%'}} />
          <Typography>Waktu </Typography>
          <TextField
            type="datetime-local"
            sx={{ width: '100%' }}
          />
          <Typography>Waktu </Typography>
          <TextField multiline rows={3} maxRows={4} sx={{ width: '100%' }}/>
          <Typography sx={{p: 1, textAlign:'end'}}>
            <Button variant="contained" color="primary" >Simpan</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
