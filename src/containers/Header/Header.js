import React, {useEffect} from 'react';
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
import {getFromStorage, getRestIdFromToken} from "../../utils/common";
import {Logout} from "@mui/icons-material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {cartUpdate, fetchCart} from "../../redux/modules/organization/organizationActions";
import {connect} from "react-redux";
import {fetchOrderByRest} from "../../redux/modules/order/orderActions";

const adminPages = [{label: 'Dashboard', goto: "/restaurant-home"}, {label: 'Manage Menu', goto: "manage-manu"},
    {
        label: 'Manage reservation',
        badge: "reserveBadge",
        goto: "/TableManagement",
        badgeValueKey: 'reserveTableNumber',
    }, {
        label: 'Manage Pickup Order',
        badge: "orderBadge",
        badgeValueKey: 'pickUpNumber',
        goto: "/OrderManagement"
    }, {label: 'Edit Restaurant', goto: "/restaurant-home/edit"}];
const userPages = [{
    label: "My Pickup Order",
    goto: "/my-pickup-order"
}, {
    label: 'My Reservation',
    goto: "/my-reservation"
}];

function Header({getCart, organization, order, getRestOrder}) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!getRestIdFromToken() && getFromStorage("accessToken"))
            getCart();
    }, [organization.loginLoaded, order.createOrderLoaded]);

    useEffect(() => {
        if (getRestIdFromToken() && getFromStorage("accessToken"))
            getRestOrder()
    }, [organization.loginLoaded]);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (goto) => {
        setAnchorElNav(null);
        navigate(goto);

    };

    return (
        <AppBar position="fixed" style={{background: getRestIdFromToken() ? "#574e98" : "red"}}>
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
                        {(getRestIdFromToken() ? adminPages : userPages).map((page, key) => (
                            page.badge ?
                                <Badge key={key} badgeContent={order[page.badgeValueKey]} color="primary"
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
                                <GreenButton className={"border-radius-25 ml-1"} onClick={() => navigate("/sign-up")}>Sign
                                    Up</GreenButton>
                            </Grid> :
                            <>
                                <Grid>
                                    {!getRestIdFromToken() ?
                                        <Badge badgeContent={organization.cartItemQTY} color="primary"
                                               style={{marginTop: "4px", marginRight: "50px"}}>
                                            <IconButton
                                                size="large"
                                                aria-label="show more"
                                                aria-haspopup="true"
                                                color="inherit"
                                                style={{padding: 0}}
                                                onClick={() => {
                                                    navigate("/cartSummary");
                                                }}
                                            >
                                                <ShoppingCartIcon/>
                                            </IconButton>
                                        </Badge> : <></>}
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
                                    </IconButton>
                                </Grid>
                            </>}
                    </Box>
                </Toolbar>
            </Container>
            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                <SearchBar className={"w-100"}/>
            </Box>
        </AppBar>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        getCart: (data, onSuccess, onFail) => dispatch(fetchCart({data, onSuccess, onFail})),
        getRestOrder: (data, onSuccess, onFail) => dispatch(fetchOrderByRest({data, onSuccess, onFail})),
    };
};

const mapStateToProps = state => {
    return {
        organization: state.organization,
        order: state.order,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
