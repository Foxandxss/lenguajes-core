import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { LenguajeDetailsComponent } from './components/Lenguajes/lenguaje-details.component';
import { LenguajeListComponent } from './components/Lenguajes/lenguaje-list.component';
import { LenguajeComponent } from './components/Lenguajes/lenguaje.component';
import { RatingPipe } from './shared/rating.pipe';
import { LenguajeService } from './shared/lenguaje.service';

@NgModule({
    declarations: [
        AppComponent,
        LenguajeListComponent,
        LenguajeDetailsComponent,
        LenguajeComponent,
        RatingPipe
    ],
    providers: [ LenguajeService ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: '/lenguajes', pathMatch: 'full' },
            { path: 'lenguajes', component: LenguajeListComponent },
            { path: 'lenguajes/:id', component: LenguajeDetailsComponent },
            { path: 'admin', loadChildren: './components/admin/admin.module#AdminModule' }
        ])
    ]
})
export class AppModuleShared {
}
