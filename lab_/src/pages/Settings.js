import React, { useState } from 'react';
import {
  Box, Grid, Typography, TextField, Switch, FormControlLabel,
  Button, Collapse, Divider
} from '@mui/material';
import AnimatedCard from '../components/AnimatedCard';

const Settings = () => {
  const [showAccount, setShowAccount] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSecurity, setShowSecurity] = useState(false);

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>Settings</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <div onClick={() => setShowAccount(!showAccount)}>
            <AnimatedCard title="Account" content="Manage your account and privacy settings." />
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div onClick={() => setShowNotifications(!showNotifications)}>
            <AnimatedCard title="Notifications" content="Set your notification preferences." />
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div onClick={() => setShowSecurity(!showSecurity)}>
            <AnimatedCard title="Security" content="Update password and security questions." />
          </div>
        </Grid>
      </Grid>

      {/* ACCOUNT SETTINGS */}
      <Collapse in={showAccount}>
        <Box mt={4} p={3} bgcolor="#fff" borderRadius={2} boxShadow={2}>
          <Typography variant="h6">Account Settings</Typography>
          <Divider sx={{ my: 2 }} />
          <TextField fullWidth margin="normal" label="Full Name" defaultValue="John Doe" />
          <TextField fullWidth margin="normal" label="Email" defaultValue="john@example.com" />
          <Button variant="contained" color="primary">Save Changes</Button>
        </Box>
      </Collapse>

      {/* NOTIFICATIONS */}
      <Collapse in={showNotifications}>
        <Box mt={4} p={3} bgcolor="#fff" borderRadius={2} boxShadow={2}>
          <Typography variant="h6">Notification Preferences</Typography>
          <Divider sx={{ my: 2 }} />
          <FormControlLabel
            control={
              <Switch
                checked={notificationsEnabled}
                onChange={() => setNotificationsEnabled(!notificationsEnabled)}
              />
            }
            label={notificationsEnabled ? "Notifications ON" : "Notifications OFF"}
          />
        </Box>
      </Collapse>

      {/* SECURITY SETTINGS */}
      <Collapse in={showSecurity}>
        <Box mt={4} p={3} bgcolor="#fff" borderRadius={2} boxShadow={2}>
          <Typography variant="h6">Security</Typography>
          <Divider sx={{ my: 2 }} />
          <TextField
            fullWidth
            margin="normal"
            label="Current Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="New Password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Button variant="contained" color="error" sx={{ mt: 2 }}>
            Reset Password
          </Button>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Settings;
