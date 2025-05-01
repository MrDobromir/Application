import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import InventoryIcon from '@mui/icons-material/Inventory';
import AssistantIcon from '@mui/icons-material/Assistant';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link, useLocation } from 'react-router-dom';


export default function Menu() {
    const [demandReportingOpen, setDemandReportingOpen] = React.useState(true);
    const [supplyReportingOpen, setSupplyReportingOpen] = React.useState(true);

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
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Demand Planning
                    </ListSubheader>
                }
            >
                <ListItemButton component={Link} to="/forecasting" selected={pathname === '/forecasting'}>
                    <ListItemIcon>
                        <ShowChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Forecasting" />
                </ListItemButton>
                <ListItemButton onClick={handleDemandReportingClick} component={Link} to="/demand-reporting" selected={pathname === '/demand-reporting'}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Reporting" />
                    {demandReportingOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={demandReportingOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} component={Link} to='/demand-reporting-advanced' selected={pathname === '/demand-reporting-advanced'}>
                            <ListItemIcon>
                                <DashboardCustomizeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Advanced" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Supply Planning
                    </ListSubheader>
                }
            >
                <ListItemButton component={Link} to="/planning-horizon" selected={pathname === '/planning-horizon'}>
                    <ListItemIcon>
                        <SwapHorizIcon />
                    </ListItemIcon>
                    <ListItemText primary="Planning Horizon" />
                </ListItemButton>
                <ListItemButton component={Link} to="/inventory-management" selected={pathname === '/inventory-management'}>
                    <ListItemIcon>
                        <InventoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inventory Management" />
                </ListItemButton>
                <ListItemButton component={Link} to="/proposals" selected={pathname === '/proposals'}>
                    <ListItemIcon>
                        <AssistantIcon />
                    </ListItemIcon>
                    <ListItemText primary="Proposals" />
                </ListItemButton>
                <ListItemButton onClick={handleSupplyReportingClick} component={Link} to="/supply-reporting" selected={pathname === '/supply-reporting'}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Reporting" />
                    {supplyReportingOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={supplyReportingOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} component={Link} to='/supply-reporting-advanced' selected={pathname === '/supply-reporting-advanced'}>
                            <ListItemIcon>
                                <DashboardCustomizeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Advanced" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Master Data
                    </ListSubheader>
                }
            >
                <ListItemButton component={Link} to="/create" selected={pathname === '/create'}>
                    <ListItemIcon>
                        <AddBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add" />
                </ListItemButton>
            </List>
        </>
    );
}
