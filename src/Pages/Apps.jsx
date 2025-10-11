import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import useApps from '../Hooks/useApps';
import AllApps from '../Components/AllApps/AllApps';

const Apps = () => {
  const { apps, loading, error } = useApps();
  const [search, setSearch] = useState('');
  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? apps.filter(app => app.title.toLocaleLowerCase().includes(term))
    : apps;
  console.log(searchedApps);

  return (
    <>
      <section className="container mx-auto py-20 max-sm:w-11/12">
        <div className="text-center mb-10">
          <h2 className="text-[#001931] text-5xl font-bold mb-4">
            Our All Applications
          </h2>
          <p className="text-[#627382]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#001931] text-lg font-semibold">
              ({searchedApps.length}) Apps Found
            </h2>
            <div>
              <label className="input">
                <IoSearch className="text-lg text-[#8A949D]" />
                <input
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  type="search"
                  required
                  placeholder="Search"
                />
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 max-xl:grid-cols-3">
          {searchedApps.map(app => (
            <AllApps key={app.id} app={app}></AllApps>
          ))}
        </div>
      </section>
    </>
  );
};

export default Apps;
