import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import Button from "@mui/material/Button"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        height: "100vh",
        backgroundColor: "#1b1d3a",
        color: "#ff9500",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "SF Mono",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          <a href="#home">Home</a>,
          <a href="#about">About</a>,
          <a href="#projects">Projects</a>,
          <a href="#resume">Resume</a>,
          <a href="#contact">Contact</a>,
        ].map((text) => (
          <ListItem button key={Math.random()}>
            <ListItemText primary={text} sx={{ fontFamily: "SF Mono" }} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          <button className="resumeBtn sideResumeBtn">
            <a href="https://drive.google.com/file/d/1JyHbSFmMyzRroNkVbmIIpGt7FFf6OuOn/view?usp=sharing">Download My Resume</a>
          </button>,
        ].map((text) => (
          <ListItem button key={Math.random()}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <div>

          {["right"].map((anchor) => (
            <React.Fragment key={Math.random()}>
              <Button onClick={toggleDrawer(anchor, true)}>
              <i class="fa-solid fa-circle-arrow-left"></i>
              </Button>

              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}

    </div>
  )
}
