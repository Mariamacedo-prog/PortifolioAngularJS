import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent implements OnInit {
  @Input() dataInfo: {ano: string,empresa: string,funcao: string,color: string,side: string,atribuicoes: string[]} = {
    ano: "",
    empresa: "",
    funcao: "",
    color: "",
    side: "",
    atribuicoes: []
  };

  constructor() { }

  ngOnInit(): void {
  
  }

}
