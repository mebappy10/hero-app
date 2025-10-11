import React from 'react';

const Counter = () => {
  return (
    <section className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] py-20">
      <div className="container mx-auto text-center max-sm:w-11/12">
        <h2 className="text-white text-4xl font-semibold">
          Trusted by Millions, Built for You
        </h2>

        <div className="flex items-center justify-center lg:gap-40 gap-20 flex-wrap mt-10 text-white max-sm:flex-col">
          <div>
            <p className="text-sm">Total Downloads</p>
            <h2 className="text-6xl font-bold my-4">29.6M</h2>
            <p className="text-sm">21% More Than Last Month</p>
          </div>
          <div>
            <p className="text-sm">Total Reviews</p>
            <h2 className="text-6xl font-bold my-4">906K</h2>
            <p className="text-sm">46% more than last month</p>
          </div>
          <div>
            <p className="text-sm">Active Apps</p>
            <h2 className="text-6xl font-bold my-4">132+</h2>
            <p className="text-sm">31 more will Launch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
