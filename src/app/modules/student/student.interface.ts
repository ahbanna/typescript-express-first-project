// create an interface
export type Username = {
  firstName: string;
  MiddleName: string;
  lastName: string;
};
export type Guardian = {
  fatherName: string;
  fatherProfession: string;
  fatherContactNo: string;
  motherName: string;
  motherProfession: string;
  motherContactNo: string;
};
export type LocalGuardian = {
  name: string;
  profession: string;
  contactNo: string;
};

export type Student = {
  id: string;
  name: Username;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImage?: string;
  isActive: 'active' | 'blocked';
};
