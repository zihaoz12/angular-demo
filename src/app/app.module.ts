import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { DemoComponent } from './demo/demo.component';
import { DemoAlertsComponent } from './demo-alerts/demo-alerts.component';
import { DemoDetailesComponent } from './demo-detailes/demo-detailes.component';
import { AmplifyPipe } from './pipes/amplify.pipe';
import { CollaspePipe } from './pipes/collaspe.pipe';
import { UserComponent } from './user/user.component';
import { DemoTopbarComponent } from './demo-topbar/demo-topbar.component';
import { DemoModalComponent } from './demo-modal/demo-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    TodoItemComponent,
    PostsComponent,
    DemoComponent,
    DemoAlertsComponent,
    DemoDetailesComponent,
    AmplifyPipe,
    CollaspePipe,
    UserComponent,
    DemoTopbarComponent,
    DemoModalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forRoot([
      { path: '', component: DemoComponent},
      { path: 'students/:studentId', component: DemoDetailesComponent},
      { path: 'posts', component: PostsComponent},
      { path: 'signup-form', component: UserComponent}
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
