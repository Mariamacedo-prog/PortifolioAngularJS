import { Component, OnInit } from '@angular/core';

const age = new Date().getFullYear() - 1995;
const ELEMENT_DATA = [
  {question: 'Name', aswer: "Maria Do Socorro De Macedo"},
  {question: 'Age',aswer: `${new Date().getMonth() < 9 ? age - 1 : age}`},
  {question: 'Address',aswer: 'Ferraz de vasconcelos, São Paulo / Brazil'},
  {question: 'Phone',aswer: '+55 (11) 98347-5047'},
  {question: 'Email',aswer: 'mariamacedo2xx@gmail.com'},
];

const DO_DATA = [
  {image: "frontend.png", title: "Front-end", description:"Creating user interfaces and experiences for websites and applications."},
  {image: "backend.png", title: "Back-end", description:"Building the server-side logic and functionality of websites and applications."},
  {image: "mobile.png", title: "Mobile", description:"Developing applications tailored for smartphones and tablets."}
];



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  displayedColumns: string[] = ['question', 'aswer'];
  dataSource = ELEMENT_DATA;
  doItens = DO_DATA;


  constructor() { }

  ngOnInit(): void {

  }

}
