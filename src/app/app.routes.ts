import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { ChooseRoleComponent } from './pages/choose-role.component/choose-role.component';
import { CompanyRegisterComponent } from './pages/company-register.component/company-register.component';
import { StudentRegisterComponent } from './pages/student-register.component/student-register.component';

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
];
