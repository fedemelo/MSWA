"use client";

import { useState, useEffect } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    router.refresh();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      px={2}
    >
      <Typography variant="h2" gutterBottom>
        Detect and Segment Malignant Melanomas
      </Typography>
      <Typography variant="body1" color="textSecondary" mb={4}>
        Empowering doctors with advanced AI tools to analyze dermoscopic images.
      </Typography>
      <Stack direction="row" spacing={2}>
        {isLoggedIn ? (
          <>
            <Link href="/dashboard" passHref>
              <Button variant="contained" color="primary">
                Go to Dashboard
              </Button>
            </Link>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleSignOut}
            >
              Sign Out
            </Button>
          </>
        ) : (
          <>
            <Link href="/auth/login" passHref>
              <Button variant="contained" color="primary">
                Login
              </Button>
            </Link>
            <Link href="/auth/register" passHref>
              <Button variant="outlined" color="primary">
                Register
              </Button>
            </Link>
          </>
        )}
      </Stack>
    </Box>
  );
}
