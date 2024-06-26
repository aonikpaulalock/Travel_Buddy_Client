import React, { useEffect, useState } from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../Sidebar/Sidebar";
import logo from "@/assets/logo.jpeg";
import {
  Avatar,
  InputAdornment,
  Menu,
  MenuItem,
  Stack,
  TextField
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Image from "next/image";

const drawerWidth = 250;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: 100,
  [theme.breakpoints.up("sm")]: {
    width: 100,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open?: boolean }>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  padding: "10px 0",
  boxShadow:
    "0px 0px 0px -0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)",
  borderBottom:
    theme.palette.mode === "dark" ? "1px solid #3f3f3f" : "1px solid #E3E3E3",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backgroundColor: "white",
  color: "black",
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open?: boolean }>(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface DashboardDrawerProps {
  children: React.ReactNode;
}

const DashboardDrawer: React.FC<DashboardDrawerProps> = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const user = useAppSelector(selectCurrentUser);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isLoading, seIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      seIsLoading(false);
    }
  }, [user]);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    const toastId = toast.loading("loading...");
    dispatch(logout());
    router.push("/login");
    toast.success("Logged out", { id: toastId, duration: 2000 });
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon sx={{ fontSize: 30, ml: 2 }} />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              px: 5,
            }}
          >
            <Box sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="logo"
                sx={{ mr: 2 }}
              >
                <Image src={logo} alt="Travel Buddy Logo" width={40} height={40} />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontWeight: "bold",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                <Link
                  href="/"
                  passHref
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "20px",
                  }}
                >
                  Travel Buddy
                </Link>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: 2,
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                onClick={handleOpenUserMenu}
                sx={{
                  cursor: "pointer"
                }}
              >
                <Avatar alt="Aonik" src="/static/images/avatar/1.jpg" />
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.mode === "dark" ? "white" : "black",
                      fontWeight: "600",
                    }}
                  >
                    {!isLoading && user &&user?.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(0, 0, 0, 0.5)",
                      fontWeight: "300",
                    }}
                  >
                    {!isLoading && user &&user?.email}
                  </Typography>
                </Box>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  keepMounted
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem
                    component={Link}
                    href="/profile"
                    onClick={handleCloseUserMenu}
                  >
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Stack>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 30px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              component="h1"
              sx={{
                fontWeight: "bold",
                color: "black",
                textDecoration: "none",
              }}
            >
              <Link
                href="/"
                passHref
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "25px",
                }}
              >
                Travel Buddy
              </Link>
            </Typography>
          </Box>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <MenuIcon />
            ) : (
              <MenuIcon sx={{ fontSize: 35 }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Sidebar open={open} />
      </Drawer>
      <Box component="main" sx={{
        flexGrow: 1, p: 3,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        height: "100vh"

      }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

export default DashboardDrawer;