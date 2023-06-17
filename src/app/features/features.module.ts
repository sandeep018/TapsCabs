import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    FeaturesComponent,
    HomeComponent
  ],
  imports: [CommonModule, FeaturesRoutingModule]
})
export class FeaturesModule { }
