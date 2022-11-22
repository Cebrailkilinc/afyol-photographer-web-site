import React, { Component, useEffect, useState } from 'react';
import SliderAdmin from '../admin/adminPages/SliderAdmin';
import { Route, Routes } from 'react-router-dom'
import ActivityAdmin from '../admin/adminPages/ActivityAdmin';
import Menu from '../admin/components/Menu';
import GalleryAdmin from '../admin/adminPages/GalleryAdmin';
import MembersAdmin from '../admin/adminPages/MembersAdmin';
import UsersAdmin from '../admin/adminPages/UsersAdmin';




function Dashboard() {
  return (
    <div className="grid grid-rows-6 lg:grid-cols-8 gap-4 bg-black h-screen w-full">
      <div className="row-span-1 lg:col-span-2">
        <Menu />
      </div>
      <div className="row-span-5 lg:col-span-6 box-border overflow-y-auto mt-24">
        <Routes>
          <Route path="/" element={<SliderAdmin />} />
          <Route path="/slideradmin" element={<ActivityAdmin />} />
          <Route path="/galleryadmin" element={<GalleryAdmin/>} />
          <Route path="/membersadmin" element={<MembersAdmin/>} />
          <Route path="/users" element={<UsersAdmin/>} />
        </Routes>
      </div>
    </div>
  )
}

export default Dashboard