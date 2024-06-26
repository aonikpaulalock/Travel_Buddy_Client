"use client";
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "@/assets/logo.jpeg";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const user = useAppSelector(selectCurrentUser);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [isLoading, seIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    const toastId = toast.loading("loading...");
    dispatch(logout());
    router.push("/login");
    toast.success("Logged out", { id: toastId, duration: 2000 });
  };

  useEffect(() => {
    if (user) {
      seIsLoading(false);
    }
  }, [user]);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const drawer = (
    <Box
      sx={{ width: 250, bgcolor: "#f9f9f9" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem component="a" href="/" button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem component="a" href="/about" button>
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem component="a" href="/travels" button>
          <ListItemText primary="Travels" />
        </ListItem>
        <ListItem component="a" href="/login" button>
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem component="a" href="/register" button>
          <ListItemText primary="Register" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: "none",
        backgroundColor: "transparent"
      }}
    >
      <Container>
        <Toolbar disableGutters>
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
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <>
              <Link href="/" passHref>
                <Button
                  variant="text"
                  sx={{
                    color: "#black",
                    fontWeight: "medium",
                  }}
                >
                  Home
                </Button>
              </Link>
              <Link href="/about" passHref>
                <Button
                  variant="text"
                  sx={{
                    color: "#black",
                    fontWeight: "medium",
                  }}
                >
                  About Us
                </Button>
              </Link>
              {/* {!isLoading && user && (
                <>
                  <Link href="/travels" passHref>
                    <Button
                      variant="text"
                      sx={{
                        color: "#black",
                        fontWeight: "medium",
                      }}
                    >
                      Travels
                    </Button>
                  </Link>
                  <Link href="/dashboard" passHref>
                    <Button
                      variant="text"
                      sx={{
                        color: "#black",
                        fontWeight: "medium",
                      }}
                    >
                      Dashboard
                    </Button>
                  </Link>
                </>
              )} */}
              {!isLoading && user && (
                <Link href="/travels" passHref>
                  <Button
                    variant="text"
                    sx={{
                      color: "#black",
                      fontWeight: "medium",
                    }}
                  >
                    Travels
                  </Button>
                </Link>
              )}
              {!isLoading && user && user?.role === "ADMIN" && (
                <Link href="/dashboard" passHref>
                  <Button
                    variant="text"
                    sx={{
                      color: "#black",
                      fontWeight: "medium",
                    }}
                  >
                    Dashboard
                  </Button>
                </Link>
              )}
              {!isLoading && user ? (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open Menu">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt={user?.name || "Aonik"}
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  </Tooltip>
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
                </Box>
              ) : (
                <Link href="/login" passHref>
                  <Button
                    variant="text"
                    sx={{
                      color: "#black",
                      fontWeight: "medium",
                    }}
                  >
                    Login
                  </Button>
                </Link>
              )}
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;