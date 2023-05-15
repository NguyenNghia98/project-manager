import React, { useState } from "react";
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
import { generateId } from "./../../Utils/Helpers/generateId";
import { getNowDate } from "./../../Utils/Helpers/getNowDate";

function InputForm(props) {
  // Gọi lại các props từ bên trên truyền xuống
  let { onHandleCreateClassroom,listClassroom } = props;
  // Khai báo State lưu trữ giá trị của các ô nhập liệu
  let [Level, SetLevel] = useState("");
  let [Totalmembers, SetTotalmembers] = useState("");
  let [Teacher, SetTeacher] = useState("");
  let [MoreInfomation, SetMoreInfomation] = useState("");
  let [Description, SetDescription] = useState("");
  let stateRedux = useSelector((state)=>state);
  let listLevel = stateRedux.levelReducer.listLevel;
  console.log("listLevel",listLevel);

  // Hàm xử lý khi click vào nút Create
  let handleCreate = () => {
    let classroomNew = {
      id: generateId(),
      level: Level,
      totalMembers: Totalmembers,
      teacher: Teacher,
      moreInfomation: MoreInfomation,
      description: Description,
      createAt: getNowDate(),
      updatedAt: getNowDate(),
    };
    onHandleCreateClassroom(classroomNew);
    console.log("classroomNew",classroomNew);

  };

  // Hàm xử lý khi click vào nút Reset
  let handleReset = () => {
    // Set lại State các ô nhập liệu về ""
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
      </Form>
      <Button color="success" onClick={handleCreate}>
        Create
      </Button>
      <Button color="success" onClick={handleReset} >Resert</Button>
    </Container>
  );
}

export default InputForm;
