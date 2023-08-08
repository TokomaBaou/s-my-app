import React from "react"
import Stack from "@mui/material/Stack"
import { styled } from "@mui/material/styles"
import Button from "@mui/material/Button"

const MyButton = styled(Button)({
  backgroundColor: "red",
  "&:hover": {
    backgroundColor: "red",
  },
})

const App: React.FC = () => {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "red",
          "&:hover": {
            backgroundColor: "red",
          },
        }}
      >
        ボタン
      </Button>
    </>
  )
}

export default App
