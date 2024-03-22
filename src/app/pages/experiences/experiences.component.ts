import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  dataInfo: {ano: string,empresa: string,funcao: string,atribuicoes: string[]} = {
    ano: "",
    empresa: "",
    funcao: "",
    atribuicoes: []
  };

  listExperiences=[
    {
      ano: "Dezembro 2021 - Abril 2023",
      empresa: "TechnoJP – Consultoria em Tecnologia da informação LTDA",
      funcao: " Desenvolver Full-Stack ",
      atribuicoes: [
        "Uso da metodologia ágil (Scrum e Kanban);",
        "Desenvolvimento de frontend nas linguagens: Angular 13, AngularJS, Svelte e VueJS;",
        "Desenvolvimento de backend nas linguagens: NodeJS e Java 8;",
        "Banco de dados utilizados: SQL Server e PostgreSql nas versões 9.6, 12 e 14;",
        "Consertos de Bugs;",
        "Desenvolvimento de um sistema de RH com utilização do JAVA com Spring e Hibernate;",
        "Desenvolvimento sistemas governamentais;"
      ]
    },
    {
      ano: "Junho 2022 - Outubro 2022",
      empresa: "CYBER1 DO BRASIL LTDA",
      funcao: "Estágio: Desenvolver Mobile ",
      atribuicoes: [
        "Uso da metodologia ágil (Scrum e Kanban);",
        "Desenvolvimento de app nas linguagens: Angular 13 com IONIC;",
        "Desenvolvimento de backend nas linguagens: PHP / laravel;",
        "Consertos de Bugs;",
        "Ajustes de tela com utilização do Android Studio;",
        "Expo Go para testes direto no Celular;"
      ]
    },
    {
      ano: "Agosto 2022",
      empresa: "CARIS",
      funcao: "FREELANCE: Desenvolver um site",
      atribuicoes: [
        "Desenvolvi um site para um empresa de contrutora;",
        "Desenvolvimento do site na linguagen: Angular 13;",
        "Consertos de Bugs;"
      ]
    },
    {
      ano: "Outubro 2022",
      empresa: "OLIVEIRA",
      funcao: "FREELANCE: Desenvolver um site",
      atribuicoes: [
        "Desenvolvimento do site na linguagen: Angular 13;",
        "Desenvolvimento de backend nas linguagens: PHP / laravel;",
        "Consertos de Bugs;"
      ]
    },
    {
      ano: "Abril 2023 - Março 2024",
      empresa: "INEXPRON TECNOLOGIA E REPRESENTAÇÃO LTDA",
      funcao: "Desenvolvedor Full-Stack",
      atribuicoes: [
        "Analise de incidentes;",
        "Participar de Reuniões de Planeamento mensal e diário;",
        "Realização de rotinas diárias para liberar a malha;",
        "Consertos de Bugs;",
        "Desenvolvimento de frontend na linguagem: AngularJS",
        "Desenvolvimento de backend nas linguagens: Java com Spring Boot e Hibernate;",
        "WebSphere Application Server (WAS);",
        "Utilização do Jenkins para integração contínua, automatizando o processo de construção, teste e implantação de aplicações;"
      ]
    }
  ]

  color = 'red';
  
  side = 'right';

  constructor() { }

  ngOnInit(): void {
  }

}
