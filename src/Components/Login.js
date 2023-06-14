// // import * as React from 'react';
// // import Avatar from '@mui/material/Avatar';
// // import Button from '@mui/material/Button';
// // import CssBaseline from '@mui/material/CssBaseline';
// // import TextField from '@mui/material/TextField';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import Checkbox from '@mui/material/Checkbox';
// // // import Link from '@mui/material/Link';
// // import Paper from '@mui/material/Paper';
// // import Box from '@mui/material/Box';
// // import Grid from '@mui/material/Grid';
// // import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// // import Typography from '@mui/material/Typography';
// // import { createTheme, ThemeProvider } from '@mui/material/styles';
// // import { Link } from "react-router-dom";

// // // TODO remove, this demo shouldn't need to reset the theme.

// // const defaultTheme = createTheme();

// // export default function SignInSide() {
// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     const data = new FormData(event.currentTarget);
// //     console.log({
// //       username: data.get('username'),
// //       password: data.get('password'),
// //     });
// //   };

// //   return (
// //     <ThemeProvider theme={defaultTheme}>
// //       <Grid container component="main" sx={{ height: '100vh' }}>
// //         <CssBaseline />
// //         <Grid
// //           item
// //           xs={false}
// //           sm={4}
// //           md={7}
// //           sx={{
// //             backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
// //             backgroundRepeat: 'no-repeat',
// //             backgroundColor: (t) =>
// //               t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
// //             backgroundSize: 'cover',
// //             backgroundPosition: 'center',
// //           }}
// //         />
// //         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
// //           <Box
// //             sx={{
// //               my: 8,
// //               mx: 4,
// //               display: 'flex',
// //               flexDirection: 'column',
// //               alignItems: 'center',
// //             }}
// //           >
// //             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
// //               <LockOutlinedIcon />
// //             </Avatar>
// //             <Typography component="h1" variant="h5">
// //               Sign in
// //             </Typography>
// //             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
// //               <TextField
// //                 margin="normal"
// //                 required
// //                 fullWidth
// //                 id="username"
// //                 label="username"
// //                 name="username"
// //                 autoComplete="username"
// //                 autoFocus
// //               />
// //               <TextField
// //                 margin="normal"
// //                 required
// //                 fullWidth
// //                 name="password"
// //                 label="Password"
// //                 type="password"
// //                 id="password"
// //                 autoComplete="current-password"
// //               />
// //               <FormControlLabel
// //                 control={<Checkbox value="remember" color="primary" />}
// //                 label="Remember me"
// //               />
// //               <Button
// //                 type="submit"
// //                 fullWidth
// //                 variant="contained"
// //                 sx={{ mt: 3, mb: 2 }}
// //               >
// //                 Sign In
// //               </Button>
// //               <Grid container>
// //                 <Grid item xs>
// //                   {/* <Link href="#" variant="body2">
// //                     Forgot password?
// //                   </Link> */}
// //                 </Grid>
// //                 <Grid item>
// //                   <Link Link to="/Signup" variant="body2">
// //                     {"Don't have an account? Sign Up"}
// //                   </Link>
// //                 </Grid>
// //               </Grid>
             
// //             </Box>
// //           </Box>
// //         </Grid>
// //       </Grid>
// //     </ThemeProvider>
// //   );
// // }

// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { Link } from "react-router-dom";

// export default function SignInSide() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       username: data.get('username'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <Grid container component="main" sx={{ height: '100vh' }}>
//       <CssBaseline />
//       <Grid
//         item
//         xs={false}
//         sm={4}
//         md={7}
//         sx={{
//           backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
//           backgroundRepeat: 'no-repeat',
//           backgroundColor: (t) =>
//             t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         {/* Add the image or any other content here */}
//         {/* Example: */}
//         {/* <img src="your-image-url" alt="Background Image" /> */}
//       </Grid>
//       <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//         <Box
//           sx={{
//             my: 8,
//             mx: 4,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="username"
//               label="username"
//               name="username"
//               autoComplete="username"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 {/* <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link> */}
//               </Grid>
//               <Grid item>
//                 <Link Link to="/Signup" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// }

import React, { useState } from "react";
import Axios from "axios";
// import "../App.css";

export default function Login() {
 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const [loginStatus, setLoginStatus] = useState("");

  // Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("http://localhost:3000/login", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response);
      // if (response.data.message) {
      //   setLoginStatus(response.data.message);
      // } else {
      //   setLoginStatus(response.data[0].username);
      // }
    });
  };

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/login").then((response) => {
  //     if (response.data.loggedIn == true) {
  //       setLoginStatus(response.data.user[0].username);
  //     }
  //   });
  // }, []);

  return (
    <div className="App">
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}> Login </button>
      </div>
{/* 
      <h1>{loginStatus}</h1> */}
    </div>
  );
}
