import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


    @ViewChild('plantPart') nextSection!: ElementRef;

    scrollToNextSection() : void {
        this.nextSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
}
