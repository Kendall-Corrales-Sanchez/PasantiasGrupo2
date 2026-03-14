import { Routes } from '@angular/router';
import { Login } from './pages/login.component/login.component';
import { Register } from './pages/register.component/register.component';
import { ChooseRoleComponent } from './pages/choose-role.component/choose-role.component';
import { CompanyRegisterComponent } from './pages/company-register.component/company-register.component';
import { StudentRegisterComponent } from './pages/student-register.component/student-register.component';
import { MenuLateral } from './pages/menu-lateral-student.component/menu-lateral-student.component';
import { Layout } from './pages/layout.component/layout.component';
import { Intership } from './pages/intership.component/intership.component';
import { PerfilComponent } from './pages/perfil.component/perfil.component';
import { ChatComponent } from './pages/chat.component/chat.component'

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
      { path: 'principal', loadComponent: () => Intership },
      { path: 'perfil',    loadComponent: () => PerfilComponent },
      { path: 'mensajeria', loadComponent: () => ChatComponent },
      { path: 'notificaciones', loadComponent: () => ChooseRoleComponent },
      { path: '', redirectTo: 'principal', pathMatch: 'full' },
    ],
  },

  { path: '**', redirectTo: 'login' },
];
