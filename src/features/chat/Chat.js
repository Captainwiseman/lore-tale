import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Grid,
} from "@mui/material";

import { selectMessages } from "./chatSlice";
import styles from "./Chat.module.css";

function createMessage(key, sender, msg) {
  return (
    <React.Fragment key={key}>
      <Box sx={{ minWidth: 350 }}>
        <Card sx={{ minHeight: 70 }} elevation={3} color="primary.main">
          <CardContent>
            <Grid container columns={{ xs: 4, md: 12 }}>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <Avatar alt="UNKNOWN" src="/broken-image.jpg" />
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="primary.contrastText"
                    align="left"
                  >
                    {sender}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={2}></Grid>
              <Typography variant="h5" component="div"></Typography>
            </Grid>
            <Grid item xs={2} sx={{marginLeft: 7, marginTop: 0 }}>
              <Typography
                variant="body2"
                align="left"
                color="text.secondary"
              >
                {msg}
              </Typography>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </React.Fragment>
  );
}

export function Chat() {
  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Chat</h1>
      {messages.map((message) =>
        createMessage(message.key, message.sender, message.msg)
      )}
    </div>
  );
}
