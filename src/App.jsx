import { Routes, Route, Outlet, Link } from "react-router-dom";
import CubePage from "./CubePage";
import Home from "./Home";

import './App.css';

import rainbow_data from './assets/best-rainbow.json';
import mono_data from './assets/best-mono.json';
import both_data from './assets/best.json';


export default function App() {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="rainbow" element={<CubePage data={rainbow_data}/>} />
        <Route path="mono" element={<CubePage data={mono_data}/>} />
        <Route path="both" element={<CubePage data={both_data}/>} />
    </Routes>
  );
}
