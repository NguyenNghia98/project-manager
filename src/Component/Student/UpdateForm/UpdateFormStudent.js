import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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

function UpdateFormStudent(props) {
  // Nhận các prop truyền xuống
  let { onHandleUpdate } = props;
  let stateRedux = useSelector((state) => state);
  let listGender = stateRedux.genderReducer.listGender;
  console.log("listGender",listGender);
  let listDistric = stateRedux.districReducer.listDistric;

  // Khai báo State lưu trữ giá trị của các ô nhập liệu
  let [Gmail, SetGmail] = useState("");
  let [Username, SetUsername] = useState("");
  let [Fullname, SetFullname] = useState("");
  let [Phonenumber, SetPhonenumber] = useState("");
  let [Gender, SetGender] = useState("");
  let [Distric, SetDistric] = useState("");
  //lấy các state từ redux

  let stateStudentUpdateInfoRedux = stateRedux.formUpdate.studentUpdateInfo;
  console.log("stateStudentUpdateInfoRedux",stateStudentUpdateInfoRedux);
 
  // Gọi useEffect
  useEffect(() => {
    let genId = listGender.find(
      (gender) => gender.name === stateStudentUpdateInfoRedux.gender
    ).id;
    console.log("genId",genId);

    let disId = listDistric.find(
      (distric) => distric.name === stateStudentUpdateInfoRedux.distric
    ).id;

    SetGmail(stateStudentUpdateInfoRedux.gmail);
    SetUsername(stateStudentUpdateInfoRedux.username);

    SetFullname(stateStudentUpdateInfoRedux.phonenumber);

    SetPhonenumber(stateStudentUpdateInfoRedux.fullname);
    SetGender(genId);
    SetDistric(disId);
  }, []);

  let handleReset = () => {
    SetGmail("");
    SetUsername("");
    SetFullname("");
    SetPhonenumber("");
  };
  // Hàm khai báo khi nhẫn vào nút create
  let handleUpdate = () => {
    let studentNewUpdate = {
      gmail: Gmail,
      username: Username,
      phonenumber: Phonenumber,
      fullname: Fullname,
      genderId:Gender,
      districsId:Distric,
    };
    onHandleUpdate(studentNewUpdate);
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
            <Label for="member" sm={2}>
              member
            </Label>
            <Col sm={10}>
              <Input
                type="member"
                name="member"
                id="member"
                placeholder="Please input your member"
                value={Gmail}
                onChange={(event) => {
                  SetGmail(event.target.value);
                }}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="teacher" sm={2}>
              teacher
            </Label>
            <Col sm={10}>
              <Input
                type="teacher"
                name="teacher"
                id="teacher"
                placeholder="Please input your teacher"
                value={Username}
                onChange={(event) => {
                  SetUsername(event.target.value);
                }}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="MIM" sm={2}>
              MIM
            </Label>
            <Col sm={10}>
              <Input
                type="MIM"
                name="MIM"
                id="MIM"
                placeholder="Please input your MIM"
                value={Fullname}
                onChange={(event) => {
                  SetFullname(event.target.value);
                }}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="description" sm={2}>
              description
            </Label>
            <Col sm={10}>
              <Input
                type="description"
                name="description"
                id="description"
                placeholder="Please input your description"
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
        <Button color="success" onClick={handleUpdate}>
          Update
        </Button>
        <Button color="success" onClick={handleReset}>
          Resert
        </Button>
      </Container>
    </div>
  );
}

export default UpdateFormStudent;
