import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //   isdisp: boolean = true;
  //     hidebox(){
  //   this.isdisp =!this.isdisp;
  // }
  // Directive NgFor
  // items: string[] =['home','product','blog','contact']
  // Directive ngClass
  error: boolean = false;

}
