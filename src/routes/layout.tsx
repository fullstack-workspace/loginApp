import { Outlet } from '@modern-js/runtime/router';
import React from 'react';

export default function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
