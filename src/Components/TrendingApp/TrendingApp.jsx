import React from 'react';
import { GoDownload } from 'react-icons/go';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const TrendingApp = ({ app }) => {
  return (
    <Link to={`./apps/${app.id}`}>
      <div className="card bg-base-100 shadow-sm p-4 cursor-pointer">
        <figure className="rounded-lg ">
          <img src={`${app.image}`} alt={`${app.title}`} />
        </figure>
        <div className="card-body p-0 mt-3">
          <h2 className="text-[#001931] text-base font-medium">{app.title}</h2>
          <div className="card-actions justify-between">
            <button className="flex items-center gap-2 bg-[#F1F5E8] py-1 px-2 rounded-sm text-[#00D390] font-medium">
              <GoDownload /> <span>{app.downloads}</span>
            </button>

            <button className="flex items-center gap-2 bg-[#FFF0E1] py-1 px-2 rounded-sm text-[#FF8811] font-medium">
              <FaStar /> <span>{app.ratingAvg}</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TrendingApp;
