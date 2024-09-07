import { Component } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.css'
})
export class MyProjectsComponent {
  projects = [
    { name: 'Project 1' },
    { name: 'Project 2' }
  ];
}
