import { Component, signal } from '@angular/core';
import { LayoutComponent } from '../layout-component/layout-component';

@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  ngOnInit() {


  }
}
