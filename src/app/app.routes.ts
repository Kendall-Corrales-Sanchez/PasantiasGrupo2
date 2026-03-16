import { Routes } from '@angular/router';
import { Login } from './pages/global/login.component/login.component';
import { StudentRegisterComponent } from './pages/students/student-register.component/student-register.component';
import { MenuLateral } from './pages/students/menu-lateral-student.component/menu-lateral-student.component';
import { Layout } from './pages/global/layout.component/layout.component';
import { PerfilComponent } from './pages/students/perfil.component/perfil.component';
import { ChatComponent } from './pages/global/chat.component/chat.component'
import { PostIntershipComponent } from './pages/students/post-intership.component/post-intership.component';
import { TrackerComponent } from './pages/students/tracker.component/tracker.component';
import { ChooseRoleComponent } from './pages/global/choose-role.component/choose-role.component';
import { CompanyRegisterComponent } from './pages/companies/company-register.component/company-register.component';
import { LayoutCompanyComponent } from './pages/companies/layout-company.component/layout-company.component';
import { CrudIntershipComponent } from './pages/companies/crud-intership.component/crud-intership.component';
export const routes: Routes = [
    {
        path: '',
        component: Login,
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
      { path: 'principal', loadComponent: () => PostIntershipComponent },
      { path: 'perfil',    loadComponent: () => PerfilComponent },
      { path: 'mensajeria', loadComponent: () => ChatComponent },
      { path: 'notificaciones', loadComponent: () => TrackerComponent },
      { path: '', redirectTo: 'principal', pathMatch: 'full' },
    ],
  },
  {
    path: 'menuCompany',
    component: LayoutCompanyComponent,
    children: [
      { path: 'principal', loadComponent: () => CrudIntershipComponent },
      { path: 'perfil',    loadComponent: () => PerfilComponent },
      { path: 'mensajeria', loadComponent: () => ChatComponent },
      { path: 'notificaciones', loadComponent: () => TrackerComponent },
      { path: '', redirectTo: 'principal', pathMatch: 'full' },
    ],
  },

  { path: '**', redirectTo: 'login' },
];
