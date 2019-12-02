import React from "react";
import { Container, Grid, Paper, Table, TableBody, TableCell, TableRow, Typography } from "@material-ui/core";
import { ALUMNI, TEAM_MEMBERS } from "../../util/constants";

const style = {
  container: {
    marginTop: "62px"
  },
  img: {
    maxWidth: "180px",
    minWidth: "100px",
    width: "100%",
    borderRadius: "50%",
    marginTop: "10px"
  }
};

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProfile: undefined
    };
  }

  componentDidMount() {
    const profileID = this.props.match.params.id;
    let currentProfile = TEAM_MEMBERS.filter(member => member.id.toString() === profileID)[0];
    if (!currentProfile) {
      currentProfile = ALUMNI.filter(member => member.id.toString() === profileID)[0];
    }
    this.setState({ currentProfile });
  }

  render() {
    if (!this.state.currentProfile) {
      return (<div>No Data Found...</div>);
    }
    return (
      <div style={style.container}>
        <Container fixed>
          <Grid container justify="space-between">
            <Grid item lg={2} md={4} xs={4}>
              <img src={this.state.currentProfile.Image} style={style.img} alt=""/>
            </Grid>
            <Grid item lg={10} md={8} xs={6} style={{ marginTop: "4%" }}>
              <Typography variant="h2" style={style.name}>
                {this.state.currentProfile.Name}
              </Typography>
              <Typography style={style.name}>
                {this.state.currentProfile.email}
              </Typography>
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: "16px" }}>

            <Grid item lg={10} md={12}>
              <Paper>
                <Table style={{ tableLayout: "fixed" }}>
                  <TableBody>
                    {this.state.currentProfile.details.map((detail, index) => (
                      <TableRow key={`detail-${index}`}>
                        <TableCell component="th" scope="row">{detail.title}</TableCell>
                        <TableCell align="right">{detail.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    );

  }
}
