import { FormComponent } from './form/form.component';
import { DataComponent } from './data/data.component';
import {Routes,RouterModule} from '@angular/router'



const routes:Routes=[
    {path:'data', component:DataComponent},
    {path:'form',component:FormComponent},
    {path:'**',component:FormComponent},
    
];

export const routing=RouterModule.forRoot(routes);