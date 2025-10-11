import React from 'react';
import Hero from '../Components/Hero/Hero';
import Counter from '../Components/Counter/Counter';
import TrendingApp from '../Components/TrendingApp/TrendingApp';
import { Link, useLoaderData } from 'react-router';
import useApps from '../Hooks/useApps';
import Loading from '../Components/Loading/Loading';

const Home = () => {
  const { apps, loading, error } = useApps();
  const trendingData = apps.slice(0, 8);

  return (
    <>
      {/* Hero Section */}
      <Hero></Hero>

      {/* Trusted by Millions, Built for You */}
      <Counter></Counter>

      {/* Trending Apps */}
      <section className="container mx-auto py-20 max-sm:w-11/12">
        <div className="text-center mb-10">
          <h2 className="text-[#001931] text-3xl font-bold mb-4">
            Trending Apps
          </h2>
          <p className="text-[#627382]">
            Explore All Trending Apps on the Market developed by us.
          </p>
        </div>

        <section className="grid grid-cols-4 gap-4 max-sm:gap-3">
          {trendingData.map(app => (
            <TrendingApp key={app.id} app={app}></TrendingApp>
          ))}

          <div className="mx-auto col-span-4 mt-7">
            <Link to="./apps">
              <button className="btn text-white font-medium w-35 bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]">
                Show All
              </button>
            </Link>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
