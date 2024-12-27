import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Root rotasını login'e yönlendir
  { path: 'login', component: LoginComponent }, // Login rotası
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Router'ı başlat
  exports: [RouterModule],
})
export class AppRoutingModule {}
