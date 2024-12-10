import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const ChatBot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');
    setMessages([...messages, { text: input, sender: 'user' }, { text: 'We recommend these jobs...', sender: 'bot' }]);
  };

  return (
    <Container>
      <Typography variant="h3" align="center">ChatBot</Typography>
      {messages.map((msg, index) => (
        <Typography key={index} align={msg.sender === 'user' ? 'right' : 'left'}>
          {msg.text}
        </Typography>
      ))}
      <TextField value={input} onChange={(e) => setInput(e.target.value)} fullWidth />
      <Button onClick={handleSendMessage}>Send</Button>
    </Container>
  );
};

export default ChatBot;
