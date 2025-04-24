# BehaviorSubject Demo (Angular)

Este projeto é um exemplo simples usando Angular 18 e `BehaviorSubject` para gerenciamento de estado reativo com `RxJS`.

## 🧠 O que o projeto faz

- Usa um `BehaviorSubject` privado no `StateService` para manter o estado de um objeto.
- Expõe o estado como `Observable` (`state$`) para que qualquer componente possa reagir às mudanças.
- Permite atualização do estado via método público `updateState()`.

## 🛠️ Requisitos

- Node.js (recomendado: 18.x ou superior)
- Angular CLI (versão 18 ou superior)

```bash
npm install -g @angular/cli@18
```

