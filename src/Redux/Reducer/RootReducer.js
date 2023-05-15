import { combineReducers } from "redux";
import FormReducer from "./FormReducer";
import ClassroomReducer from './ClassroomReducer';
import FormUpdate from "./FormUpdateReducer";
import StudentReducer from './StudentReducer';
import DistricReducer from "./DistricReducer";
import GenderReducer from "./GenderReducer";
import LevelReducer from "./LevelReducer";
const RootReducers = combineReducers({
    formReducer: FormReducer,
    classroomReducer: ClassroomReducer,
    formUpdate: FormUpdate,
    studentReducer:StudentReducer,
    districReducer:DistricReducer,
    genderReducer:GenderReducer,
    levelReducer:LevelReducer

});

export default RootReducers;


