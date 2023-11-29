// import { Schema, model, connect } from 'mongoose';
import { Schema, model } from 'mongoose';
// create a schema
import {
  Guardian,
  LocalGuardian,
  Student,
  Username,
} from './student/student.interface';

const userNameSchema = new Schema<Username>({
  firstName: {
    type: String,
    required: true,
  },
  MiddleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherProfession: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherProfession: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  profession: { type: String, required: true },
  contactNo: { type: String, required: true },
});
const studentSchema = new Schema<Student>({
  id: { type: String },
  // name: {
  //   firstName: {
  //     type: String,
  //     required: true,
  //   },
  //   MiddleName: {
  //     type: String,
  //   },
  //   lastName: {
  //     type: String,
  //     required: true,
  //   },
  // },
  name: userNameSchema,
  gender: ['male', 'female'],
  // dateOfBirth: String,
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  // guardian: {
  //   fatherName: { type: String, required: true },
  //   fatherProfession: { type: String, required: true },
  //   fatherContactNo: { type: String, required: true },
  //   motherName: { type: String, required: true },
  //   motherProfession: { type: String, required: true },
  //   motherContactNo: { type: String, required: true },
  // },
  guardian: guardianSchema,
  // localGuardian: {
  //   name: { type: String, required: true },
  //   profession: { type: String, required: true },
  //   contactNo: { type: String, required: true },
  // },
  localGuardian: localGuardianSchema,
  profileImage: { type: String },
  isActive: ['active', 'blocked'],
});

// create a model
export const StudentModel = model<Student>('Student', studentSchema);
