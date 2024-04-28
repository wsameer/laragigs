import { Link } from '@inertiajs/react';
import React from 'react';

const Pagination = React.memo(({ links }) => {
  return (
    <nav className="text-center mt-4">
      {links.map(link => (
        <Link
          preserveScroll
          href={link.url || ''}
          key={link.label}
          className={
            'inline-block mx-1 py-2 px-3 rounded-lg text-gray-900 text-xs ' +
            (link.active
              ? 'text-gray-300 bg-gray-200 cursor-not-allowed'
              : ' ') +
            (!link.url
              ? '!text-gray-500 cursor-not-allowed'
              : 'hover:bg-gray-200')
          }
          dangerouslySetInnerHTML={{ __html: link.label }}
        />
      ))}
    </nav>
  );
});

export default Pagination;
