import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Grid } from '@material-ui/core';
import TopMenuBar from "../components/TopMenuBar";
import BottomMenuBar from '../components/BottomMenuBar';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
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
      <>
      <TopMenuBar block pageName="Dashboard" hamburgerMenu={true} closeButtonOnly={false} closeWithPrompt={false} backButton={true} backRoutePage="/"/>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <div className="mixed-chart" align="center">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
              />
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
              />
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
              />
            </div>
          </Grid>
        </Grid>
        <BottomMenuBar slectedIcon={1} block/>
      </>
    );
  }
}

export default Dashboard;
