import {
  Avatar,
  Divider,
  Fab,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';

export const Chat = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5" className="header-message">
            Chat
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          width: '100%',
          height: '80vh',
        }}
      >
        <Grid item xs={3} style={{ borderRight: '1px solid #e0e0e0' }}>
          <List>
            <ListItemButton key="RemySharp">
              <ListItemIcon>
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </ListItemIcon>
              <ListItemText
                primary="Ivo Valls"
                secondary="Kunde"
              ></ListItemText>
            </ListItemButton>
          </List>
          <Divider />
          <Grid item xs={12} style={{ padding: '10px' }}>
            <TextField
              id="outlined-basic-email"
              label="Search"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Divider />
          <List>
            <ListItemButton key="Crisie">
              <ListItemIcon>
                <Avatar
                  alt="Crisie"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="Crisie">Crisie</ListItemText>
              <ListItemText
                secondary="Sicherheitssalamander"
                style={{ textAlign: 'right' }}
              ></ListItemText>
            </ListItemButton>
            <ListItemButton key="Hicham">
              <ListItemIcon>
                <Avatar
                  alt="Hicham"
                  src="https://material-ui.com/static/images/avatar/3.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="Hicham">Hicham</ListItemText>
              <ListItemText
                secondary="PO"
                style={{ textAlign: 'right' }}
              ></ListItemText>
            </ListItemButton>
            <ListItemButton key="Hans">
              <ListItemIcon>
                <Avatar
                  alt="Hans"
                  src="https://material-ui.com/static/images/avatar/2.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="Hans">Hans</ListItemText>
            </ListItemButton>

            <ListItemButton key="Dirk">
              <ListItemIcon>
                <Avatar
                  alt="Dirk"
                  src="https://material-ui.com/static/images/avatar/2.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="Dirk">Dirk</ListItemText>
            </ListItemButton>

            <ListItemButton key="Jan">
              <ListItemIcon>
                <Avatar
                  alt="Jan"
                  src="https://material-ui.com/static/images/avatar/2.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="Jan">Jan</ListItemText>
            </ListItemButton>
          </List>
        </Grid>
        <Grid item xs={9}>
          <List
            style={{
              height: '70vh',
              overflowY: 'auto',
            }}
          >
            <ListItemButton key="1">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    style={{ textAlign: 'right' }}
                    primary="Hey man, What's up ?"
                  ></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText
                    style={{ textAlign: 'right' }}
                    secondary="09:30"
                  ></ListItemText>
                </Grid>
              </Grid>
            </ListItemButton>
            <ListItemButton key="2">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    style={{ textAlign: 'left' }}
                    primary="Hey, Iam Good! What about you ?"
                  ></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText
                    style={{ textAlign: 'left' }}
                    secondary="09:31"
                  ></ListItemText>
                </Grid>
              </Grid>
            </ListItemButton>
            <ListItemButton key="3">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    style={{ textAlign: 'right' }}
                    primary="Cool. i am good, let's catch up!"
                  ></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText
                    style={{ textAlign: 'right' }}
                    secondary="10:30"
                  ></ListItemText>
                </Grid>
              </Grid>
            </ListItemButton>
          </List>
          <Divider />
          <Grid container style={{ padding: '20px' }}>
            <Grid item xs={11}>
              <TextField
                id="outlined-basic-email"
                label="Type Something"
                fullWidth
              />
            </Grid>
            <Grid xs={1} style={{ textAlign: 'right' }}>
              <Fab color="primary" aria-label="add">
                <SendIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
