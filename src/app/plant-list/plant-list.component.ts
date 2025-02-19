import {Component, Input, numberAttribute, OnInit} from '@angular/core';
import {map, Observable} from 'rxjs';
import {PlantService} from '../service/plant/plant-service.service';

@Component({
  selector: 'app-plant-list',
  standalone: false,

  templateUrl: './plant-list.component.html',
  styleUrl: './plant-list.component.css'
})
export class PlantListComponent implements OnInit {
    @Input({transform: numberAttribute}) limit: number = 3;

    plants$!: Observable<any>;

    constructor(private plantService: PlantService) {
    }

    ngOnInit(): void {
      this.plants$ = this.plantService.getAllPlants(this.limit);
    }
}
