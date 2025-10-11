import React from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import DownloadIcon from '../assets/icon-downloads.png';
import AvgRatingIcon from '../assets/icon-ratings.png';
import ReviewsIcon from '../assets/icon-review.png';
import { ToastContainer, toast } from 'react-toastify';

const AppDetails = () => {
  const { id } = useParams();
  const appId = Number(id);
  const { apps, loading, error } = useApps();
  const app = apps.find(a => a.id === appId);

  if (loading) return <p>Loading...</p>;

  const {
    image,
    title,
    size,
    companyName,
    description,
    reviews,
    ratingAvg,
    downloads,
  } = app || {};

  const handelAddToInstallation = () => {
    const existingApps = JSON.parse(localStorage.getItem('installed'));
    let updatedApps = [];
    if (existingApps) {
      const isDuplicate = existingApps.some(a => a.id === app.id);
      if (isDuplicate) return toast.warning('Already installed!');
      updatedApps = [...existingApps, app];
    } else {
      updatedApps.push(app);
    }
    localStorage.setItem('installed', JSON.stringify(updatedApps));
  };

  return (
    <section className="my-20 container mx-auto max-sm:w-11/12">
      <div className="flex items-center gap-10 max-sm:flex-col max-md:flex-col">
        <div className="w-[300px] h-[300px] bg-white p-4 rounded-lg shadow-md">
          <img className="rounded-lg" src={`${image}`} alt={`${title}`} />
        </div>

        <div className="w-2/3 max-sm:w-full max-md:w-full">
          <h2 className="text-[#001931] text-3xl font-bold">{title}</h2>
          <p className="mt-2 text-[#627382]">
            Developed by{' '}
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold cursor-pointer">
              {companyName}
            </span>
          </p>

          <div className="divider my-3"></div>

          <div className="flex items-center gap-10 mb-5">
            <div>
              <img src={`${DownloadIcon}`} alt="" />
              <p className="my-2 text-[#001931]">Downloads</p>
              <span className="text-[#001931] text-3xl font-bold">
                {downloads}
              </span>
            </div>
            <div>
              <img src={`${AvgRatingIcon}`} alt="" />
              <p className="my-2 text-[#001931]">Average Ratings</p>
              <span className="text-[#001931] text-3xl font-bold">
                {ratingAvg}
              </span>
            </div>
            <div>
              <img src={`${ReviewsIcon}`} alt="" />
              <p className="my-2 text-[#001931]">Total Reviews</p>
              <span className="text-[#001931] text-3xl font-bold">
                {reviews}
              </span>
            </div>
          </div>

          <button
            onClick={handelAddToInstallation}
            className="btn bg-[#00D390] text-white font-medium text-base border-none"
          >
            Install Now ({size} MB)
          </button>
        </div>
      </div>

      <div className="divider my-10"></div>

      <div>
        <h2 className="text-lg font-semibold mb-7">Description</h2>

        <p className="text-gray-500">{description}</p>
      </div>
      <ToastContainer></ToastContainer>
    </section>
  );
};

export default AppDetails;
