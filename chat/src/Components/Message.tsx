import { Grid, ListItemButton, ListItemText, Paper } from '@mui/material';
import React from 'react';
import { MessageType } from 'src/__types';

export type MessageProps = {
  alignment: 'left' | 'right';
} & MessageType;

export const Message = ({
  text,
  timestamp,
  sender,
  alignment,
}: MessageProps) => {
  return (
    <ListItemButton>
      <Grid container style={{ justifyContent: alignment }}>
        <Paper elevation={3} style={{ padding: '0 8px' }}>
          <Grid item xs={12}>
            <ListItemText
              style={{ textAlign: alignment }}
              secondary={sender}
            ></ListItemText>
          </Grid>
          <Grid item xs={12}>
            <ListItemText
              style={{ textAlign: alignment }}
              primary={text}
            ></ListItemText>
          </Grid>
          <Grid item xs={12}>
            <ListItemText
              style={{ textAlign: alignment }}
              secondary={timestamp}
            ></ListItemText>
          </Grid>
        </Paper>
      </Grid>
    </ListItemButton>
  );
};
