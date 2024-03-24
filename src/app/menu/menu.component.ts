import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  showMenu: boolean = false;
  //@Input() teste: string = "";  OU   @Input() teste!: string;
  @Input() teste: string = "";
  constructor() { 
  
  }
  
  menus = [{
    name: "home",
    route: ""
  },
  {
    name: "about",
    route: "about"
  },
  {
    name: "projects",
    route: "projects"
  },
  {
    name: "M S M",
    route: ""
  },
  {
    name: "skills",
    route: "skills"
  },
  {
    name: "contact",
    route: "contact"
  },
  {
    name: "experiences",
    route: "experiences"
  },
];

  ngOnInit(): void {
  }
  openCloseMenu(): void{
    this.showMenu = !this.showMenu;
  }
}
