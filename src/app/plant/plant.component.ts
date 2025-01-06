import {Component, Input, OnInit} from '@angular/core';
import {Plant} from '../models/Plant';
import {Router} from '@angular/router';
import {PlantService} from '../service/plant/plant-service.service';

@Component({
  selector: 'app-plant',
  standalone: false,

  templateUrl: './plant.component.html',
  styleUrl: './plant.component.css'
})
export class PlantComponent implements OnInit {
    @Input() plant!: Plant;

    constructor(private plantService: PlantService,
                private router: Router) {}

    ngOnInit() {
    }
}
