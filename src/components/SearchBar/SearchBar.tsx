import { Box, TextField, Button } from "@mui/material";

const SearchBar = () => {
  return (
    // <Box
    //   component="form"
    //   sx={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     gap: 2,
    //     marginTop: "-40px",
    //     padding: "10px 20px",
    //     height: "auto",
    //     width: "100%",
    //     backgroundColor: "rgba(255, 255, 255, 0.9)",
    //     borderRadius: "10px",
    //     boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    //   }}
    // >
    //   <TextField
    //     label="Destination"
    //     variant="outlined"
    //     sx={{
    //       width: "250px",
    //       "& .MuiOutlinedInput-root": {
    //         "& fieldset": {
    //           borderColor: "#DDD",
    //         },
    //         "&:hover fieldset": {
    //           borderColor: "#FF4081",
    //         },
    //         "&.Mui-focused fieldset": {
    //           borderColor: "#FF4081",
    //         },
    //         backgroundColor: "#ffffff",
    //         borderRadius: "10px",
    //       },
    //       "& .MuiInputBase-input": {
    //         color: "#333",
    //       },
    //       "& .MuiInputLabel-root": {
    //         color: "#333",
    //       },
    //     }}
    //   />
    //   <TextField
    //     label="Travel Dates"
    //     type="date"
    //     InputLabelProps={{ shrink: true }}
    //     variant="outlined"
    //     sx={{
    //       width: "250px",
    //       "& .MuiOutlinedInput-root": {
    //         "& fieldset": {
    //           borderColor: "#ffffff",
    //         },
    //         "&:hover fieldset": {
    //           borderColor: "#FF4081",
    //         },
    //         "&.Mui-focused fieldset": {
    //           borderColor: "#FF4081",
    //         },
    //         backgroundColor: "#ffffff",
    //         borderRadius: "10px",
    //       },
    //       "& .MuiInputBase-input": {
    //         color: "#333",
    //       },
    //       "& .MuiInputLabel-root": {
    //         color: "#333",
    //       },
    //     }}
    //   />
    //   <TextField
    //     label="Travel Type"
    //     variant="outlined"
    //     sx={{
    //       width: "250px",
    //       "& .MuiOutlinedInput-root": {
    //         "& fieldset": {
    //           borderColor: "#ffffff",
    //         },
    //         "&:hover fieldset": {
    //           borderColor: "#FF4081",
    //         },
    //         "&.Mui-focused fieldset": {
    //           borderColor: "#FF4081",
    //         },
    //         backgroundColor: "#ffffff",
    //         borderRadius: "10px",
    //       },
    //       "& .MuiInputBase-input": {
    //         color: "#333",
    //       },
    //       "& .MuiInputLabel-root": {
    //         color: "#333",
    //       },
    //     }}
    //   />
    //   <Button
    //     variant="contained"
    //     sx={{
    //       height: "60px",
    //       borderRadius: "30px",
    //       backgroundColor: "#FF4081",
    //       color: "#fff",
    //       padding: "0 30px",
    //       fontSize: "1.2rem",
    //       "&:hover": {
    //         backgroundColor: "#F50057",
    //       },
    //     }}
    //   >
    //     Search
    //   </Button>
    // </Box>
    <Box
      component="form"
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
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderRadius: "10px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        flexWrap: "wrap",
      }}
    >
      <TextField
        label="Destination"
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
        label="Travel Dates"
        type="date"
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

    // <Box
    //   component="form"
    //   sx={{
    //     display: "flex",
    //     flexDirection: { xs: "column", sm: "row" },
    //     justifyContent: "center",
    //     alignItems: "center",
    //     gap: { xs: 1, sm: 2 },
    //     marginTop: { xs: "20px", sm: "-40px" },
    //     padding: "10px 20px",
    //     height: "auto",
    //     width: "100%",
    //     backgroundColor: "rgba(255, 255, 255, 0.9)",
    //     borderRadius: "10px",
    //     boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    //     flexWrap: "wrap",
    //   }}
    // >
    //   <TextField
    //     label="Destination"
    //     variant="outlined"
    //     sx={{
    //       width: { xs: "100%", sm: "250px" },
    //       "& .MuiOutlinedInput-root": {
    //         "& fieldset": {
    //           borderColor: "#DDD",
    //         },
    //         "&:hover fieldset": {
    //           borderColor: "#FF4081",
    //         },
    //         "&.Mui-focused fieldset": {
    //           borderColor: "#FF4081",
    //         },
    //         backgroundColor: "#ffffff",
    //         borderRadius: "10px",
    //       },
    //       "& .MuiInputBase-input": {
    //         color: "#333",
    //       },
    //       "& .MuiInputLabel-root": {
    //         color: "#333",
    //       },
    //     }}
    //   />
    //   <TextField
    //     label="Travel Dates"
    //     type="date"
    //     InputLabelProps={{ shrink: true }}
    //     variant="outlined"
    //     sx={{
    //       width: { xs: "100%", sm: "250px" },
    //       "& .MuiOutlinedInput-root": {
    //         "& fieldset": {
    //           borderColor: "#ffffff",
    //         },
    //         "&:hover fieldset": {
    //           borderColor: "#FF4081",
    //         },
    //         "&.Mui-focused fieldset": {
    //           borderColor: "#FF4081",
    //         },
    //         backgroundColor: "#ffffff",
    //         borderRadius: "10px",
    //       },
    //       "& .MuiInputBase-input": {
    //         color: "#333",
    //       },
    //       "& .MuiInputLabel-root": {
    //         color: "#333",
    //       },
    //     }}
    //   />
    //   <TextField
    //     label="Travel Type"
    //     variant="outlined"
    //     sx={{
    //       width: { xs: "100%", sm: "250px" },
    //       "& .MuiOutlinedInput-root": {
    //         "& fieldset": {
    //           borderColor: "#ffffff",
    //         },
    //         "&:hover fieldset": {
    //           borderColor: "#FF4081",
    //         },
    //         "&.Mui-focused fieldset": {
    //           borderColor: "#FF4081",
    //         },
    //         backgroundColor: "#ffffff",
    //         borderRadius: "10px",
    //       },
    //       "& .MuiInputBase-input": {
    //         color: "#333",
    //       },
    //       "& .MuiInputLabel-root": {
    //         color: "#333",
    //       },
    //     }}
    //   />
    //   <Button
    //     variant="contained"
    //     sx={{
    //       height: { xs: "50px", sm: "60px" },
    //       width: { xs: "100%", sm: "auto" },
    //       borderRadius: "30px",
    //       backgroundColor: "#FF4081",
    //       color: "#fff",
    //       padding: { xs: "0 20px", sm: "0 30px" },
    //       fontSize: { xs: "1rem", sm: "1.2rem" },
    //       "&:hover": {
    //         backgroundColor: "#F50057",
    //       },
    //       marginTop: { xs: "10px", sm: "0" },
    //     }}
    //   >
    //     Search
    //   </Button>
    // </Box>
  );
};

export default SearchBar;
