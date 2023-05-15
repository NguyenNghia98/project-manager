import React, { useState }  from "react";
import {

    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Container,
  } from "reactstrap";
  import { generateId } from './../../Utils/Helpers/generateId';
  import { getNowDate } from './../../Utils/Helpers/getNowDate';
import { useSelector } from 'react-redux';
function InputForm(props) {
  // Nhận các prop truyền xuống
  let {onHandleCreate
    // ,listGender,listDistric
  } = props;
  let stateRedux = useSelector((state)=>state);
  let listGender = stateRedux.genderReducer.listGender;
  let listDistric = stateRedux.districReducer.listDistric;
      // Khai báo State lưu trữ giá trị của các ô nhập liệu
  let [Gmail, SetGmail] = useState("");
  let [Username, SetUsername] = useState("");
  let [Fullname, SetFullname] = useState("");
  let [Phonenumber, SetPhonenumber] = useState("");
  let [Gender, SetGender] = useState("");
  let [Distric, SetDistric] = useState("");
  let handleReset =()=>{
    SetGmail("");
    SetUsername("");
    SetFullname("");
    SetPhonenumber("");
  };
  // Hàm khai báo khi nhẫn vào nút create
  let handleCreate =()=>{
    let studentNew ={
      id:generateId(),
      gmail:Gmail,
      username:Username,
      phonenumber:Phonenumber,
      fullname:Fullname,
      gender:Gender,
      dicstric:Distric,
      createdDate:getNowDate,
      updaatedDate:getNowDate
    };
    onHandleCreate(studentNew);
  };
    // Hiển thị danh sách Gender
    let genderItem = listGender.map((gender, index) => {
      return (
        <option value={gender.id} key={index}>
          {gender.gender}
        </option>
      );
    });
 // Hiển thị danh sách Distric
 let districItem = listDistric.map((distric, index) => {
  return (
    <option value={distric.id} key={index}>
      {distric.districsname}
    </option>
  );
});

  
    return (
        <div>
        <Container>
        <Form>
          
          <FormGroup row>
            <Label for="gmail" sm={2}>
            gmail
            </Label>
            <Col sm={10}>
              <Input
                type="gmail"
                name="gmail"
                id="gmail"
                placeholder="Please input your gmail"
                value={Gmail}
                onChange={(event) => {
                  SetGmail(event.target.value);
                }}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="username" sm={2}>
            username
            </Label>
            <Col sm={10}>
              <Input
                type="username"
                name="username"
                id="username"
                placeholder="Please input your username"
                value={Username}
                onChange={(event) => {
                  SetUsername(event.target.value);
                }}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="fullname" sm={2}>
            fullname
            </Label>
            <Col sm={10}>
              <Input
                type="fullname"
                name="fullname"
                id="fullname"
                placeholder="Please input your fullname"
                value={Fullname}
                onChange={(event) => {
                  SetFullname(event.target.value);
                }}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="phonenumber" sm={2}>
            phonenumber
            </Label>
            <Col sm={10}>
              <Input
                type="phonenumber"
                name="phonenumber"
                id="phonenumber"
                placeholder="Please input your phonenumber"
                value={Phonenumber}
                onChange={(event) => {
                  SetPhonenumber(event.target.value);
                }}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Label for="gender">Gender</Label>
            <Input
              type="select"
              name="select"
              id="exampleSelect"
              value={Gender}
              onChange={(event) => {
                SetGender(event.target.value);
              }}
            >
              {/* <option>MALE</option>
              <option>FEMALE</option>
              <option>UNKNOWN</option> */}
              {genderItem}
             
              {/* {levelItem} */}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="distric">Distric</Label>
            <Input
              type="select"
              name="select"
              id="exampleSelect"
              value={Distric}
              onChange={(event) => {
                SetDistric(event.target.value);
              }}
            >
              {/* <option>Tay Ho</option>
              <option>Hoan Kiem</option>
              <option>Cau Giay</option>
              <option>Ba Dinh</option> */}
              {districItem}
             
              {/* {levelItem} */}
            </Input>
          </FormGroup>
        </Form>
        <Button color="success" onClick={handleCreate} >
          Create
        </Button>
        <Button color="success" onClick={handleReset} >Resert</Button>
      </Container>
      </div>
    );
}

export default InputForm;