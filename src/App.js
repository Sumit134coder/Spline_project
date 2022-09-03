import logo from './logo.svg';
import { Suspense } from 'react'
import './App.css';
import Router from './router';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Router />
    </Suspense>
  );
}

export default App;
