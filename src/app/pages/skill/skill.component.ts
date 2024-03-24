import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

listSkills = [
  {
    image: "angular.png",
    title: "ANGULAR",
    percent: 90
  },
  {
    image: "html.png",
    title: "HTML",
    percent: 90
  },
  {
    image: "css.png",
    title: "CSS",
    percent: 90
  },
  {
    image: "javascript.png",
    title: "JAVASCRIPT",
    percent: 90
  },
  {
    image: "java.png",
    title: "JAVA",
    percent: 80
  },
  {
    image: "nodejs.png",
    title: "NODE JS",
    percent: 80
  },
  {
    image: "react.png",
    title: "REACT JS",
    percent: 80
  },
  {
    image: "typescript.png",
    title: "TYPESCRIPT",
    percent: 80
  },
  {
    image: "ionic.png",
    title: "IONIC",
    percent: 70
  },

  {
    image: "git.png",
    title: "GIT",
    percent: 70
  },

  {
    image: "postgres.png",
    title: "POSTGRES",
    percent: 70
  },

  {
    image: "mongodb.png",
    title: "MONGO DB",
    percent: 70
  },
  {
    image: "oracle.png",
    title: "ORACLE",
    percent: 60
  },
  {
    image: "react-native.png",
    title: "REACT NATIVE",
    percent: 60
  },
  {
    image: "bootstrap.png",
    title: "BOOTSTRAP",
    percent: 60
  },
  {
    image: "tailwind.png",
    title: "TAILWIND",
    percent: 50
  },
  {
    image: "mysql.png",
    title: "MYSQL",
    percent: 50
  }
]
  constructor() { }

  ngOnInit(): void {
    document.documentElement.scrollTop = -2000;
  }

}
