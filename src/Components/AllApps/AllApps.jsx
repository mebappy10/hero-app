import React from 'react';
import { FaAlgolia, FaStar } from 'react-icons/fa';
import { GoDownload } from 'react-icons/go';
import { Link } from 'react-router';

const AllApps = ({ app }) => {
  return (
    <Link to={`/apps/${app.id}`}>
      <div className="p-4 bg-white rounded-md col-span-1 container shadow-md">
        <figure className="mb-4">
          <img
            className="rounded-md h-[316px] mx-auto"
            src={`${app.image}`}
            alt={`${app.image}`}
          />
        </figure>

        <div className="text-center">
          <h2 className="mb-2 font-medium">{app.title}</h2>

          <div className="flex justify-between items-center">
            <button className="py-1 px-3 rounded-sm bg-[#F1F5E8] text-[#00D390] flex items-center gap-2">
              <GoDownload /> {app.downloads}
            </button>
            <button className="py-1 px-3 rounded-sm bg-[#FFF0E1] text-[#FF8811] flex items-center gap-2">
              <FaStar /> {app.ratingAvg}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AllApps;
