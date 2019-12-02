import React, { useContext, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// material ui imports
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button, FormGroup, Grid } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Divider from "@material-ui/core/Divider";
import { MEMBER } from "../../util/constants";
import ContactTable from "./dashboard/ContactTable";
import AuthContext from "../../context/auth/authContext";
import "../style.css";
import { Link } from "react-router-dom";
/* FIXME: When the target will be decided, remove the rel attribute.
 * It has been added here for security reasons.
 * Reference: https://mathiasbynens.github.io/rel-noopener/
 */

const style = {
  marginTop: "112px",
  form: {
    padding: "20px",
    width: "2000px",
    marginLeft: "69px",
    marginRight: "auto",
    text: {
      appearance: "none",
      width: "100%",

      height: "35px",

      borderRadius: "5px",
      outline: "none",
      border: "none",
      background: "#e8ebed",
      color: "#576366",
      fontSize: "14px"
    }
  }
};


const Pannel = () => {

  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const [details, setDetails] = useState({
    Eventname: "",
    Date: "",
    Venue: "",
    Time: "",
    Shortdescription: ""
  });

  const handleChange = e => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value
    });
  };

  const [achiedetails, setField] = useState({
    Title: "",
    description: ""

  });

  const fieldChange = e => {
    setField({
      ...achiedetails,
      [e.target.name]: e.target.value
    });
  };


  return (
    <Container maxWidth="xl">
      <section style={style}>
        <div>
          {MEMBER.map(member => (
            <Card style={{ minWidth: "75%", minHeight: "100%" }} className='one'>
              <Grid container
                    direction="row"
                    spacing={2} style={{ padding: "20px" }}>
                <Grid container direction="row">
                  <Grid item xs={6} sm={6} md={6}>
                    <Typography variant='h1'>
                      <CardHeader
                        avatar={
                          <Avatar>
                            {user ? user.name[0] : "A"}
                          </Avatar>
                        }
                        title={user ? user.name : "Default"}
                      />
                    </Typography>
                  </Grid>

                  <Grid item xs={6} sm={6} md={6}>
                    <Typography style={{ textAlign: "end", padding: "5px", marginTop: "5px" }}>
                      <IconButton aria-label="delete">
                        <i className="fas fa-cog"/>
                      </IconButton>
                    </Typography>
                  </Grid>
                  <Divider/>
                  <br/>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Card className='card--shadow'>
                    <CardContent>
                      <ContactTable/>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <ExpansionPanel className='card--shadow'>
                    <ExpansionPanelSummary>
                      <Typography style={{ fontFamily: "Roboto", letterSpacing: "1px", fontSize: "22px" }}>
                        <b>Add Event</b>
                      </Typography>

                    </ExpansionPanelSummary>
                    <Divider/>
                    <ExpansionPanelDetails>

                      <div style={style.form}>
                        <form autoComplete='on'>
                          <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                              <FormGroup>
                                <label>Event-Name</label>
                                <br/>
                                <input
                                  style={style.form.text}
                                  type='text'
                                  name='Eventname'
                                  onChange={handleChange}
                                />
                              </FormGroup>
                              <br/>
                            </Grid>
                            <Grid item xs={12} md={4}>
                              <FormGroup>
                                <label>Date</label>
                                <br/>
                                <input
                                  style={style.form.text}
                                  type='date'
                                  name='Date'
                                  onChange={handleChange}
                                />
                                <br/>
                              </FormGroup>
                            </Grid>
                            <Grid item xs={12} md={4}>
                              <FormGroup>
                                <label>Time</label>
                                <br/>
                                <input
                                  style={style.form.text}
                                  type='time'
                                  name='Time'
                                  onChange={handleChange}
                                />
                              </FormGroup>
                              <br/>
                            </Grid>

                          </Grid>
                          <FormGroup>
                            <label>Venue</label>
                            <br/>
                            <input
                              style={style.form.text}
                              type='text'
                              name='Venue'
                              onChange={handleChange}
                            />
                          </FormGroup>
                          <br/>

                          <FormGroup>
                            <label>Short Description</label>
                            <br/>
                            <div style={{ backgroundColor: "#e8ebed", border: "solid #e8ebed" }}>
                              <Editor
                                toolbarClassName="toolbarClassName"
                                wrapperClassName="wrapperClassName"
                                editorClassName="editorClassName"
                              >
                                <input style={style.form.text}
                                       type='textarea'
                                       name='Shortdescription'
                                       onChange={handleChange}/>
                              </Editor>
                            </div>
                          </FormGroup>

                          <br/>
                          <br/>
                          <Typography className='align_center'>
                            <Button
                              variant='contained'
                              style={{ backgroundColor: "#e03030", color: "white" }}>
                              <Link to="...">Submit</Link>
                            </Button>
                          </Typography>
                        </form>
                      </div>


                      <Grid item md={6} xl={6}>
                        <Typography className='grid_item_typo'/>
                      </Grid>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </Grid>


                <Grid item xs={12} sm={6} md={6}>
                  <ExpansionPanel className='card--shadow'>
                    <ExpansionPanelSummary>
                      <Typography style={{ fontFamily: "Roboto", letterSpacing: "1px", fontSize: "22px" }}>
                        <b> Add Achievement</b>
                      </Typography>

                    </ExpansionPanelSummary>
                    <Divider/>
                    <ExpansionPanelDetails>

                      <div style={style.form}>
                        <form autoComplete='on'>
                          <FormGroup>
                            <label>Title</label>
                            <br/>
                            <input
                              style={style.form.text}
                              type='text'
                              name='Title'
                              onChange={fieldChange}
                            />
                          </FormGroup>
                          <br/>

                          <FormGroup>
                            <label>Short Description</label>
                            <br/>
                            <div style={{ backgroundColor: "#e8ebed", border: "solid #e8ebed" }}>
                              <Editor
                                toolbarClassName="toolbarClassName"
                                wrapperClassName="wrapperClassName"
                                editorClassName="editorClassName"
                              >
                                <input style={style.form.text}
                                       type='textarea'
                                       name='description'
                                       onChange={fieldChange}/>
                              </Editor>
                            </div>
                          </FormGroup>

                          <br/>
                          <br/>
                          <Typography className='align_center'>
                            <Button
                              variant='contained'
                              style={{ backgroundColor: "#e03030", color: "white" }}>
                              <Link to="...">Submit</Link>
                            </Button>
                          </Typography>
                        </form>
                        <ContactTable/>
                      </div>
                      <Grid item md={6} xl={6}>
                        <Typography className='grid_item_typo'/>
                      </Grid>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </Grid>

                <Grid item xs={12} sm={4} md={4}>
                  <Card className='card--shadow'>
                    <CardContent>
                      <Typography
                        style={{ fontFamily: "Roboto", letterSpacing: "1px", fontSize: "22px", textAlign: "center" }}>
                        <b>Volunteer Level</b>
                      </Typography>
                      <img src={member.volunteerbadage} width='100%' height='auto' style={{ marginLeft: "19px" }}
                           alt=""/>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <Card className='card--shadow'>
                    <CardContent>
                      <Typography
                        style={{ fontFamily: "Roboto", letterSpacing: "1px", fontSize: "22px", textAlign: "center" }}>
                        <b> Speaker Level</b>
                      </Typography>
                      <img src={member.speakerbadage} width='78%' height='auto' style={{ marginLeft: "49px" }} alt=""/>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <Card className='card--shadow'>
                    <CardContent>
                      <Typography
                        style={{ fontFamily: "Roboto", letterSpacing: "1px", fontSize: "22px", textAlign: "center" }}>
                        <b>Open source Contibution</b>
                      </Typography>
                      <img src={member.ossbadage} width='100%' height='auto' style={{ marginLeft: "11px" }} alt=""/>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <br/>
            </Card>
          ))}
        </div>
      </section>
    </Container>
  );
};
export default Pannel;
