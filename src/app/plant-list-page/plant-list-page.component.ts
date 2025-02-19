import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {PlantService} from '../service/plant/plant-service.service';

@Component({
  selector: 'app-plant-list-page',
  standalone: false,

  templateUrl: './plant-list-page.component.html',
  styleUrl: './plant-list-page.component.css'
})
export class PlantListPageComponent implements OnInit {
    plants$!: Observable<any>;

    constructor(private plantService: PlantService) {
    }

    ngOnInit(): void {
        this.plants$ = this.plantService.getAllPlants(20);
    }
}
