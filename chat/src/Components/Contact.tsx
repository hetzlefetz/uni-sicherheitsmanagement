import React from 'react';
import {
  Avatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { ContactType } from 'src/__types';

export type ContactProps = {
  onClick: () => void;
} & ContactType;

export const Contact = ({
  Id,
  Name,
  AvatarUrl,
  Job,
  onClick,
}: ContactProps) => {
  return (
    <ListItemButton key={Id} onClick={onClick}>
      <ListItemIcon>
        <Avatar alt={`${Name}_Avatar`} src={AvatarUrl} />
      </ListItemIcon>
      <ListItemText primary={Name}>{Name}</ListItemText>
      <ListItemText
        secondary={Job}
        style={{ textAlign: 'right' }}
      ></ListItemText>
    </ListItemButton>
  );
};
