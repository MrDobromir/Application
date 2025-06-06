import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link, useLocation } from 'react-router-dom';
import SunnyIcon from '@mui/icons-material/Sunny';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DescriptionIcon from '@mui/icons-material/Description';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ForestIcon from '@mui/icons-material/Forest';



export default function Menu() {
    const [demandReportingOpen, setDemandReportingOpen] = React.useState(false);
    const [supplyReportingOpen, setSupplyReportingOpen] = React.useState(false);
    
    const handleDemandReportingClick = () => {
        setDemandReportingOpen(!demandReportingOpen);
    };
    
    const handleSupplyReportingClick = () => {
        setSupplyReportingOpen(!supplyReportingOpen);
    };
    
    const location = useLocation();
    const pathname = location.pathname;
    
    return (
        <>
            <List
                sx={{ 
                    width: '100%', 
                    maxWidth: 360, 
                    bgcolor: '#344955',
                    '& .MuiListItemButton-root': {
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.1)'
                        },
                        '&.Mui-selected': {
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.3)'
                            }
                        }
                    },
                    '& .MuiListItemText-primary': {
                        color: 'white'
                    }
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItemButton component={Link} to="/forecast" selected={pathname === '/forecast'}>
                    <ListItemIcon>
                        <SunnyIcon sx={{ color: 'white' }} fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="Forecast" />
                </ListItemButton>
                <ListItemButton component={Link} to="/inventory" selected={pathname === '/inventory'}>
                    <ListItemIcon>
                        <WarehouseIcon sx={{ color: 'white' }} fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="Inventory" />
                </ListItemButton>
                <ListItemButton component={Link} to="/supply" selected={pathname === '/supply'}>
                    <ListItemIcon>
                        <LocalShippingIcon sx={{ color: 'white' }} fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="Supply" />
                </ListItemButton>
                <ListItemButton component={Link} to="/reports" selected={pathname === '/reports'}>
                    <ListItemIcon>
                        <DescriptionIcon sx={{ color: 'white' }} fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="Reports" />
                </ListItemButton>
                <ListItemButton component={Link} to="/automations" selected={pathname === '/automations'}>
                    <ListItemIcon>
                        <SmartToyIcon sx={{ color: 'white' }} fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="Automations" />
                </ListItemButton>
                <ListItemButton component={Link} to="/sustainability" selected={pathname === '/sustainability'}>
                    <ListItemIcon>
                        <ForestIcon sx={{ color: 'white' }} fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="Sustainability" />
                </ListItemButton>
            </List>

        </>
    );
}