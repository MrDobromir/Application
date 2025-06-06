import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';

const drawerWidth = 240;

export default function Navbar({ content }) {
    return (
        <Box sx={{ display: 'flex', backgroundColor: '#344955', minHeight: '100vh' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    backgroundColor: '#344955',
                    borderRadius: 0, // force square corners
                }}
            >

                <Toolbar sx={{ minHeight: '64px !important', height: '64px !important', display: 'flex', justifyContent: 'space-between' }}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <img
                            src="/images/logo.png"
                            alt="Company Logo"
                            style={{ height: '70px', margin: '55px 20px 5px 25px', objectFit: 'contain' }}
                        />
                    </Link>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <NotificationsIcon sx={{ fontSize: 32, cursor: 'pointer', color: 'white' }} />
                        <Link to="/settings" style={{ color: 'inherit' }}>
                            <SettingsIcon sx={{ fontSize: 32, cursor: 'pointer', color: 'white' }} /></Link>
                        <Link to="/login" style={{ color: 'inherit' }}>
                            <BedtimeIcon sx={{ fontSize: 36, cursor: 'pointer', color: 'white' }} />
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    zIndex: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: '#344955',
                        paddingTop: '7rem',
                        boxShadow: 'none',
                        borderRight: 'none'
                    },
                }}
            >

                <Menu />
            </Drawer>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    backgroundColor: '#e5e5e5',
                    borderTopLeftRadius: '3.5rem',
                    marginTop: '70px',
                    overflow: 'auto',
                    height: 'calc(100vh - 70px)',
                }}
            >
                {content}
            </Box>
        </Box>
    );
}