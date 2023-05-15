import React from "react";
import { Container } from "reactstrap";
import Button from '@mui/material/Button';
function CreateButton(props) {
    // Gọi lại các props từ bên trên truyền xuống
    let { onHandleCreateNewClassroom } = props;
    // Hàm xử lý khi click vào nút CreateNewAccount
    let handleCreateNewClassroom = () => {
      console.log("handle create");
      onHandleCreateNewClassroom();
    };
  
  return (
    <div>
      <Container>
        <br />
        <Button variant="outlined" size="medium" onClick={handleCreateNewClassroom}>
          CREATE NEW CLASSROOM
        </Button>
      </Container>
    </div>
  );
}

export default CreateButton;
