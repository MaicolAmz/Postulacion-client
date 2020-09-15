import {Routes} from '@angular/router';
import {AuthGuard} from '../../../shared/auth-guard/auth.guard';
import {AppOffersComponent} from './offers/app.offers.component';
import {AppProfessionalsComponent} from './professionals/app.professionals.component';
import { AppProfessionalReferenceComponent } from '../professional/professional-reference/app-professional-references.component';


export const LandingRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'offers',
                component: AppOffersComponent,
                // canActivate: [AuthGuard]
            },
            {
                path: 'professionals',
                component: AppProfessionalsComponent,
                // canActivate: [AuthGuard]
            },
        ]
    }
];
