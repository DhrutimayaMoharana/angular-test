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
import { BootstapngComponent } from './bootstapng/bootstapng.component';
import { MaterialuiComponent } from './materialui/materialui.component';
import {MatButtonModule} from '@angular/material/button'
import {MatSliderModule} from '@angular/material/slider'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ChildcomponentComponent } from './parentcomponent/childcomponent/childcomponent.component';
import { CsstestcomponentComponent } from './csstestcomponent/csstestcomponent.component';
import { PipeappComponent } from './pipeapp/pipeapp.component';
import {RoutingmoduleModule} from './routingmodule/routingmodule.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomStyleDirective } from './custom-style.directive';
import { DirectiveComponentsComponent } from './directive-components/directive-components.component';
import { ServiceCallCompanentComponent } from './service-call-companent/service-call-companent.component'
import {HttpClientModule} from '@angular/common/http';
import { ModelComponent } from './model/model.component';
import { UsersModule } from './users/users.module';
import {AdminModule} from './admin/admin.module';

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
    StylebindingComponent,
    BootstapngComponent,
    MaterialuiComponent,
    ParentcomponentComponent,
    ChildcomponentComponent,
    CsstestcomponentComponent,
    PipeappComponent,
    PageNotFoundComponent,
    CustomStyleDirective,
    DirectiveComponentsComponent,
    ServiceCallCompanentComponent,
    ModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EventmoduleModule,
    FormsModule,
    NgbModule,
    MatButtonModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    RoutingmoduleModule,
    HttpClientModule,
    UsersModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
