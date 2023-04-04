import { Component, OnInit} from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer-component',
  templateUrl: './developer-component.component.html',
  styleUrls: ['./developer-component.component.css']
})
export class DeveloperComponentComponent implements OnInit{

 
    model: Developer = new Developer("Bart","SIMPSON",8,"male","Attention les yeux",
    [ new Skill(
      "Chieur",
      "https://www.123-stickers.com/2104/bart-simpsons-fesses.jpg",
      "http://www.bart.fr")
      
    ])

ngOnInit(): void {
  console.log(this.model);
}

}

