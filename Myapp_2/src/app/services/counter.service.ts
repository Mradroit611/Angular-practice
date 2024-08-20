import { computed, Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  // private count = 0;
  private count = signal(0);  //Writeable signals

  doublecount: Signal<number> = computed (()=> this.count() * 2); //Readable  signals

  getcounter(){
    return this.count()
  }
  // incrementCounter(){
  //    this.count = this.count + 1;
  // }

  incrementCounter(){
    this.count.update((oldValue)=>{
      return oldValue + 1;
    })
  }
}
