import React from 'react';

import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: '🔎 All' },

  { url: '/image', text: '📸 Images' },
  { url: '/video', text: '📺 Videos' },
];

export default function Links() {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text }) => (
        <NavLink
          to={url}
          key={url}
          //   activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
          className="m-2 mb-0 focus:border-b-2 dark:text-blue-300 focus:border-blue-700 focus:pb-2 focus:text-blue-700 focus:dark:text-blue-300"
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
}
