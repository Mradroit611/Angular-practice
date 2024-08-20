import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, FormControl, FormGroup } from '@angular/forms';
import { DbService } from '../../services/db.service';
import { Snippet } from '../../model';

@Component({
  selector: 'app-code-snippets',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './code-snippets.component.html',
  styleUrl: './code-snippets.component.scss'
})
export class CodeSnippetsComponent {

  constructor(private dbService:DbService){}

  title = new FormControl("",[
    Validators.required,
  ])
  code = new FormControl("",[
    Validators.required,
  ])

  snippetForm = new FormGroup({
    title: this.title,
    code: this.code,
  })

  async save(){
    // console.log(this.snippetForm.value)
   await this.dbService.createSnippet(this.snippetForm.value as Snippet)
  }

}
