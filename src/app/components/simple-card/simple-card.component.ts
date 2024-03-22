import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.css']
})
export class SimpleCardComponent implements OnInit {
  @Input() item: {image: string, title: string, description:string} = {
    image: "", 
    title: "", 
    description:""
  };
  constructor() { }

  ngOnInit(): void {
  }

}
