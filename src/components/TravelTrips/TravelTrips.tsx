"use client";
import { useGetAllTripsQuery } from "@/redux/features/trip/tripApi";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Link,
  TextField,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import Loading from "../loading/loading";

const cardVariants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const TravelTips = () => {
  const [destination, setDestination] = useState("");
  const [travelDates, setTravelDates] = useState("");
  const [travelType, setTravelType] = useState("");
  const [query, setQuery] = useState({});

  const { data: trips, isLoading } = useGetAllTripsQuery(query);

  const handleSearch = (event: any) => {
    event.preventDefault();
    const newQuery = {
      destination,
      startDate: travelDates,
      type: travelType,
    };
    setQuery(newQuery);
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSearch}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 1, sm: 2 },
          marginTop: { xs: "20px", sm: "-40px" },
          padding: "30px 0px",
          height: "auto",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          flexWrap: "wrap",
        }}
      >
        <TextField
          label="Destination"
          variant="outlined"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          sx={{
            marginBottom: { xs: "10px", sm: "0px" },
            width: { xs: "90%", sm: "300px" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#DDD",
              },
              "&:hover fieldset": {
                borderColor: "#FF4081",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#FF4081",
              },
              backgroundColor: "#ffffff",
              borderRadius: "10px",
            },
            "& .MuiInputBase-input": {
              color: "#333",
            },
            "& .MuiInputLabel-root": {
              color: "#333",
            },
          }}
        />
        <TextField
          label="Travel Dates"
          type="date"
          value={travelDates}
          onChange={(e) => setTravelDates(e.target.value)}
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          sx={{
            marginBottom: { xs: "10px", sm: "0px" },
            width: { xs: "90%", sm: "300px" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#DDD",
              },
              "&:hover fieldset": {
                borderColor: "#FF4081",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#FF4081",
              },
              backgroundColor: "#ffffff",
              borderRadius: "10px",
            },
            "& .MuiInputBase-input": {
              color: "#333",
            },
            "& .MuiInputLabel-root": {
              color: "#333",
            },
          }}
        />
        <TextField
          label="Travel Type"
          variant="outlined"
          value={travelType}
          onChange={(e) => setTravelType(e.target.value)}
          sx={{
            marginBottom: { xs: "10px", sm: "0px" },
            width: { xs: "90%", sm: "300px" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#DDD",
              },
              "&:hover fieldset": {
                borderColor: "#FF4081",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#FF4081",
              },
              backgroundColor: "#ffffff",
              borderRadius: "10px",
            },
            "& .MuiInputBase-input": {
              color: "#333",
            },
            "& .MuiInputLabel-root": {
              color: "#333",
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            height: { xs: "40px", sm: "50px" },
            width: { xs: "90%", sm: "auto" },
            borderRadius: "10px",
            backgroundColor: "#FF4081",
            color: "#fff",
            padding: { xs: "0 15px", sm: "0 20px" },
            fontSize: { xs: "1rem", sm: "1rem" },
            "&:hover": {
              backgroundColor: "#F50057",
            },
            marginTop: { xs: "10px", sm: "0" },
          }}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          py: 6,
          px:4,
          my: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            fontWeight="bold"
            mb={4}
            sx={{
              color: "#333",
              textTransform: "uppercase",
              letterSpacing: 1,
              fontWeight: "bold"
            }}
          >
            Travel Tips and Guides
          </Typography>
          {
            !isLoading ? <Grid container spacing={4}>
              {trips?.data?.map((trip: any) => (
                <Grid item xs={12} sm={6} md={4} key={trip.id}>
                  <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={cardVariants}
                  >
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: 3,
                        borderRadius: 3,
                        overflow: "hidden",
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        image={trip?.photo}
                        alt={trip?.destination}
                        sx={{ filter: "brightness(0.85)" }}
                      />
                      <CardContent
                        sx={{
                          flexGrow: 1,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          background:
                            "linear-gradient(to bottom right, #ffffff, #f0f2f5)",
                        }}
                      >
                        <Box>
                          <Typography
                            variant="h6"
                            component="h3"
                            fontWeight="bold"
                            sx={{ color: "#444", mb: 1 }}
                          >
                            {trip.destination}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            mb={1}
                          >
                            {trip?.description}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            mb={2}
                          >
                            Travel Dates: {trip?.startDate} - {trip?.endDate}
                          </Typography>
                        </Box>
                        <Link href={`trip-details/${trip.id}`}>
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: "teal",
                              color: "#fff",
                              "&:hover": {
                                backgroundColor: "green",
                              },
                            }}
                            fullWidth
                          >
                            Read More
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid> :
              <Loading />
          }
        </Container>
      </Box>
    </>
  );
};

export default TravelTips;