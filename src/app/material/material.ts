import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';


 @NgModule({
     imports: [
        MatButtonModule,
        MatDatepickerModule,
        MatInputModule,
        MatMenuModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatSidenavModule
     ],

     exports: [
        MatButtonModule,
        MatDatepickerModule,
        MatInputModule,
        MatMenuModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatSidenavModule
     ]
 })

 export class MaterialModule{}
