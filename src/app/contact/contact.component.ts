import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
  model = new Contact('', '');
  
  constructor(private postsService:PostsService) {}

  ngOnInit() {
  }

  get currentContact() { return JSON.stringify(this.model); }
   
  save(product):void{
    console.log(product, "product");
    this.postsService.addContact(product);
  }
  

}
