import React, { useEffect, useState } from 'react';
import InstalledApps from '../Components/InstalledApps/InstalledApps';

const Installation = () => {
  const [sortOrder, setSortOrder] = useState('none');
  const [installed, setInstalled] = useState([]);
  useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem('installed'));
    if (installedApps) setInstalled(installedApps);
  }, []);

  const handelRemoveApp = id => {
    const existingApps = JSON.parse(localStorage.getItem('installed'));
    let updatedApps = existingApps.filter(a => a.id !== id);

    // for ui instant update
    setInstalled(prev => prev.filter(a => a.id !== id));
    localStorage.setItem('installed', JSON.stringify(updatedApps));
  };

  return (
    <section className="container mx-auto py-20 max-sm:w-11/12">
      <div className="text-center mb-10">
        <h2 className="text-[#001931] text-5xl font-bold mb-4">
          Your Installed Apps
        </h2>
        <p className="text-[#627382]">
          Explore All Trending Apps on the Market developed by us.
        </p>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[#001931] text-lg font-semibold">
            ({installed.length}) Apps Found
          </h2>

          <select
            className="select"
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
          >
            <option defaultValue value="none">
              Sort by size
            </option>
            <option value="downloads">Sort by downloads</option>
            <option value="ratings">Sort by ratings</option>
          </select>
        </div>

        <div className="flex flex-col gap-4">
          {installed.map(app => (
            <InstalledApps
              key={app.id}
              app={app}
              handelRemoveApp={handelRemoveApp}
            ></InstalledApps>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Installation;
