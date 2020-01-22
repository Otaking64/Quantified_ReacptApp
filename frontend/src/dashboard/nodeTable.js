import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../components/Title';
import Firebase from "firebase";




// Generate Order Data
function createData(id, name, group, lastSeen, temp) {
  return { id, name, group, lastSeen, temp };
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const rows = [
];




//make sure page doesn't get refreshed on submit
function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function NodeTable() {
  const[loaded, isItLoaded] = React.useState(false);
  var user = Firebase.auth().currentUser;

  if (user) {
    const uid = user.uid;
    //load nodes from firestore
    Firebase.firestore().collection(uid).get().then(function(querySnapshot){
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        let nodedata = doc.data();
        let idn = doc.id;
        let groupn = nodedata.group;
        let namen = nodedata.name;
        let statusn = "Online"; //nodedata.status
        let temp = getRndInteger(25,30)
        let nodeExists = false;

        //node object that gets loaded into rows
        let newnode = createData(idn, namen, groupn, statusn, temp)
        //check if node is already in the list
        rows.forEach(function (n) {
          if(n.id === idn){
            nodeExists = true;
          }else if (idn ==="nodes"){
            nodeExists = true;
          }else{
            //nothing, node is already in the list
          }
        })

        if (!nodeExists){
          rows.push(newnode);
        }


      });
      isItLoaded(true)
    })

  }else{

  }



  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Nodes status</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Group</TableCell>
            <TableCell>Status</TableCell>
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
