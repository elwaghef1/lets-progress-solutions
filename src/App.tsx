import React from 'react';
import './App.css';
import SearchIcon from '@mui/icons-material/Search';
import Shortcut from './components/shortcut';
import { TextField, IconButton, Avatar, Typography } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import AppsIcon from '@mui/icons-material/Apps';
import { shortcuts } from './constants/Images';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="top-right-container">
          <Typography style={{ marginRight: 10 }}>Gmail</Typography>
          <Typography style={{ marginRight: 10 }}>Images</Typography>
          <IconButton color="inherit">
            <AppsIcon  />
          </IconButton>
          <Avatar style={{ backgroundColor: 'violet', height: 20, width:20, padding: 2 }}>J</Avatar>
        </div>
        <h1>Google</h1>

        <div className="search-container">
          <TextField 
            variant="outlined" 
            fullWidth 
            placeholder="Search Google r type a URL" 
            InputProps={{
              endAdornment: (
                <React.Fragment>
                  <IconButton>
                    <MicIcon />
                  </IconButton>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </React.Fragment>
              )
            }}
          />
        </div>

        <div className="shortcuts-container">
          <div className="row">
            {shortcuts.map((shortcut, index) => (
              <Shortcut key={index} {...shortcut} />
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
