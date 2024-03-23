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
      description: "Uma rede social, bla bla bal, Uma rede social, bla bla bal, Uma rede social, bla bla bal, ",
      color: "#00C2FF"
    },
    {
      image: "caris_container.png",
      name: "Caris",
      description: "Uma rede social, bla bla bal, Uma rede social, bla bla bal, Uma rede social, bla bla bal, ",
      color: "#00ff95"
    },
    {
      image: "oliveira_container.png",
      name: "Oliveira",
      description: "Uma rede social, bla bla bal, Uma rede social, bla bla bal, Uma rede social, bla bla bal, ",
      color: "#f87ae7"
    },
    {
      image: "olx_container.png",
      name: "OLX",
      description: "Uma rede social, bla bla bal, Uma rede social, bla bla bal, Uma rede social, bla bla bal, ",
      color: "#f87a7a"
    },
    {
      image: "mario_container.png",
      name: "Jogo Mario",
      description: "Uma rede social, bla bla bal, Uma rede social, bla bla bal, Uma rede social, bla bla bal, ",
      color: "#ff970e"
    },
    {
      image: "jogo_tiro_container.png",
      name: "Jogo Mario",
      description: "Uma rede social, bla bla bal, Uma rede social, bla bla bal, Uma rede social, bla bla bal, ",
      color: "#ff85"
    },
  ]
  constructor() { }

  ngOnInit(): void {
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
