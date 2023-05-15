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

function UpdateForm(props) {
  // Gọi lại các props từ bên trên truyền xuống
  let { onHandleCreateEdit } = props;
  //Khai báo các hàm
  let stateRedux = useSelector((state) => state);
  let listLevel = stateRedux.levelReducer.listLevel;
  console.log("listLevel",listLevel);


  // Khai báo State lưu trữ giá trị của các ô nhập liệu
  let [Level, SetLevel] = useState("");
  let [Totalmembers, SetTotalmembers] = useState("");
  let [Teacher, SetTeacher] = useState("");
  let [MoreInfomation, SetMoreInfomation] = useState("");
  let [Description, SetDescription] = useState("");
  //  // Lấy các State từ Redux
  let stateClassroomUpdateInfoRedux = stateRedux.formUpdate.classroomUpdateInfo;
  console.log("stateClassroomUpdateInfoRedux",stateClassroomUpdateInfoRedux);





  //gọi useEffect
  useEffect(() => {
    let levId = listLevel.find(
      (level) => level.name === stateClassroomUpdateInfoRedux.level
    ).id;
console.log("levId",levId);




    SetTotalmembers(stateClassroomUpdateInfoRedux.totalMembers);

    SetTeacher(stateClassroomUpdateInfoRedux.teacher);

    SetMoreInfomation(stateClassroomUpdateInfoRedux.moreInfomation);
    SetDescription(stateClassroomUpdateInfoRedux.description);
    SetLevel(levId);
   
  }, []);
  console.log("stateClassroomUpdateInfoRedux.teacher",stateClassroomUpdateInfoRedux.teacher);


  // Khai báo khi nhấn vào nút Edit
  let handleCreateEdit = () => {
    let classroomUpdate = {
      levelId: Level,
      totalMembers: Totalmembers,
      teacher: Teacher,
      moreInfomation: MoreInfomation,
      description: Description,
    };
    //log

    onHandleCreateEdit(classroomUpdate);
   
    //handleReset
  };
  let handleReset = () => {
    SetTotalmembers("");
    SetTeacher("");
    SetMoreInfomation("");
    SetDescription("");
  };
   // Hiển thị danh sách Level
    // Hiển thị danh sách Gender
    let levelItem = listLevel.map((level, index) => {
      return (
        <option value={level.id} key={index}>
          {level.level}
        </option>
      );
    });

  return (
    <Container>
      <Form>
      <FormGroup>
          <Label for="level">level</Label>
          <Input
            type="select"
            name="select"
            id="exampleSelect"
            value={Level}
            onChange={(event) => {
              SetLevel(event.target.value);
            }}
          >
            {/* <option>NURSERY</option>
            <option>PRIMARY</option>
            <option>JUNIOR</option>
            <option>HIGH</option> */}
            {levelItem}
          </Input>
        </FormGroup>
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
              value={Totalmembers}
              onChange={(event) => {
                SetTotalmembers(event.target.value);
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
              value={Teacher}
              onChange={(event) => {
                SetTeacher(event.target.value);
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
              value={MoreInfomation}
              onChange={(event) => {
                SetMoreInfomation(event.target.value);
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
              value={Description}
              onChange={(event) => {
                SetDescription(event.target.value);
              }}
            />
          </Col>
        </FormGroup>
        <Button variant="contained" color="success" onClick={handleCreateEdit}>
          Edit
        </Button>
        <Button variant="contained" color="success" onClick={handleReset}>
          Reset
        </Button>
      </Form>
    </Container>
  );
}

export default UpdateForm;
