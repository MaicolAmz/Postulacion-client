import { AcademicFormation } from './models.index';
import {User} from '../authentication/models.index';
import {State} from '../ignug/models.index';

export class Professional {
    id: number;
    user_id: User;
    about_me: string;
    state_id: State;
    academic_formations?: AcademicFormation
}
