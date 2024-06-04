"use client";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { TUser, setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  TextField,
  Grid,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import image from "@/assets/login.jpg"
import Image from "next/image";
const LoginPage = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [userLogin] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in...");

    const userInfo = {
      email: data.email,
      password: data.password,
    };
    const res = await userLogin(userInfo).unwrap();
    const user = verifyToken(res.data.token) as TUser;
    dispatch(setUser({ user, token: res.data.token }));
    toast.success("Logged in", { id: toastId, duration: 2000 });
    router.push(`/`);
  };

  return (
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
          padding: { xs: "0px", md: "0px", lg: "40px" }
        }}
      >
        {/* Left Side Image */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: { xs: '100%', md: '100%' },
              position: 'relative',
              overflow: { xs: "hidden" },
            }}
          >
            <Image
              src={image}
              alt="image"
              layout="fill"
              objectFit="contained"
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
              padding: { xs: '16px', md: '24px' },
            }}
          >
            <Box
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '8px',
                padding: { xs: '16px', md: '24px' },
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
                color={"purple"}
                fontWeight={"bold"}
              >
                Login
              </Typography>

              <form onSubmit={handleSubmit(onSubmit)}>
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
                  Login
                </Button>
              </form>

              <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Typography variant="body1" sx={{ color: '#333' }}>
                  Dont have an account?{' '}
                  <Button
                    color="primary"
                    variant="text"
                    onClick={() => router.push('/register')}
                  >
                    Create an account
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

export default LoginPage;
