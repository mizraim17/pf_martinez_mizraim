import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PaginaErrorComponent } from './components/pagina-error/pagina-error.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ToolbarComponent, HomeComponent, PaginaErrorComponent],
  imports: [SharedModule, RouterModule, CommonModule, HttpClientModule],
  exports: [
    ToolbarComponent,
    HomeComponent,
    PaginaErrorComponent,
    HttpClientModule,
  ],
})
export class CoreModule {}
