import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../App.css";
import { useNavigate } from "react-router-dom";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


export default function List_form() {
  const [list, setList]=React.useState([])
  const [msg, setMsg]=React.useState()
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/api/user-list`,
  
  )
  .then(res=>res.json())
.then(data=>{
  setList(data.data)
}).catch((e) => setMsg(e.msg))
  }, []);


  return (
    <>
      <Button
        style={{ margin: "2rem" }}
        variant="contained"
        onClick={() => navigate("/form")}
        >
        +Create Form
      </Button>

      <div style={{ margin: "2rem" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
          
                <StyledTableCell className="table-row">
                 Form_Name
                </StyledTableCell>
                <StyledTableCell className="table-row ">Date</StyledTableCell>
                <StyledTableCell></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((row,index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>{row.form_name}</StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.date}
                  </StyledTableCell>
                  {/* <StyledTableCell>{row.fat}</StyledTableCell> */}
                  <Button>view submitters</Button>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <p>{msg}</p>
      </div>
    </>
  );
}
