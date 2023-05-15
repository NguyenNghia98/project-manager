import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import ResultFormItem from './ResultFormItem';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
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
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  
  function ResultForm(props) {
    let {onHandleDelete,onHandleEditButton}=props;
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell >Gmail</StyledTableCell>
              <StyledTableCell >Username</StyledTableCell>
              <StyledTableCell >Fullname</StyledTableCell>
              <StyledTableCell >PhoneNumber</StyledTableCell>
              <StyledTableCell >Gender</StyledTableCell>
              <StyledTableCell >Distric</StyledTableCell>
              <StyledTableCell >CreatedAt</StyledTableCell>
              <StyledTableCell >UpdatedAt</StyledTableCell>
              <StyledTableCell >Edit</StyledTableCell>
              <StyledTableCell >Delete</StyledTableCell>
    
            </TableRow>
          </TableHead>
        <ResultFormItem 
        onHandleDelete={onHandleDelete} 
        onHandleEditButton={onHandleEditButton}
        />
       </Table>
        
      </TableContainer>
    );
  }
  
  export default ResultForm;