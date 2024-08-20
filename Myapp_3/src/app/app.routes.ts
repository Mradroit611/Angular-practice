import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CodeSnippetsComponent } from './components/code-snippets/code-snippets.component';
import { authGuard } from './auth.guard';
import { ViewSnippetComponent } from './components/view-snippet/view-snippet.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'codeSnippet', component: CodeSnippetsComponent, canActivate:[authGuard]},
    {path: 'about', loadComponent: () =>import('./components/about/about.component').then(mod => mod.AboutComponent)},  //lazyloading
    // {path: '', redirectTo: "/login", pathMatch:"full"},
    {path: '', component: HomeComponent},
    {path: 'snippet/:id', component: ViewSnippetComponent},
    {path: '**', component: NotFoundComponent}, //Wildcard route for 404 page it should be in the end
];
