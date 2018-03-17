import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service'; // bring dataservice to component
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  exp: number;
  email: string;
  address: Address;
  skills: any[]; // can b string[] or number[]
  posts: Post[];
  isEditFlag:boolean;

  constructor(private dataService:DataService) { // Dependency servicxe wired to component
    console.log('constructor ran');
  }

  ngOnInit() {
    console.log('ngoninit ran');
    this.name = 'Simerdeep Singh';
    this.email= 'simerbhatti@gmail.com';
    this.age = 30;
    this.exp = 8;
    this.skills = ['Java', 'Spring', 'Angular4'];
    this.address = {
      street : 'tawnberry circle',
      city : 'Brampton',
      state : 'Ontario'
    };
    this.dataService.getPosts().subscribe((posts)=> { //coz this is obsrvable so it shud subscribe
      this.posts = posts;
    });
    this.isEditFlag = false;
  }

  onClickSim() {
    this.address.street = 'Tawnberry circle';
    this.skills.push('MySql');
    console.log('Hellow');
  }

  addSkill(skill) {
    console.log(skill);
    this.skills.unshift(skill);
    return false;
  }

  deleteSkill(skill) {
    for(let i = 0; i < this.skills.length; i++) {
      if (this.skills[i] == skill) {
        this.skills.splice(i, 1);
      }
    }
  }

  toggleEdit() {
    this.isEditFlag=!this.isEditFlag;
  }
}
interface Address {
    street: string;
    city: string;
    state: string;
}
    interface Post {
      id: number;
      title: string;
      body: string;
      userId:number;
    }
