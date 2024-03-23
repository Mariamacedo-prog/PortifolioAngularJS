import { Component, Input, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input() dataInfo: {image: string, name: string,description: string,color: string} = {
    image: "nochat_container.png",
    name: "No Chat",
    description: "Uma rede social, bla bla bal, Uma rede social, bla bla bal, Uma rede social, bla bla bal, ",
    color: "#00C2FF"
  };



  constructor() { }

  ngOnInit(): void {
  }
}
