import * as React from "react";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

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

function ResultFormItem(props) {
  let { onHandleDelete,onHandleEditButton } = props;
  // Kiểm tra nếu listStudent !="" sẽ hiển thị dữ liệu
  let stateRedux = useSelector((state) => state);
  let listStudent = stateRedux.studentReducer.listStudents;

  // Khai báo item hiển thị dữ liệu
  let items = "";
  // hàm open button edit
  let handleEditButton=(studentEdit)=>{
    onHandleEditButton(studentEdit);
  };
  // Kiểm tra nếu listStudent !="" sẽ hiển thị dữ liệu
  if (listStudent) {
    items = listStudent.content
      ? listStudent.content.map((student, index) => {
          //Khai báo hàm Delete
          let handleDelete = (studentId) => {
            onHandleDelete(studentId);

          };
          return (
            <TableRow key={index}>
              <StyledTableCell>{student.id}</StyledTableCell>
              <StyledTableCell>{student.gmail}</StyledTableCell>
              <StyledTableCell>{student.username}</StyledTableCell>
              <StyledTableCell>{student.phonenumber}</StyledTableCell>
              <StyledTableCell>{student.fullname}</StyledTableCell>
              <StyledTableCell>{student.genderGender}</StyledTableCell>
              <StyledTableCell>{student.districsDistricsname}</StyledTableCell>
              <StyledTableCell>{student.createdAt}</StyledTableCell>
              <StyledTableCell>{student.updatedAt}</StyledTableCell>
              <StyledTableCell>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={()=>handleEditButton(student)}
                >
                  EDIT
                </Button>
              </StyledTableCell>
              <StyledTableCell>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => handleDelete(student.id)}
                >
                  DELETE
                </Button>
              </StyledTableCell>
            </TableRow>
          );
        })
      : "";
  }
  return items;
}

export default ResultFormItem;
