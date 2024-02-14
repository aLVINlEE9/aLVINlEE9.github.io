import * as React from "react";
import { ColorModeContext } from "../App";
import { useTheme } from "@mui/material/styles";
import { useContext } from "react";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  const { title } = props;
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <React.Fragment>
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* <Button size="small">Subscribe</Button> */}
        <Typography
          component="h2"
          variant="h4"
          color="inherit"
          style={{ fontFamily: "Caveat", cursor: "pointer" }}
          onClick={() => {
            window.location.href = "/";
          }}
          // sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <div
          style={{ display: "flex", flexDirection: "row", alignItems: "end" }}
        >
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Box
            sx={{
              bgcolor: "background.default",
              color: "text.primary",
              borderRadius: 1,
              fontSize: "0.75rem",
            }}
          >
            {theme.palette.mode} mode
            <IconButton
              sx={{ ml: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Box>
        </div>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{
          justifyContent: "center",
          overflowX: "auto",
          flexDirection: "column",
          padding: 2,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
          <Link
            color="inherit"
            noWrap
            variant="body2"
            href="https://github.com/aLVINlEE9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon fontSize="large" />
          </Link>
          <Link
            color="inherit"
            noWrap
            variant="body2"
            href="https://www.linkedin.com/in/alvinlee9/"
            target="_blank"
          >
            <LinkedInIcon fontSize="large" />
          </Link>
          <Link
            color="inherit"
            noWrap
            variant="body2"
            href="https://youtube.com/@CODEMINER-wk5lv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon fontSize="large" />
          </Link>

          <Link
            color="inherit"
            noWrap
            variant="body2"
            href="mailto:fldh3746@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon fontSize="large" />
          </Link>
        </Box>
        <Typography variant="body2" fontSize="20px" fontWeight="bold">
          Dreaming Beyond Limits, Developing Beyond Boundaries
        </Typography>
      </Toolbar>
    </React.Fragment>
  );
}
