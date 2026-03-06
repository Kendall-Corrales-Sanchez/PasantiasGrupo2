import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { ChooseRoleComponent } from './pages/choose-role.component/choose-role.component';
import { CompanyRegisterComponent } from './pages/company-register.component/company-register.component';
import { StudentRegisterComponent } from './pages/student-register.component/student-register.component';
import { MenuLateral } from './pages/menu-lateral-student/menu-lateral-student';
import { Layout } from './pages/layout/layout';

export const routes: Routes = [
    {
        path: '',
        component: Login,
    },
    {
        path: 'registro',
        component: Register,
    },
    {
        path: 'login',
        component: Login,
    },
    {
        path: 'role',
        component: ChooseRoleComponent
    },
    {
        path: 'registerEmpresa',
        component: CompanyRegisterComponent
    },
    {
        path: 'registerStudent',
        component: StudentRegisterComponent
    },
    {
        path: 'menu',
        component: MenuLateral
    },

    {
    path: 'menus',
    component: Layout,
    children: [
      { path: 'principal', loadComponent: () => Login },
      { path: 'perfil',    loadComponent: () => Register },
      { path: 'mensajeria', loadComponent: () => CompanyRegisterComponent },
      { path: 'notificaciones', loadComponent: () => ChooseRoleComponent },
      { path: '', redirectTo: 'principal', pathMatch: 'full' },
    ],
  },

  { path: '**', redirectTo: 'login' },
];
