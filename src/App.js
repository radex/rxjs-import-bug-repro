import React from 'react';
import logo from './logo.svg';
import './App.css';

// If you use these imports… everything is fine!

// import { interval } from 'rxjs/_esm2015/internal/observable/interval'
// import { timer } from 'rxjs/_esm2015/internal/observable/timer'
// import { take } from 'rxjs/_esm2015/internal/operators/take'
// import { switchMap } from 'rxjs/_esm2015/internal/operators/switchMap'
// import { takeUntil } from 'rxjs/_esm2015/internal/operators/takeUntil'
// import { tap } from 'rxjs/_esm2015/internal/operators/tap'

// But if you do this… No luck.

import { interval } from 'rxjs/observable/interval'
import { timer } from 'rxjs/observable/timer'
import { take, switchMap, takeUntil, tap } from 'rxjs/operators'

const x = interval(100).pipe(
      switchMap(() => interval(20).pipe(tap(x => console.log(x)))),
      tap(x => console.warn(x)),
    ).subscribe()

    setTimeout(() => {
      console.log('END')
      x.unsubscribe()
    }, 1000)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
