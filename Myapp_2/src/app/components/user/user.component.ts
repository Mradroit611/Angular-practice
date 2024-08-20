import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, ElementRef, EventEmitter, input, Input, numberAttribute, Output, SimpleChange, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {User} from '../../../model'
import { CountryCodePipe } from '../../pipes/country-code.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

// function formatNumber(value:string){
//   return "Hi " + value;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, CommonModule, CountryCodePipe, HighlightDirective],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  // @Input ({alias: "userName"}) name = "";
  name = input("",{        //creating signal using input
    alias: "userName",
  })
  @Input({transform:booleanAttribute}) isSingle!:boolean;
  @Input({transform:numberAttribute}) salary!: number;
  @Input({transform:numberAttribute}) phoneNumber!: number;
  // @Output() myEvent = new EventEmitter<string>()
  @Output() myEvent = new EventEmitter<User>()

  @ViewChild("myheading") heading?:ElementRef

  constructor(){ // it is called when the instance of class created
    // init properties
    // dependecy injection 
    // event listener register 
    console.log("constructor called", this.name())
    console.log("constructor ", this.heading?.nativeElement.textContent);
  }

  ngAfterViewInit():void{ //we can use Viewchild template variable in this lifecycle method
    console.log("ngAfterviewInit ", this.heading?.nativeElement.textContent);
  }


  ngOnChanges(changes: SimpleChange): void{ //t is written just after the constructor and called when the changes done in input values
    console.log("ngOnChanges", changes)
    console.log("ngOnChange ", this.heading?.nativeElement.textContent);
  }

  ngOnInit(){    //it is called when in class is ready but UI has not been displayed
    // init properties 
    // event listener register 
    // initial api call 
    console.log("ngOnInit called", this.name())
    console.log("ngOnInit ", this.heading?.nativeElement.textContent);
  }

  ngOnDestroy(){
    //unregister event listener
    console.log("component destroyed")
    console.log("ngOnDestroy ", this.heading?.nativeElement.textContent);
  }

  sendData(){
    this.myEvent.emit({name:this.name(), newSalary:25000})
  }
}
