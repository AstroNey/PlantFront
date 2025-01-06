import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {PlantService} from '../service/plant/plant-service.service';
import {Plant} from '../models/Plant';

@Component({
  selector: 'app-plant-list',
  standalone: false,

  templateUrl: './plant-list.component.html',
  styleUrl: './plant-list.component.css'
})
export class PlantListComponent implements OnInit {

  plants$!: Observable<Plant[]>;

  constructor(private plantService: PlantService) {
  }

  ngOnInit(): void {
      this.plants$ = this.plantService.getAllPlants();
  }
}
