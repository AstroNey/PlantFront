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
    @Input() plantString!: string; // La chaîne d'entrée
    plant!: Plant; // L'objet Plant

    constructor(private plantService: PlantService,
                private router: Router) {}

    ngOnInit(): void {
        this.transformStringToPlant(this.plantString);
    }

    private transformStringToPlant(plantString: string): void {
        try {
            const plantJson = JSON.stringify(plantString);
            const plantData = JSON.parse(plantJson);

            this.plant = {
                id: plantData.id,
                name: plantData.name,
                description: plantData.description,
                image: plantData.image
            };
        } catch (error) {
            console.error('Erreur lors de la transformation de la chaîne en objet Plant:', error);
        }
    }
}
