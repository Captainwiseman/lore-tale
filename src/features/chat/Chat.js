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
  Container,
  TextField,
} from "@mui/material";

import { selectMessages, postMessage } from "./chatSlice";
import styles from "./Chat.module.css";

export function Chat() {
  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();

  function createMessage(key, sender, msg) {
    return (
      <React.Fragment key={key}>
        <Box sx={{ minWidth: 350, maxHeight:300, marginTop: 3, overflow: 'auto' }}>
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
              </Grid>
              <Grid item xs={2} sx={{ marginLeft: 7, marginTop: 0 }}>
                <Typography variant="body2" align="left" color="text.secondary">
                  {msg}
                </Typography>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </React.Fragment>
    );
  }

  function sendMessage(event) {
    if (event.key === "Enter") {
      const newMessage = {
        msg: event.target.value,
      };
      dispatch(postMessage(newMessage));
    }
  }

  return (
    <div>
      <h1>Chat</h1>
      <Container
        sx={{
          border: "1px solid black",
          padding: 3,
          paddingTop: 0,
          marginBottom: 5,
        }}
      >
        {messages.map((message) =>
          createMessage(message.key, message.sender, message.msg)
        )}
      </Container>
      <Container>
        <TextField
          id="msgInput"
          label="Enter message"
          onKeyDown={sendMessage}
          variant="outlined"
        />
      </Container>
    </div>
  );
}
