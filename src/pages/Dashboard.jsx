import React, { Component, useEffect, useState } from 'react';
import SliderAdmin from '../admin/adminPages/SliderAdmin';
import { Route, Routes } from 'react-router-dom'
import ActivityAdmin from '../admin/adminPages/ActivityAdmin';
import Menu from '../admin/components/Menu';


function Dashboard() {
  return (
    <div className="grid grid-rows-6  lg:grid-cols-8 gap-4 bg-black h-screen w-full">
      <div className="row-span-1 lg:col-span-2">
        <Menu />
      </div>
      <div className="row-span-5 lg:col-span-6  box-border overflow-y-auto">
        <Routes>
          <Route path="/" element={<SliderAdmin />} />
          <Route path="/slideradmin" element={<ActivityAdmin />} />
        </Routes>
      </div>
    </div>
  )
}

export default Dashboard