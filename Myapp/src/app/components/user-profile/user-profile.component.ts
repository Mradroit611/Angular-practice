import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, numberAttribute} from '@angular/core';
import { FormsModule } from '@angular/forms';

function formatName(value: string){
  return "Hi " + value;
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  @Input({alias: "member", transform: formatName}) mem = "";
  @Input({transform:numberAttribute}) salarry!: number;
  name = "sanjay";
  gender = "male";
  salary = 22; 
  isBtnDisabled = true;
  inputVal = "Ex: Adroit"
  // @Input() highlightCondition: boolean = true;
  // constructor(private el: ElementRef) {
  // }

  // ngOnInit() {
  //   if (this.highlightCondition) {
  //     this.el.nativeElement.style.backgroundColor = 'yellow';
  //   }
  // }
  users = [
    {name: "sanjay", isSingle: true, salary: 10000},
    {name: "adroit", isSingle: true, salary: 50000},
    {name: "sandy", isSingle: false, salary: 200000}
  ]

  onChange(e:Event){
    const value = (e.target as HTMLInputElement).value
    this.inputVal = value
    // console.log(value);
  }
}
