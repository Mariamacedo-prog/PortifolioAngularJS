import { Component, OnInit , HostListener} from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  listExperiences=[
    {
      ano: "Dezembro 2021 - Abril 2023",
      empresa: "TechnoJP – Consultoria em Tecnologia da informação LTDA",
      color: "#00C2FF",
      side: "left",
      funcao: " Desenvolvedor Full-Stack ",
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
      color: "#00ff95",
      side: "right",
      funcao: "Estágio: Desenvolvedor Mobile ",
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
      color: "#f87ae7",
      side: "left",
      funcao: "FREELANCE: Web developer",
      atribuicoes: [
        "Desenvolvi um site para um empresa de contrutora;",
        "Desenvolvimento do site na linguagen: Angular 13;",
        "Consertos de Bugs;"
      ]
    },
    {
      ano: "Outubro 2022",
      empresa: "OLIVEIRA",
      color: "#f87a7a",
      side: "right",
      funcao: "FREELANCE: Web developer",
      atribuicoes: [
        "Desenvolvimento do site na linguagen: Angular 13;",
        "Desenvolvimento de backend nas linguagens: PHP / laravel;",
        "Consertos de Bugs;"
      ]
    },
    {
      ano: "Abril 2023 - Março 2024",
      empresa: "INEXPRON TECNOLOGIA E REPRESENTAÇÃO LTDA",
      color: "#ff970e",
      side: "left",
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

  visibleCards = 2;

  constructor() { }

  ngOnInit(): void {
  }

 // Detecta o evento de rolagem
 @HostListener('window:scroll', ['$event'])
 onScroll(event: any): void {
   const pos = (document.documentElement.scrollTop || document.body.scrollTop) + window.innerHeight;
   const max = document.documentElement.scrollHeight;
   
   // Se o usuário rolar para baixo e estiver perto da metade da tela
   if (pos >= max / 2) {
     this.loadMore(); // Carrega mais cartões
   }
 }

 // Função para carregar mais cartões
 loadMore(): void {
   this.visibleCards +=1; // Adicione o número de cartões que deseja carregar a cada vez
 }
}
