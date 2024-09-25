import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Home page route
  { path: 'privacy-policy', component: PrivacyPolicyComponent },  // Privacy policy route
  { path: 'terms-of-use', component: TermsOfUseComponent },  // Terms of use route
  { path: '**', redirectTo: '', pathMatch: 'full' }  // Wildcard route for invalid paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
