import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../components/Title';

// Generate Order Data
function createData(id, name, group, lastSeen, temp) {
  return { id, name, group, lastSeen, temp };
}

const rows = [
  createData(0, 'Node1', 'Tomaten', '3 mins ago', 20.3),
  createData(1, 'Node2', 'Graan', '5 mins ago', 20.5),
  createData(2, 'Node3', 'Tomaten', 'just now', 21.3),
  createData(3, 'Node4', 'Komkommer', 'just now', 20.4),
  createData(4, 'Node5', 'Bruce Springsteen', '1 hour ago', 21.5),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function NodeTable() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Nodes status</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Group</TableCell>
            <TableCell>Last seen</TableCell>
            <TableCell align="right">Temp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.group}</TableCell>
              <TableCell>{row.lastSeen}</TableCell>
              <TableCell align="right">{row.temp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          Add nodes
        </Link>
      </div>
    </React.Fragment>
  );
}
