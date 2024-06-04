"use client";
import { useRegisterMutation } from "@/redux/features/register/registerApi";
import { useAppDispatch } from "@/redux/hooks";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  TextField,
  Grid,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import image from "@/assets/register.jpg"
const Register = () => {
  // const [error, setError] = useState("");
  const [registerUser] = useRegisterMutation();
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Please wait...");
    try {
      const profile = {
        bio: "Passionate about helping people find their lost items.",
        age: 20,
      };
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
        profile,
      };
      console.log(userInfo);
      const res: any = await registerUser(userInfo);
      console.log(res);
      if (res?.error) {
        toast.error(`${data.email} Already used`, {
          id: toastId,
          duration: 2000,
        });
      } else {
        toast.success("Registration successful!", {
          id: toastId,
          duration: 2000,
        });
        router.push("/login");
      }
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId, duration: 2000 });
    }
  };

  return (
    // <Container maxWidth="xs">
    //   <Stack
    //     sx={{
    //       justifyContent: "center",
    //       alignItems: "center",
    //       height: "100vh",
    //     }}
    //   >
    //     <Box
    //       sx={{
    //         backgroundColor: "rgba(255, 255, 255, 0.8)",
    //         borderRadius: "8px",
    //         padding: "24px",
    //         boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    //       }}
    //     >
    //       <Typography
    //         variant="h5"
    //         component="h2"
    //         textAlign="center"
    //         mb={4}
    //         color={"purple"}
    //         fontSize={"bold"}
    //       >
    //         Register
    //       </Typography>

    //       <form onSubmit={handleSubmit(onSubmit)}>
    //         <TextField
    //           {...register("name")}
    //           fullWidth
    //           label="Name"
    //           variant="outlined"
    //           margin="normal"
    //           name="name"
    //           required
    //         />
    //         <TextField
    //           {...register("email")}
    //           fullWidth
    //           label="Email"
    //           variant="outlined"
    //           margin="normal"
    //           name="email"
    //           required
    //         />
    //         <TextField
    //           {...register("password")}
    //           fullWidth
    //           label="Password"
    //           variant="outlined"
    //           margin="normal"
    //           type="password"
    //           name="password"
    //           required
    //         />
    //         <Button
    //           fullWidth
    //           type="submit"
    //           variant="contained"
    //           color="primary"
    //           sx={{ mt: 3 }}
    //         >
    //           Login
    //         </Button>
    //       </form>

    //       <Box sx={{ textAlign: "center", mt: 2 }}>
    //         <Typography variant="body1" sx={{ color: "#333" }}>
    //           Already have an account?{" "}
    //           <Button
    //             color="primary"
    //             variant="text"
    //             onClick={() => router.push("/login")}
    //           >
    //           Login
    //           </Button>
    //         </Typography>
    //       </Box>
    //     </Box>
    //   </Stack>
    // </Container>

    <Container
      maxWidth="lg"
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '8px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          padding: { xs: '24px', md: '40px' }
        }}
      >
        {/* Left Side Image */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Image
              src={image}
              alt="image"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Grid>

        {/* Right Side Form */}
        <Grid item xs={12} md={6}>
          <Stack
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              padding: '24px',
            }}
          >
            <Box
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '8px',
                padding: '24px',
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
                width: '100%',
                maxWidth: '400px',
              }}
            >
              <Typography
                variant="h5"
                component="h2"
                textAlign="center"
                mb={4}
                color="purple"
                fontWeight="bold"
              >
                Register
              </Typography>

              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  {...register('name')}
                  fullWidth
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  name="name"
                  required
                />
                <TextField
                  {...register('email')}
                  fullWidth
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  name="email"
                  required
                />
                <TextField
                  {...register('password')}
                  fullWidth
                  label="Password"
                  variant="outlined"
                  margin="normal"
                  type="password"
                  name="password"
                  required
                />
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3 }}
                >
                  Register
                </Button>
              </form>

              <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Typography variant="body1" sx={{ color: '#333' }}>
                  Already have an account?{' '}
                  <Button
                    color="primary"
                    variant="text"
                    onClick={() => router.push('/login')}
                  >
                    Login
                  </Button>
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Container>

  );
};

export default Register;
