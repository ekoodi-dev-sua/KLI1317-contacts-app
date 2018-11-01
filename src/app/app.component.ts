import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KLI1317-contacts-app';
  name: string;
  greeting: string;
  greetings: string[];

  constructor() {
    this.greeting = 'Hello, World';
    this.name = 'World';
    this.greetings = [];
  }

  onSubmitGreeting() {
    const submittedGreeting = 'Hello, ' + this.name + '!';
    this.greetings.push(submittedGreeting);
    console.log(this.greetings);
  }
}
