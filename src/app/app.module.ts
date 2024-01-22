import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { GreetingSectionComponent } from './components/greeting-section/greeting-section.component';
import { GroupsComponent } from './components/groups/groups.component';
import { FooterComponent } from './components/footer/footer.component';
import { RoutingModule } from './modules/routing/routing.module';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    GreetingSectionComponent,
    GroupsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
