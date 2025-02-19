import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
@Component({
  selector: 'app-select',
  standalone: false,

  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
    isOpen = false;
    selectedOption: { value: any; label: string } | null = null;

    @Input() options: { value: any; label: string }[] = [
        { value: 1, label: 'Europe' },
        { value: 2, label: 'Afrique' },
        { value: 3, label: 'Asie' }
    ];
    @Output() optionSelected = new EventEmitter<any>();

    public constructor(private elementRef: ElementRef) { }

    toggleDropdown(): void {
        this.isOpen = !this.isOpen;
    }

    selectOption(option: { value: any; label: string }): void {
        this.selectedOption = option;
        this.optionSelected.emit(option.value);
        this.isOpen = false;
    }

    @HostListener('document:click', ['$event'])
    onClickOutside(event: Event): void {
        const target = event.target as HTMLElement;
        if (this.isOpen && !this.elementRef.nativeElement.contains(target)) {
            this.isOpen = false;
        }
    }
}
