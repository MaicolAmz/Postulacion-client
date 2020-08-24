import {Routes} from '@angular/router';

import {AuthGuard} from '../../shared/auth-guard/auth.guard';
import { ProfessionalsComponent } from './professionals/professionals.component';

export const JobBoardRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'professionals',
                component: ProfessionalsComponent,
                // canActivate: [AuthGuard]
            },
        ]
    }
];
