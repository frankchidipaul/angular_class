import { Routes } from '@angular/router';
// import { DahComponent } from './dah/dah.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DahComponent } from './dah/dah.component';
import { userGuard } from './guard/user.guard';
import { ClientComponent } from './client/client.component';
import { OneClientComponent } from './one-client/one-client.component';

export const routes: Routes = [
    { path: '', redirectTo: 'nabar', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'navbar', component: NavbarComponent },


    { path: 'dah', component: DahComponent, canActivate: [userGuard] },
    { path: 'client', component: ClientComponent },
    { path: 'oneclient/:id', component: OneClientComponent }


];
