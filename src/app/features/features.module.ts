import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { FeaturesComponent } from './features.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    FeaturesComponent,
    HomeComponent,
    FooterComponent,
    SearchboxComponent,
    HeaderComponent
  ],
  imports: [CommonModule, FeaturesRoutingModule, CarouselModule, MatInputModule, MatButtonModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule]
})
export class FeaturesModule { }
