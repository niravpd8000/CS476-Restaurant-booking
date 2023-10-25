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
import {Grid} from "@mui/material";
import SearchBar from "../../reusable/SearchBar";
import {useNavigate} from "react-router-dom";

const pages = ['Products', 'Pricing', 'Blog'];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate();
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    // const handleOpenUserMenu = (event) => {
    //     setAnchorElUser(event.currentTarget);
    // };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };

    return (
        <AppBar position="fixed" style={{background:"red"}}>
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
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
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
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {/*<SearchBar className={"w-50"}/>*/}
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <Grid>
                            <LightBlueButton style={{borderRadius: "20px"}} onClick={() => navigate("/sign-in")}>Sign
                                In</LightBlueButton>
                            <GreenButton onClick={() => navigate("/sign-up")}>Sign Up</GreenButton>
                        </Grid>
                        {/*<Tooltip title="Open settings">*/}
                        {/*    <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>*/}
                        {/*        <Avatar alt="Nemy Sharp" src="/static/images/avatar/2.jpg"/>*/}
                        {/*    </IconButton>*/}
                        {/*</Tooltip>*/}
                        {/*<Menu*/}
                        {/*    sx={{mt: '45px'}}*/}
                        {/*    id="menu-appbar"*/}
                        {/*    anchorEl={anchorElUser}*/}
                        {/*    anchorOrigin={{*/}
                        {/*        vertical: 'top',*/}
                        {/*        horizontal: 'right',*/}
                        {/*    }}*/}
                        {/*    keepMounted*/}
                        {/*    transformOrigin={{*/}
                        {/*        vertical: 'top',*/}
                        {/*        horizontal: 'right',*/}
                        {/*    }}*/}
                        {/*    open={Boolean(anchorElUser)}*/}
                        {/*    onClose={handleCloseUserMenu}*/}
                        {/*>*/}
                        {/*    {settings.map((setting) => (*/}
                        {/*        <MenuItem key={setting} onClick={handleCloseUserMenu}>*/}
                        {/*            <Typography textAlign="center">{setting}</Typography>*/}
                        {/*        </MenuItem>*/}
                        {/*    ))}*/}

                        {/*</Menu>*/}

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
