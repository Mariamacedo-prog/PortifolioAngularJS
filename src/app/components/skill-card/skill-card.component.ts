import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css']
})
export class SkillCardComponent implements OnInit {
  inicialPercent: number = 0;
  @Input() item: {image: string,title: string, percent: number } = {
    image: "",
    title: "",
    percent: 0
  };
  constructor() { }

  ngOnInit(): void {
    this.inicialPercent = this.item.percent;
    this.animatePercentIncrease();
  }

  animatePercentIncrease() {
    let currentPercent = 0;
    const interval = 10; // Ajuste conforme necessário para a velocidade desejada

    const increaseInterval = setInterval(() => {
      if (currentPercent < this.inicialPercent) {
        currentPercent++;
        this.item.percent = currentPercent;
      } else {
        clearInterval(increaseInterval);
      }
    }, interval);

  }
}