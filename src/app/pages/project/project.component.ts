import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  listProjects=[
    {
      image: "nochat_container.png",
      name: "No Chat",
      description: "An Social Media developed using ReactJs, NodeJS with express and MongoDB for database.\nDeployed on Netlify. ",
      color: "#00C2FF",
      link:"https://nochat.netlify.app/"
    },
    {
      image: "caris_container.png",
      name: "Caris",
      description: "A web site developed using Angular with Angular Material.\nDeployed on Netlify.",
      color: "#00ff95",
      link:"https://caris-desenvolvimento.netlify.app/#/"
    },
    {
      image: "oliveira_container.png",
      name: "Oliveira",
      description: "A web site developed using Angular with Angular Material.\nDeployed on Netlify.",
      color: "#f87ae7",
      link:"https://oliveira-mm.netlify.app/#/"
    },
    {
      image: "olx_container.png",
      name: "OLX",
      description: "An Ecommerce developed using ReactJs, NodeJS with express and MongoDB for database.\nDeployed on Netlify. ",
      color: "#f87a7a",
      link:"https://olx-maria-macedo.netlify.app/"
    },
    {
      image: "mario_container.png",
      name: "Mario Game",
      description: "Mario game, developed using HTML, CSS, Javascript and Kaboom.\n Deployed on Vercel and database Appwrite ",
      color: "#ff970e",
      link:"https://mario-javascript-seven.vercel.app/"
    },
    {
      image: "jogo_tiro_container.png",
      name: "Shooting game",
      description: "A shooting game, developed using HTML, CSS, and jQuery.\nDeployed on Netlify.",
      color: "#ff85",
      link:"https://jogodenave.netlify.app/"
    },
  ]
  constructor() { }

  ngOnInit(): void {
    document.documentElement.scrollTop = -2000;
  }
  visibleCards = 2;
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
