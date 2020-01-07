import React, { Component } from "react";
import Chart from "react-apexcharts";
import {
  Container,
  Grid,
} from '@material-ui/core';
import TopMenuBar from "../components/TopMenuBar";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 'hoi', 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }
  render() {
    return (
      <Container>
      <TopMenuBar block pageName="Dashboard" hamburgerMenu={false} closeButtonOnly={false} closeWithPrompt={false} backButton={true} backRoutePage="/"/>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <div className="mixed-chart">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width="500"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Dashboard;
