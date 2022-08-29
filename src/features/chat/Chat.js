import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  // Button,
  Container,
  TextField,
} from "@mui/material";

import { ChatMessage } from "./ChatMessage";

import { selectMessages, postMessage } from "./chatSlice";
import styles from "./Chat.module.css";

export function Chat() {
  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();

  function renderMessages() {
    const messagesElements = messages.map((message) => {
      const { key, sender, msg } = message;
      // return createMessageElement(message.key, message.sender, message.msg);
      return <ChatMessage key={key} sender={sender} msg={msg} />;
    });

    return messagesElements;
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
          maxHeight: 300,
          overflow: "auto",
        }}
      >
        {renderMessages()}
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
