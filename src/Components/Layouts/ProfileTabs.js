import React, { useContext } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import AuthContext from "../../context/auth/authContext";

const style = {
  card: {
    back: {
      backgroundColor: "#1a2a6c",
      height: "10%"
    },

    borderRadius: "20px"
  }
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

export default function ProfileTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation='vertical'
        variant='scrollable'
        value={value}
        onChange={handleChange}
        aria-label='Vertical tabs example'
        className={classes.tabs}
      >
        <Tab label='Profile' {...a11yProps(0)} />
        <Tab label='Registered Events' {...a11yProps(1)} />
        <Tab label='Item Three' {...a11yProps(2)} />
        <Tab label='Item Four' {...a11yProps(3)} />
        <Tab label='Item Five' {...a11yProps(4)} />
        <Tab label='Item Six' {...a11yProps(5)} />
        <Tab label='Item Seven' {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Card style={style.card}>
          <CardContent className='profile-info'>
            <Grid container>
              <Grid item lg={10} md={12}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell component='th' scope='row'>
                        Name
                      </TableCell>
                      <TableCell align='right'>{user && user.name}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component='th' scope='row'>
                        Email
                      </TableCell>
                      <TableCell align='right'>{user && user.email}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component='th' scope='row'>
                        Role
                      </TableCell>
                      <TableCell align='right'>{user && user.role}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
