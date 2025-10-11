import React from 'react';
import { FaRegTrashAlt, FaStar } from 'react-icons/fa';
import { LuDownload } from 'react-icons/lu';

const InstalledApps = ({ app, handelRemoveApp }) => {
  const { title, image, ratingAvg, downloads, size, id } = app;
  return (
    <div className="bg-white p-3 rounded-lg flex justify-between items-center shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <figure>
          <img
            className="w-[60px] h-[60px] rounded-md"
            src={`${image}`}
            alt={`${title}`}
          />
        </figure>

        <div>
          <h5 className="font-medium mb-2">{title}</h5>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[#00D390]">
              <LuDownload /> {downloads}
            </span>
            <span className="flex items-center gap-1 text-[#FF8811]">
              <FaStar /> {ratingAvg}
            </span>
            <span className="flex items-center gap-1 text-gray-500">
              {size} MB
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={() => handelRemoveApp(id)}
        className="btn bg-[#00D390] text-white text-medium border-none"
      >
        <FaRegTrashAlt /> Uninstall
      </button>
    </div>
  );
};

export default InstalledApps;
