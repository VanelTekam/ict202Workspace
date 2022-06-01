import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ICompetence } from 'src/app/interfaces/ICompetence';

@Component({
  selector: 'app-add-competence',
  templateUrl: './add-competence.component.html',
  styleUrls: ['./add-competence.component.scss']
})
export class AddCompetenceComponent implements OnInit {

  @Output() onAddCompetence:EventEmitter<ICompetence> = new EventEmitter();
  text!:string;
  percent!:number;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit():void{
    if(!this.text || !this.percent){
      alert('Please add a Competence');
      return;
    }

    const newCompetence = {
      titre:this.text,
      pourcentage:this.percent
    }

    this.onAddCompetence.emit(newCompetence);

    this.text = '';
    this.percent = 0;
  }

}
