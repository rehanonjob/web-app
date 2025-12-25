import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Departments } from './pages/departments/departments';
import { Employee } from './pages/employee/employee';
import { Login } from './pages/login/login';
import { Employeedashboard } from './pages/employeedashboard/employeedashboard';
import { Profile } from './pages/profile/profile';
import { AttendenceList } from './components/attendence-list/attendence-list';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'departments', component: Departments },
  { path: 'employees', component: Employee },
  { path: 'login', component: Login },
  { path: 'employee-dashboard', component: Employeedashboard },
  { path: 'profile', component: Profile },
  { path: 'attendence-list', component: AttendenceList },
];
