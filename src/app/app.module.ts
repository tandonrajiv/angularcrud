import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
//import { PostsComponent } from './posts/';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './posts.service';
import { ContactComponent } from './contact/contact.component';
import { FormsModule }   from '@angular/forms';

const Routes = [
    {
      path:'',
      redirectTo: 'posts',
      pathMatch: 'full'
    },
    {
      path:'posts',
      component:PostsComponent
    },
    {
      path:'contact',
      component:ContactComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
	FormsModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
