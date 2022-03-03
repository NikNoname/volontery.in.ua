import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesModule } from './cities/cities.module';
import { CategoriesModule } from './categories/categories.module';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ModalModule } from './shared/modal/modal.module';
import { IpService } from './shared/services/ip.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CitiesModule,
    CategoriesModule,
    ModalModule,
    HttpClientModule
  ],
  providers: [IpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
