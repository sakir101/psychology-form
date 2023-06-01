import React, { useState } from "react";
import "./Filter.css";
import axios from "axios";
import ClientInfo from "./ClientInfo";

const Filter = () => {
  const [active, setActive] = useState(true);
  const [active1, setActive1] = useState(true);

  const [clientInfo, setClientInfo] = useState([]);
  const placeholderToggle = () => {
    setActive(false);
  };

  const placeholder = () => {
    setActive(true);
  };
  const placeholderToggle2 = () => {
    setActive1(false);
  };

  const placeholder2 = () => {
    setActive1(true);
  };
  const handleSearchByName = async (name) => {
    try {
      const response = await axios.get(
        `https://client-form-server.vercel.app/client/name/${name}`
      );
      const clientData = response.data;
      setClientInfo(clientData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchByID = async (id) => {
    try {
      const response = await axios.get(
        `https://client-form-server.vercel.app/client/id/${id}`
      );
      const clientData = response.data;
      console.log(clientData);
      setClientInfo(clientData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full px-8 lg:px-0">
        <div className="w-full lg:w-1/2 mt-12 mb-5 lg:mb-5 z-49 relative mx-auto">
          <input
            type="text"
            placeholder="Search By Name"
            onFocus={placeholderToggle}
            onBlur={placeholder}
            className={`in input input-bordered border-2 border-stone-600 w-full  placeholder:p-[-1px] input-outline shadow-md ${
              active ? "placeholder:block" : "placeholder:invisible"
            } `}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearchByName(e.target.value);
              }
            }}
          />
        </div>
        <div className="w-full lg:w-1/2 mt-5 mb-10 lg:mb-12 z-49 relative mx-auto">
          <input
            type="text"
            placeholder="Search By ID"
            onFocus={placeholderToggle2}
            onBlur={placeholder2}
            className={`in input input-bordered border-2 border-stone-600 w-full  placeholder:p-[-1px] input-outline shadow-md ${
              active1 ? "placeholder:block" : "placeholder:invisible"
            } `}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearchByID(e.target.value);
              }
            }}
          />
        </div>
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="card flex-shrink-0 w-[800px] shadow-2xl bg-base-100">
              <div className="card-body">
                <ClientInfo clientInfo={clientInfo}></ClientInfo>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
