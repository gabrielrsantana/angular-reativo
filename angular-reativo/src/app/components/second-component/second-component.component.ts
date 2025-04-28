import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { StateService } from 'src/app/services/state-service';

@Component({
  selector: 'app-second-component',
  standalone: true,
  imports: [BrowserModule],
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.css'
})
export class SecondComponentComponent implements OnInit {

  state$!: Observable<any>;
  constructor(private stateService: StateService) {

  }
  ngOnInit(): void {
    this.state$ = this.stateService.state$
  }



}
