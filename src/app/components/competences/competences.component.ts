import { Component, OnInit } from '@angular/core';
import { CompetencesService } from "../../services/competences.service";
import {ICompetence} from '../../interfaces/ICompetence';


@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent implements OnInit {
  title:string = "Competences";
  competences:ICompetence[] = [];

  constructor(private competencesServices: CompetencesService) { }

  ngOnInit(): void {
    this.competencesServices.getCompetences().subscribe((competences)=>{
      this.competences = competences;
    })
  }

  toggleAddCompetence():void{
    console.log('toggle');
    
  }

  deleteCompetence(comp:ICompetence):void{
    this.competencesServices.deleteCompetence(comp).subscribe(()=>{
      this.competences = this.competences.filter((c)=> c.id !== comp.id);
    })
  }

  toggleReminder(comp:ICompetence){
    this.competencesServices.updateCompetenceReminder(comp).subscribe();
  }

  addCompetence(comp:ICompetence){
    this.competencesServices.updateCompetenceReminder(comp).subscribe((c)=>this.competences.push(c))
  }
}
