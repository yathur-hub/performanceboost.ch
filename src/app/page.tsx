/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import HomeView from '../views/HomeView';

export default function Page() {
  const handleNavigate = (path: string) => {
    window.dispatchEvent(new CustomEvent('navigation-change', { detail: path }));
  };

  return <HomeView onNavigate={handleNavigate} />;
}
