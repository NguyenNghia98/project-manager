import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';

import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ResultFormItem from './ResultFormItem';
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
    // Lấy các props từ bên trên truyền xuống
    let { listClassroom,onHandleDelete,onHandleOpenEdit } = props;

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>ID</StyledTableCell>
          <StyledTableCell >ClassroomLevel</StyledTableCell>
          <StyledTableCell >TotalMembers</StyledTableCell>
          <StyledTableCell >Teacher</StyledTableCell>
          <StyledTableCell >MoreInfomation</StyledTableCell>
          <StyledTableCell >Description</StyledTableCell>
          <StyledTableCell >CreatedAt</StyledTableCell>
          <StyledTableCell >UpdatedAt</StyledTableCell>
          <StyledTableCell >Edit</StyledTableCell>
          <StyledTableCell >Delete</StyledTableCell>

        </TableRow>
      </TableHead>
    <ResultFormItem listClassroom ={listClassroom} onHandleDelete={onHandleDelete} onHandleOpenEdit={onHandleOpenEdit}/>

    </Table>
    
  </TableContainer>
  );
}

export default ResultForm;
