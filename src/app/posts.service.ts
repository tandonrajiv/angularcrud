import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//import { map, filter, scan } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { 

  }
  getAllPosts(){
    /*return this.http.get('/posts/').map((posts)=> {
        return posts;
    });*/
    return this.http.get('/routes/posts/');
  }
  addContact(contact){
    console.log(contact, "apple")
    
     return this.http.post('/routes/contact/', contact);
    

  } 
}
