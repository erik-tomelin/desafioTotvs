import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PipesModule } from './pipes/pipes.module';
import { BaseHttp } from './shared/base-http';
import { DesafioComponent } from './landing/desafio.component';
import { GridComponent } from './components/grid/grid.component';
import { HeaderGridComponent } from './components/grid/header-grid/header-grid.component';
import { DetalhesDialog } from './components/grid/detalhes-dialog/detalhes-dialog.component';

const appRoutes: Routes = [
  { path: 'DesafioComponent', component: DesafioComponent },
  { path: '**', redirectTo: '/DesafioComponent' },
];

@NgModule({
  declarations: [
    AppComponent,
    DesafioComponent,

    GridComponent,
    HeaderGridComponent,

    DetalhesDialog,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,

    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,

    HttpClientModule,

    PipesModule,
  ],
  providers: [BaseHttp],
  bootstrap: [AppComponent],
})
export class AppModule {
  static appRoutes: Routes = appRoutes;
}
