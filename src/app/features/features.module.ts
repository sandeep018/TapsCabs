import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { FeaturesComponent } from './features.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    FeaturesComponent,
    HomeComponent
  ],
  imports: [CommonModule, FeaturesRoutingModule, CarouselModule]
})
export class FeaturesModule { }
