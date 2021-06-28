import React, { useState } from "react";
import Loader from "../Loader/Loader";

import Dialog from "@material-ui/core/Dialog";

const JobsList = () => {
  const [jobDetailsDialog, setJobDetailDialog] = useState(false);

  const handleOpenJobDetailDialog = () => {
    setJobDetailDialog(true);
  };
  const handleCloseJobDetailDialog = () => {
    setJobDetailDialog(false);
  };
  return (
    <div className="max-w-4xl m-auto mt-2 rounded-md px-4">
      <div className="items-center text-center mt-4">
        <Loader />
      </div>
      <div className="xl:flex xl:items-center xl:justify-between space-y-3 xl:space-y-0 py-6 xl:py-8 border-b-2 border-gray-300">
        <div className="xl:flex xl:items-center xl:space-x-7 space-y-3 xl:space-y-0">
          <div>
            <img className="w-28" src="https://workablehr.s3.amazonaws.com/uploads/account/logo/37805/verve.png" alt="" />
          </div>
          <div>
            <h1 className="font-medium text-lg xl:text-xl">Shift Lead (University - Palo Alto)</h1>
            <p className="text-base xl:text-base text-gray-500">at Verve Coffee Roasters</p>
            <div className="space-y-1 mt-1 text-gray-500">
              <div className="flex items-center space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 512 512">
                    <path
                      d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                    <circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                  </svg>
                </div>
                <span className="text-sm">Phoenix, Arizona, United States Operations</span>
              </div>
              <div className="flex items-center space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 512 512">
                    <title>Time</title>
                    <path
                      d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    />
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 128v144h96" />
                  </svg>
                </div>
                <span className="text-sm">Posted Today</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="outline-none focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 512 512">
              <path
                d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="32"
              />
            </svg>
          </button>
          <button onClick={handleOpenJobDetailDialog} className="text-sm font-medium uppercase mt-1 outline-none focus:outline-none">
            View
          </button>
        </div>
      </div>
      <div className="xl:flex xl:items-center xl:justify-between space-y-3 xl:space-y-0 py-6 xl:py-8 border-b-2 border-gray-300">
        <div className="xl:flex xl:items-center xl:space-x-7 space-y-3 xl:space-y-0">
          <div>
            <img className="w-28" src="https://workablehr.s3.amazonaws.com/uploads/account/logo/37805/verve.png" alt="" />
          </div>
          <div>
            <h1 className="font-medium">Shift Lead (University - Palo Alto)</h1>
            <p className="text-sm text-gray-500">at Verve Coffee Roasters</p>
            <div className="space-y-1 mt-1 text-gray-500">
              <div className="flex items-center space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 512 512">
                    <path
                      d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                    <circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                  </svg>
                </div>
                <span className="text-sm">Phoenix, Arizona, United States Operations</span>
              </div>
              <div className="flex items-center space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 512 512">
                    <title>Time</title>
                    <path
                      d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    />
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 128v144h96" />
                  </svg>
                </div>
                <span className="text-sm">Posted Today</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="outline-none focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 512 512">
              <path
                d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="32"
              />
            </svg>
          </button>
          <button className="text-sm font-medium uppercase mt-1 outline-none focus:outline-none">View</button>
        </div>
      </div>
      <div className="xl:flex xl:items-center xl:justify-between space-y-3 xl:space-y-0 py-6 xl:py-8 border-b-2 border-gray-300">
        <div className="xl:flex xl:items-center xl:space-x-7 space-y-3 xl:space-y-0">
          <div>
            <img className="w-28" src="https://workablehr.s3.amazonaws.com/uploads/account/logo/37805/verve.png" alt="" />
          </div>
          <div>
            <h1 className="font-medium">Shift Lead (University - Palo Alto)</h1>
            <p className="text-sm text-gray-500">at Verve Coffee Roasters</p>
            <div className="space-y-1 mt-1 text-gray-500">
              <div className="flex items-center space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 512 512">
                    <path
                      d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                    <circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                  </svg>
                </div>
                <span className="text-sm">Phoenix, Arizona, United States Operations</span>
              </div>
              <div className="flex items-center space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 512 512">
                    <title>Time</title>
                    <path
                      d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    />
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 128v144h96" />
                  </svg>
                </div>
                <span className="text-sm">Posted Today</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="outline-none focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 512 512">
              <path
                d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="32"
              />
            </svg>
          </button>
          <button className="text-sm font-medium uppercase mt-1 outline-none focus:outline-none">View</button>
        </div>
      </div>
      <div className="xl:flex xl:items-center xl:justify-between space-y-3 xl:space-y-0 py-6 xl:py-8 border-b-2 border-gray-300">
        <div className="xl:flex xl:items-center xl:space-x-7 space-y-3 xl:space-y-0">
          <div>
            <img className="w-28" src="https://workablehr.s3.amazonaws.com/uploads/account/logo/37805/verve.png" alt="" />
          </div>
          <div>
            <h1 className="font-medium">Shift Lead (University - Palo Alto)</h1>
            <p className="text-sm text-gray-500">at Verve Coffee Roasters</p>
            <div className="space-y-1 mt-1 text-gray-500">
              <div className="flex items-center space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 512 512">
                    <path
                      d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                    <circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                  </svg>
                </div>
                <span className="text-sm">Phoenix, Arizona, United States Operations</span>
              </div>
              <div className="flex items-center space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 512 512">
                    <title>Time</title>
                    <path
                      d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    />
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 128v144h96" />
                  </svg>
                </div>
                <span className="text-sm">Posted Today</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="outline-none focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 512 512">
              <path
                d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="32"
              />
            </svg>
          </button>
          <button className="text-sm font-medium uppercase mt-1 outline-none focus:outline-none">View</button>
        </div>
      </div>
      <div className="xl:flex xl:items-center xl:justify-between space-y-3 xl:space-y-0 py-6 xl:py-8 border-b-2 border-gray-300">
        <div className="xl:flex xl:items-center xl:space-x-7 space-y-3 xl:space-y-0">
          <div>
            <img className="w-28" src="https://workablehr.s3.amazonaws.com/uploads/account/logo/37805/verve.png" alt="" />
          </div>
          <div>
            <h1 className="font-medium">Shift Lead (University - Palo Alto)</h1>
            <p className="text-sm text-gray-500">at Verve Coffee Roasters</p>
            <div className="space-y-1 mt-1 text-gray-500">
              <div className="flex items-center space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 512 512">
                    <path
                      d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                    <circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                  </svg>
                </div>
                <span className="text-sm">Phoenix, Arizona, United States Operations</span>
              </div>
              <div className="flex items-center space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 512 512">
                    <title>Time</title>
                    <path
                      d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    />
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 128v144h96" />
                  </svg>
                </div>
                <span className="text-sm">Posted Today</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="outline-none focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 512 512">
              <path
                d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="32"
              />
            </svg>
          </button>
          <button className="text-sm font-medium uppercase mt-1 outline-none focus:outline-none">View</button>
        </div>
      </div>
      <div className="xl:flex xl:items-center xl:justify-between space-y-3 xl:space-y-0 py-6 xl:py-8 border-b-2 border-gray-300">
        <div className="xl:flex xl:items-center xl:space-x-7 space-y-3 xl:space-y-0">
          <div>
            <img className="w-28" src="https://workablehr.s3.amazonaws.com/uploads/account/logo/37805/verve.png" alt="" />
          </div>
          <div>
            <h1 className="font-medium">Shift Lead (University - Palo Alto)</h1>
            <p className="text-sm text-gray-500">at Verve Coffee Roasters</p>
            <div className="space-y-1 mt-1 text-gray-500">
              <div className="flex items-center space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 512 512">
                    <path
                      d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                    <circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                  </svg>
                </div>
                <span className="text-sm">Phoenix, Arizona, United States Operations</span>
              </div>
              <div className="flex items-center space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 512 512">
                    <title>Time</title>
                    <path
                      d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    />
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 128v144h96" />
                  </svg>
                </div>
                <span className="text-sm">Posted Today</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="outline-none focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 512 512">
              <path
                d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="32"
              />
            </svg>
          </button>
          <button className="text-sm font-medium uppercase mt-1 outline-none focus:outline-none">View</button>
        </div>
      </div>
      <div className="xl:flex xl:items-center xl:justify-between space-y-3 xl:space-y-0 py-6 xl:py-8 border-b-2 border-gray-300">
        <div className="xl:flex xl:items-center xl:space-x-7 space-y-3 xl:space-y-0">
          <div>
            <img className="w-28" src="https://workablehr.s3.amazonaws.com/uploads/account/logo/37805/verve.png" alt="" />
          </div>
          <div>
            <h1 className="font-medium">Shift Lead (University - Palo Alto)</h1>
            <p className="text-sm text-gray-500">at Verve Coffee Roasters</p>
            <div className="space-y-1 mt-1 text-gray-500">
              <div className="flex items-center space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 512 512">
                    <path
                      d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                    <circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                  </svg>
                </div>
                <span className="text-sm">Phoenix, Arizona, United States Operations</span>
              </div>
              <div className="flex items-center space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 512 512">
                    <title>Time</title>
                    <path
                      d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    />
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 128v144h96" />
                  </svg>
                </div>
                <span className="text-sm">Posted Today</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="outline-none focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 512 512">
              <path
                d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="32"
              />
            </svg>
          </button>
          <button className="text-sm font-medium uppercase mt-1 outline-none focus:outline-none">View</button>
        </div>
      </div>
      <div className="xl:flex xl:items-center xl:justify-between space-y-3 xl:space-y-0 py-6 xl:py-8 border-b-2 border-gray-300">
        <div className="xl:flex xl:items-center xl:space-x-7 space-y-3 xl:space-y-0">
          <div>
            <img className="w-28" src="https://workablehr.s3.amazonaws.com/uploads/account/logo/37805/verve.png" alt="" />
          </div>
          <div>
            <h1 className="font-medium">Shift Lead (University - Palo Alto)</h1>
            <p className="text-sm text-gray-500">at Verve Coffee Roasters</p>
            <div className="space-y-1 mt-1 text-gray-500">
              <div className="flex items-center space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 512 512">
                    <path
                      d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                    <circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                  </svg>
                </div>
                <span className="text-sm">Phoenix, Arizona, United States Operations</span>
              </div>
              <div className="flex items-center space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 512 512">
                    <title>Time</title>
                    <path
                      d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    />
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 128v144h96" />
                  </svg>
                </div>
                <span className="text-sm">Posted Today</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="outline-none focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 512 512">
              <path
                d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="32"
              />
            </svg>
          </button>
          <button className="text-sm font-medium uppercase mt-1 outline-none focus:outline-none">View</button>
        </div>
      </div>
      <Dialog fullScreen onClose={handleCloseJobDetailDialog} aria-labelledby="simple-dialog-title" open={jobDetailsDialog}>
        <div>hi</div>
      </Dialog>
    </div>
  );
};

export default JobsList;
