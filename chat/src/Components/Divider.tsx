import React from 'react';
import { ListItemText } from '@mui/material';
import { MessageType } from 'src/__types';

export const MessageDivider = ({ text }: MessageType) => {
  return <ListItemText style={{ textAlign: 'center' }} primary={text} />;
};
