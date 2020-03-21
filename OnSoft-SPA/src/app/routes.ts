import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './companies/companies.component';

import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';




export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    // {
    //     path: '',
    //     runGuardsAndResolvers: 'always',
    //     //can put canActivate: [AuthGuard] in the path and it will work also   { path: 'interaction-list', component: InteractionListComponent, canActivate: [AuthGuard] }
    //     canActivate: [AuthGuard],
    //     children: [
    //         { path: 'companies', component: CompaniesComponent},
    //         { path: 'messages', component: MessagesComponent },
    //         { path: 'lists', component: ListsComponent },

    //     ]
        
    // },
    { path: 'companies', component: CompaniesComponent},
    { path: 'messages', component: MessagesComponent },
    { path: 'lists', component: ListsComponent },

    { path: '**', redirectTo: '', pathMatch: 'full' },
];
