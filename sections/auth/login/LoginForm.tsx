import React, { useState } from "react"
// import { useNavigate } from "react-router-dom"
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from "@mui/material"
import { LoadingButton } from "@mui/lab"
// components
import Iconify from "../../../components/iconify"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import { useRouter } from "next/router"

const label = { inputProps: { "aria-label": "Remember me" } }

const LoginForm: React.FC = () => {
  // const navigate = useNavigate()
  const router = useRouter()
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleClick = (): void => {
    // navigate("/dashboard", { replace: true })
    router.push("/dashboard")
  }

  return (
    <>
      <FormGroup>
        <Stack spacing={3}>
          <TextField name="email" label="Email address" />

          <TextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    <Iconify icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
          <Link variant="subtitle2" underline="hover">
            Forgot password?
          </Link>
        </Stack>
      </FormGroup>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Login
      </LoadingButton>
    </>
  )
}

export default LoginForm
