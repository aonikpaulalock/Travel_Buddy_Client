import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(/images/heroSection2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        padding: "0 20px",
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "black"
        }}
      >
        Find Your Perfect Travel Buddy!
      </Typography>
      <Link href="/create-trip" passHref>
        <Button
          variant="contained"
          sx={{
            padding:"10px 30px",
            bgcolor: "green",
            color: "white",
            "&:hover": {
              bgcolor: "#FF4081",
            },
          }}
          size="large"
        >
          Share Your Trip
        </Button>
      </Link>
    </Box>
  );
};

export default HeroSection;
