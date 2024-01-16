import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./tab_pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'ranking',
    loadChildren: () => import('./tab_pages/ranking/ranking.module').then( m => m.RankingPageModule)
  },
  {
    path: 'mission',
    loadChildren: () => import('./tab_pages/mission/mission.module').then( m => m.MissionPageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./tab_pages/quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./tab_pages/home/home.module').then( m => m.HomePageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
