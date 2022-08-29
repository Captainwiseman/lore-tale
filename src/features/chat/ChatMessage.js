import React, { useRef } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  // Button,
  Avatar,
  Grid,
} from "@mui/material";

export function ChatMessage(props, key) {
  const { sender, msg } = props;
  const chatMsgRef = useRef();

  return (
    <React.Fragment key={key}>
      <Box ref={chatMsgRef} sx={{ minWidth: 350, marginTop: 3 }}>
        <Card sx={{ minHeight: 70 }} elevation={3} color="primary.main">
          <CardContent>
            <Grid container columns={{ xs: 4, md: 12 }}>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <Avatar alt={sender} src="/broken-image.jpg" />
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
