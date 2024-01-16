import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../tab_pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'quiz',
        loadChildren: () => import('../tab_pages/quiz/quiz.module').then(m => m.QuizPageModule)
      },
      {
        path: 'mission',
        loadChildren: () => import('../tab_pages/mission/mission.module').then(m => m.MissionPageModule)
      },
      {
        path: 'ranking',
        loadChildren: () => import('../tab_pages/ranking/ranking.module').then(m => m.RankingPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../tab_pages/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
