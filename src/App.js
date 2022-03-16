import * as React from 'react';
import './App.css';
import { Card, CardHeader, CardActions, CardContent, Button, Grid, List, ListItem, ListItemText } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';


function App() {
  return (
    <div className="App">

      <div className="CardContainer">

        <Card className="Card" sx={{
          width: 320,
          height: 500,
          padding: 3,
          borderRadius: 8
        }}>
          <CardHeader
            title="Free"
            subheader="$0/month" />
          <hr></hr>
          <CardContent>
            <List>
              <ListItem disablePadding>
                <DoneIcon color="success" />
                <ListItemText primary="Single User" />
              </ListItem>
              <ListItem disablePadding>
                <DoneIcon color="success" />
                <ListItemText primary=" 5GB Storage" />
              </ListItem>
              <ListItem disablePadding>
                <DoneIcon color="success" />
                <ListItemText primary="Unlimited Public Projects" />
              </ListItem>
              <ListItem disablePadding>
                <DoneIcon color="success" />
                <ListItemText primary=" Community Access" />
              </ListItem>
              <ListItem disablePadding>
                <ClearIcon color="disabled" />
                <ListItemText primary=" Unlimited Private Projects" />
              </ListItem>
              <ListItem disablePadding>
                <ClearIcon color="disabled" />
                <ListItemText primary=" Dedicated Phone Support" />
              </ListItem>
              <ListItem disablePadding>
                <ClearIcon color="disabled" />
                <ListItemText primary=" Free Subdomain" />
              </ListItem>
              <ListItem disablePadding>
                <ClearIcon color="disabled" />
                <ListItemText primary=" Monthly Status Reports" />
              </ListItem>
            </List>

          </CardContent>
          <CardActions>
            <Button variant="contained" size="large" sx={{
              fontSize: 16,
              color: "text.secondary",
              width: 380,
              borderRadius: 6
            }}>Button</Button>
          </CardActions>
        </Card>

        <Card className="Card" sx={{
          width: 320,
          height: 500,
          padding: 3,
          borderRadius: 8
        }}>
          <CardHeader
            title="Plus"
            subheader="$9/month" />
          <hr></hr>
          <CardContent>
            <List>
              <ListItem disablePadding>
                <DoneIcon color="success" />
                <ListItemText primary="5 Users" />
              </ListItem>
              <ListItem disablePadding>
                <DoneIcon color="success" />
                <ListItemText primary=" 50GB Storage" />
              </ListItem>
              <ListItem disablePadding>
                <DoneIcon color="success" />
                <ListItemText primary="Unlimited Public Projects" />
              </ListItem>
              <ListItem disablePadding>
                <DoneIcon color="success" />
                <ListItemText primary=" Community Access" />
              </ListItem>
              <ListItem disablePadding>
                <DoneIcon color="success" />
                <ListItemText primary=" Unlimited Private Projects" />
              </ListItem>
              <ListItem disablePadding>
                <DoneIcon color="success" />
                <ListItemText primary=" Dedicated Phone Support" />
              </ListItem>
              <ListItem disablePadding>
                <DoneIcon color="success" />
                <ListItemText primary=" Free Subdomain" />
              </ListItem>
              <ListItem disablePadding>
                <ClearIcon color="disabled" />
                <ListItemText primary=" Monthly Status Reports" />
              </ListItem>
            </List>

          </CardContent>
          <CardActions>
            <Button variant="contained" size="large" sx={{
              fontSize: 16,
              color: "text.secondary",
              width: 380,
              borderRadius: 6
            }}>Button</Button>
          </CardActions>
        </Card>

        <Card className="Card" sx={{
          width: 320,
          height: 500,
          padding: 3,
          borderRadius: 8
        }}>
          <CardHeader
            title="Pro"
            subheader="$49/month" />
          <hr></hr>
          <CardContent>
            <List>
              <ListItem disablePadding>
                <DoneIcon color="success" />
                <ListItemText primary="Unlimited Users" />
              </ListItem>
              <ListItem disablePadding>
                <DoneIcon color="success" />
                <ListItemText primary=" 150GB Storage" />
              </ListItem>
              <ListItem disablePadding>
                <DoneIcon color="success" />
                <ListItemText primary="Unlimited Public Projects" />
              </ListItem>
              <ListItem disablePadding>
                <DoneIcon color="success" />
                <ListItemText primary=" Community Access" />
              </ListItem>
              <ListItem disablePadding>
                <DoneIcon color="success" />
                <ListItemText primary=" Unlimited Private Projects" />
              </ListItem>
              <ListItem disablePadding>
                <DoneIcon color="success" />
                <ListItemText primary=" Dedicated Phone Support" />
              </ListItem>
              <ListItem disablePadding>
                <DoneIcon color="success" />
                <ListItemText primary=" Free Subdomain" />
              </ListItem>
              <ListItem disablePadding>
                <DoneIcon color="success" />
                <ListItemText primary=" Monthly Status Reports" />
              </ListItem>
            </List>

          </CardContent>
          <CardActions>
            <Button variant="contained" size="large" sx={{
              fontSize: 16,
              color: "text.secondary",
              width: 380,
              borderRadius: 6
            }}>Button</Button>
          </CardActions>
        </Card>



      </div>
    </div>
  );
}

export default App;
