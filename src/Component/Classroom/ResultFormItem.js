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
  // Lấy các props từ bên trên truyền xuống
  // let { listClassroom } = props;
  let { onHandleDelete, onHandleOpenEdit } = props;
  let stateRedux = useSelector((state) => state);
  let listClassroom = stateRedux.classroomReducer.listClassrooms;

  let items = "";
  // Khai báo khi nhấn vào nút  edit
  let handleOpenEdit = (ClassroomEdit) => {
    onHandleOpenEdit(ClassroomEdit);
    console.log("ClassroomEdit", ClassroomEdit);
  };
  // Kiểm tra nếu listClassroom !="" sẽ hiển thị dữ liệu
  if (listClassroom) {
    items = listClassroom.content
      ? listClassroom.content.map((classroom, index) => {
          //Khai báo hàm delete
          let handleDelete = (classroomid) => {
            onHandleDelete(classroomid);
          };
          return (
            <TableRow key={index}>
              <StyledTableCell>{classroom.id}</StyledTableCell>
              <StyledTableCell>{classroom.levelLevel}</StyledTableCell>
              <StyledTableCell>{classroom.totalMembers}</StyledTableCell>
              <StyledTableCell>{classroom.teacher}</StyledTableCell>
              <StyledTableCell>{classroom.moreInfomation}</StyledTableCell>
              <StyledTableCell>{classroom.description}</StyledTableCell>
              <StyledTableCell>{classroom.createdAt}</StyledTableCell>
              <StyledTableCell>{classroom.updatedAt}</StyledTableCell>
              <StyledTableCell>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => handleOpenEdit(classroom)}
                >
                  EDIT
                </Button>
              </StyledTableCell>
              <StyledTableCell>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => handleDelete(classroom.id)}
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
