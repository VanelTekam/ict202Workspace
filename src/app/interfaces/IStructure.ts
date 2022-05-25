import {IExperience} from './IExperience';
import {IFormation} from './IFormation';
import {ICompetence} from './ICompetence';
import {ILangage} from './ILangage';
import {IInteret} from './IInteret';
import {ILiens} from './ILiens';
import {ILocalisation} from './ILocalisation';
import {IInformations} from './IInformations';


export interface IStructure{
    information : IInformations;
    localisation : ILocalisation;
    lien : ILiens;
    interets : IInteret[];
    langages : ILangage[];
    competences : ICompetence[];
    formations : IFormation[];
    experiences : IExperience[];
    
}