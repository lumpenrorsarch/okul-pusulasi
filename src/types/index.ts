export type Role = 'superadmin' | 'admin' | 'teacher' | 'parent';
export type AttendanceStatus = 'present' | 'absent' | 'late';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  title: string;
  school?: string;
  initials: string;
}

export interface School {
  id: string;
  name: string;
  city: string;
  students: number;
  classes: number;
  teachers: number;
  parents: number;
  status: 'Aktif' | 'Deneme';
  principal: string;
  plan: string;
}

export interface Student {
  id: string;
  name: string;
  className: string;
  parent: string;
  attendance: AttendanceStatus;
  avatar: string;
}

export interface Announcement {
  id: string;
  title: string;
  audience: string;
  date: string;
  color: string;
}

export interface ScheduleItem {
  time: string;
  subject: string;
  teacher: string;
  color: string;
}
