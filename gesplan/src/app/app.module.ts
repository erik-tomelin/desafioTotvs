// app.module.ts
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
    MatDialogActions,
    MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DesafioComponent } from './components/desafio/desafio.component';
import { DetalhesDialog } from './components/desafio/dialogs/detalhes/detalhes-dialog.component';
import { GridComponent } from './components/desafio/grid/grid.component';
import { PipesModule } from './pipes/pipes.module';
import { BaseHttp } from './shared/base-http';

const appRoutes: Routes = [
    { path: 'DesafioComponent', component: DesafioComponent },
    { path: '**', redirectTo: '/DesafioComponent' }
];

@NgModule({
    declarations: [
        AppComponent,
        DesafioComponent,
        GridComponent,

        DetalhesDialog
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),

        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,

        HttpClientModule,

        PipesModule
    ],
    providers: [
        BaseHttp,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    static appRoutes: Routes = appRoutes;
}
