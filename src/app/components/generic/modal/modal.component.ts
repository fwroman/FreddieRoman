import { AfterViewInit, Component } from '@angular/core';
import { GenericSubjectService } from '../../../subjects/generic-subject.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  constructor(public genericSubjectService: GenericSubjectService) {}
}
