import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import Home from './components/Home'
import Create from './components/Create'
import Edit from './components/Edit'
import Delete from './components/Delete'
import Navbar from './components/navbar/Navbar'
import Forecasting from './components/Forecasting'
import DemandReporting from './components/DemandReporting'
import DemandReportingAdvanced from './components/DemandReportingAdvanced'
import PlanningHorizon from './components/PlanningHorizon';

function App() {

  return (
    <>
      <Navbar content={
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/delete/:id" element={<Delete />} />
          <Route path="/forecasting" element={<Forecasting />} />
          <Route path="/demand-reporting-advanced" element={<DemandReportingAdvanced />} />
          <Route path="/demand-reporting" element={<DemandReporting />} />
          <Route path="/supply-reporting" element={<div>Supply Planning Reporting</div>} />
          <Route path="/supply-reporting-advanced" element={<div>Supply Planning Reporting Advanced</div>} />
          <Route path="/inventory-management" element={<div>Inventory Management</div>} />
          <Route path="/planning-horizon" element={<PlanningHorizon />} />
          <Route path="/proposals" element={<div>Proposals</div>} />
        </Routes>
      } />
    </>
  )
}

export default App
