import { Divider, Fab, Grid, List, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { Contact } from './Contact';
import { Message } from './Message';
import messages from '../Data/messages.json';
import contacts from '../Data/contacts.json';
import { MessageDivider } from './Divider';

export const Chat = () => {
  const [currentUser, setCurrentUser] = useState<string>(contacts[0].Id);
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
            <Contact
              {...contacts.find((x) => x.Id == currentUser)}
              onClick={() => undefined}
            />
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
            {contacts.map((contact) => (
              <Contact
                key={contact.Id}
                {...contact}
                onClick={() => setCurrentUser(contact.Id)}
              />
            ))}
          </List>
        </Grid>
        <Grid item xs={9}>
          <List
            style={{
              height: '70vh',
              overflowY: 'auto',
            }}
          >
            {messages.map((message, idx) => {
              switch (message.type) {
                case 'message':
                  return (
                    <Message
                      key={idx}
                      {...message}
                      sender={contacts.find((c) => c.Id == message.sender).Name}
                      alignment={
                        message.sender == currentUser ? 'left' : 'right'
                      }
                    />
                  );
                case 'divider':
                  return <MessageDivider key={idx} {...message} />;
                default:
                  console.log(`Unkown message type ${message.type}`);
                  return <></>;
              }
            })}
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
