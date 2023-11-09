import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import LightBlueButton from "../../reusable/LightBlueButton";
import GreenButton from "../../reusable/GreenButton";
import {Badge, Button, Grid} from "@mui/material";
import SearchBar from "../../reusable/SearchBar";
import {useNavigate} from "react-router-dom";
import {getFromStorage} from "../../utils/common";
import {Logout} from "@mui/icons-material";

const adminPages = [{label: 'Dashboard', goto: "/restaurant-home"}, {label: 'Manage Menu', goto: "manage-manu"},
    {label: 'Manage reservation', badge: "reserveBadge", goto: "/TableManagement"}, {
        label: 'Manage Order',
        badge: "orderBadge",
        goto:"/OrderManagement"
    }];
const userPages = [{label: 'Product'}, {label: 'Pricing'}, {label: 'Blog'}, {label: 'Payment'}];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const navigate = useNavigate();
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (goto) => {
        setAnchorElNav(null);
        navigate(goto);

    };

    return (
        <AppBar position="fixed" style={{background: "red"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <DinnerDiningIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/dashboard"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        DineEase
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {userPages.map((page, key) => (
                                <MenuItem key={key} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.label}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <DinnerDiningIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/dashboard"
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        DineEase
                    </Typography>
                    {getFromStorage("accessToken") && <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {adminPages.map((page, key) => (
                            page.badge ?
                                <Badge key={key} badgeContent={4} color="primary"
                                       style={{marginTop: "16px", marginRight: "8px"}}>
                                    <Button
                                        style={{height: "fit-content", margin: "0"}}
                                        key={key}
                                        onClick={() => handleCloseNavMenu(page?.goto)}
                                        sx={{my: 2, color: 'white', display: 'block'}}
                                    >
                                        {page.label}
                                    </Button>
                                </Badge>
                                : <Button
                                    key={key}
                                    onClick={() => handleCloseNavMenu(page?.goto)}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                >
                                    {page.label}
                                </Button>
                        ))}
                    </Box>}

                    <Box sx={{flexGrow: 1, justifyContent: 'flex-end', display: 'flex'}}>
                        {!getFromStorage("accessToken") ? <Grid>
                                <LightBlueButton style={{borderRadius: "20px"}} onClick={() => navigate("/sign-in")}>Sign
                                    In</LightBlueButton>
                                <GreenButton onClick={() => navigate("/sign-up")}>Sign Up</GreenButton>
                            </Grid> :
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-haspopup="true"
                                color="inherit"
                                onClick={() => {
                                    localStorage.clear();
                                    navigate("/sign-in");
                                }}
                            >
                                <Logout/>
                            </IconButton>}
                    </Box>
                </Toolbar>
            </Container>
            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                <SearchBar className={"w-100"}/>
            </Box>
        </AppBar>
    );
}

export default Header;
