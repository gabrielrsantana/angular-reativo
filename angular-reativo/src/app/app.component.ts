import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from './services/state-service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Estado Atual:</h1>
      <p>Nome: {{ state$ | async | json }}</p>
      <button (click)="changeName()">Trocar Nome</button>
    </div>
  `
})
export class AppComponent implements OnInit {
  state$!: Observable<any>;

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    // Se inscreve no Observable para mostrar o estado atual
    this.state$ = this.stateService.state$;
  }

  changeName() {
    this.stateService.updateState({ name: 'Novo Nome', count: Math.floor(Math.random() * 100) });
  }
}
