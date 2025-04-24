import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

//colocar em arquivo separado para mais campos
interface AppState {
  name: string;
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private _state = new BehaviorSubject<AppState>({ name: 'Inicial', count: 0 });

  // Expondo como Observable apenas para leitura
  public readonly state$: Observable<AppState> = this._state.asObservable();

  // Método para atualizar o estado
  updateState(newState: Partial<AppState>): void {
    const currentState = this._state.getValue();
    this._state.next({ ...currentState, ...newState });
  }
}
