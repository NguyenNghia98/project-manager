import React from "react";
import { Container } from "reactstrap";
import Button from '@mui/material/Button';


function CreateButton(props) {
  //gọi các prop từ bên trên truyền xuống
  let {onHandleCreateStudent}=props;
  let handleCreateStudent =()=>{
    onHandleCreateStudent();
  };

    return (
 
        <div>
            <Container>
        <br />
        <Button variant="outlined" size="medium" onClick={handleCreateStudent} >
          CREATE NEW STUDENT
        </Button>
      </Container>
            
        </div>
    );
}

export default CreateButton;