import { Component } from '@angular/core';
import { HelloService } from './services/hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project';

  message: string = '';

  constructor(private helloService: HelloService){}

  ngOnInit(): void{
    this.helloService.getMessage().subscribe((message: any) => {
      this.message = message.message;
    })
  }
}
