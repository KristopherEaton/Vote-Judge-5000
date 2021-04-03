import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { CurrentComponent } from './components/current/current.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { VotingComponent } from './components/voting/voting.component';

const routes: Routes = [
   
  { path: 'home', component: HomeComponent },
  { path: 'current', component: CurrentComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'voting', component: VotingComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy',
    }),
  ],
  providers: [],
})
export class AppRoutingModule {}
