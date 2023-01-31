import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { LoginComponent } from './userlist/login/login.component';
import { EventmoduleModule } from './eventmodule/eventmodule.module';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { SwitchcaseComponent } from './switchcase/switchcase.component';
import { ForloopComponent } from './forloop/forloop.component';
import { SimpleformComponent } from './simpleform/simpleform.component'
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    LoginComponent,
    PropertybindingComponent,
    ConditionsComponent,
    SwitchcaseComponent,
    ForloopComponent,
    SimpleformComponent,
    HeaderComponent,
    FooterComponent,
    StylebindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EventmoduleModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
