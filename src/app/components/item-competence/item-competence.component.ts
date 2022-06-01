import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {ICompetence} from '../../interfaces/ICompetence';
@Component({
  selector: 'app-item-competence',
  templateUrl: './item-competence.component.html',
  styleUrls: ['./item-competence.component.scss']
})
export class ItemCompetenceComponent implements OnInit {

  @Input()
  competence!:ICompetence;

  @Output() onDeleteCompetence:EventEmitter<ICompetence> = new EventEmitter();
  @Output() onToggleReminder:EventEmitter<ICompetence> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(competence:any):void{
    this.onDeleteCompetence.emit(competence);
  }

  onToggle(competence:ICompetence):void{
    this.onToggleReminder.emit(competence);
  }

}
