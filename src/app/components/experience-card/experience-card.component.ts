import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent implements OnInit {
  @Input() dataInfo: {ano: string,empresa: string,funcao: string,atribuicoes: string[]} = {
    ano: "",
    empresa: "",
    funcao: "",
    atribuicoes: []
  };

  @Input() color = 'red';
  
  @Input() side = 'right';


  constructor() { }

  ngOnInit(): void {
  
  }

}
