import { Component } from '@angular/core';
import { JokeService } from '../../services/joke.service';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.scss'
})
export class JokeComponent {

  joke = "loading"

  constructor(private jokeServices: JokeService){}

  ngOnInit(){
    this.AnotherJoke();
  }
  AnotherJoke(){
    // this.jokeServices.getJoke().subscribe((data:any)=>{
    //   this.joke = data.value
    // })
    this.jokeServices.getJoke().subscribe({
      next: (data:any) => this.joke = data.value,
      error: (error) => console.log("Error occured : ", error)
    })
  }

}
