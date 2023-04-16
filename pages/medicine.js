import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Field, Form, Formik } from 'formik';
import Image from 'next/image';
import Pincode from '@/components/Pincode';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Medicine() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const [medicine, setMedicine] = useState('');
  const [medicinesResult, setMedicinesResult] = useState([]);
  const [data, setData] = useState([]);
  const initialValuesFilters = {
    minPrice: '',
    maxPrice: '',
    source: '',
  };

  const onSubmitFilters = (values) => {
    let url;
    // let url=`https://medlr-backend.cyclic.app/api/elasticsearch/search?q=${medicine}&filter={"minPrice":${values.minPrice},"maxPrice":${values.maxPrice},"source":"${values.source}"}&sorti={"price":"desc"}`;

    // Filter
    if (values.minPrice === '' && values.maxPrice === '') {
      url = `https://medlr-backend.cyclic.app/api/elasticsearch/search?q=${medicine}&filter={"source":"${values.source}"}`;
    } else if (values.source === '') {
      url = `https://medlr-backend.cyclic.app/api/elasticsearch/search?q=${medicine}&filter={"minPrice":${values.minPrice},"maxPrice":${values.maxPrice}}`;
    } else {
      url = `https://medlr-backend.cyclic.app/api/elasticsearch/search?q=${medicine}&filter={"minPrice":${values.minPrice},"maxPrice":${values.maxPrice},"source":"${values.source}"}`;
    }

    // Sort
    if (values.sorti != '') {
      url = url + `&sorti={"price": "${values.sorti}"}`;
    }

    // console.log(values);
    console.log('URL: ', url);
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const validateFilters = (values) => {};
  useEffect(() => {
    let { q } = router.query;
    // console.log(q)
    setMedicine(q);
    axios
      .get(`https://medlr-backend.cyclic.app/api/elasticsearch/search?q=${q}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router]);

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Least Prices
        </h1>
      </div>

      <section aria-labelledby="products-heading" className="pb-24 pt-6">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          {/* Filters */}
          <div className="hidden lg:block">
            <Formik
              onSubmit={onSubmitFilters}
              validate={validateFilters}
              initialValues={initialValuesFilters}
            >
              <Form>
                <h3 className="-my-3 flow-root">
                  <div className="flex w-full items-center justify-between bg-white py-3 text-lg text-black hover:text-gray-500">
                    Sort
                  </div>
                </h3>
                <label className="mr-8 ">
                  <Field
                    type="radio"
                    name="sorti"
                    value="asc"
                    className="h-4 w-4 rounded border-gray-300 text-teal-400 mr-1"
                  />
                  Low to high
                </label>

                <label className="">
                  <Field
                    type="radio"
                    name="sorti"
                    value="desc"
                    className="h-4 w-4 rounded border-gray-300 text-teal-400 mr-1"
                  />
                  High to low
                </label>

                <h3 className="-my-2 mt-3 flow-root">
                  <div className="flex w-full items-center justify-between bg-white py-3 text-lg text-black hover:text-gray-500">
                    Price
                  </div>
                </h3>
                <label
                  htmlFor="maxPrice"
                  className="bg-white py-3 px-3 text-sm text-gray-800"
                >
                  Min Price:
                </label>
                <Field
                  type="text"
                  name="minPrice"
                  className="bg-stone-200 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg"
                ></Field>

                <label
                  htmlFor="maxPrice"
                  className="bg-white py-3 px-3 text-sm text-gray-800 "
                >
                  Max Price:
                </label>
                <Field
                  type="text"
                  name="maxPrice"
                  className="bg-stone-200 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg"
                ></Field>

                <h3 className="-my-3 flow-root">
                  <div
                    className="flex w-full items-center justify-between bg-white py-3 text-lg text-black hover:text-gray-500"
                    id="my-radio-group"
                  >
                    Source
                  </div>
                </h3>

                <div
                  className="flex items-center"
                  role="group"
                  aria-labelledby="my-radio-group"
                >
                  <label className="mr-2">
                    <Field
                      type="radio"
                      name="source"
                      value="tata1mg"
                      className="h-4 w-4 rounded border-gray-300 text-teal-400 mr-1"
                    />
                    tata 1mg
                  </label>

                  <label className="mr-2">
                    <Field
                      type="radio"
                      name="source"
                      value="pharmeasy"
                      className="h-4 w-4 rounded border-gray-300 text-teal-400 mr-1"
                    />
                    PharmEasy
                  </label>
                  <label>
                    <Field
                      type="radio"
                      name="source"
                      value="Netmeds"
                      className="h-4 w-4 rounded border-gray-300 text-teal-400 mr-1"
                    />
                    Netmeds
                  </label>
                </div>

                <button
                  type="submit"
                  className="px-4 my-3 h-full text-white text-lg bg-[#F1CD4B] hover:text-[#00BFBE] rounded-xl"
                >
                  Save
                </button>
              </Form>
            </Formik>
          </div>

          <div className="pb-10 lg:col-span-3">
            <Head>
              <title>{medicine}</title>
            </Head>

            
            {/* Medicine description */}
            <div className="bg-white shadow-md">
              <div className="flex flex-row py-5 mx-auto gap-x-6 max-w-[75%]">
                {/* <div className="max-w-[150px]">
            <Image src={shelcal} className="" alt="shelcal" />
          </div> */}
                <div className="flex flex-col gap-y-4">
                  <div className="w-max">
                    <div className="text-5xl inline text-[#2E2D28] font-bold mr-3 capitalize">
                      {medicine}
                    </div>
                    <div className="text-md inline text-[#2E2D28]">
                      Supplement
                    </div>
                  </div>
                  <div className="text-md text-[#2E2D28]">
                    To treat vitamin D and Calcium deficiency, osteoporosis and
                    other bone-related problems.
                  </div>
                  <div className="text-md text-[#2E2D28]">
                    Shelcal 500 Tablet is a vitamin and mineral supplement. It
                    contains calcium and vitamin D3 (cholecalciferol
                    /cholecalciferol) as the main ingredient. Shelcal 500 Tablet
                    is used to treat vitamin D and Calcium deficiency.
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex flex-col mx-auto max-w-[95%] -z-10">
              {/* <div className="text-xl inline text-[#2E2D28] font-bold my-4">
                Next, pick a pharmacy to get a coupon
              </div> */}

              {/* site comparision table */}
              <div className="mx-auto bg-white w-full rounded-lg drop-shadow-md">
                
                {/* table header */}
                {/* <div className="flex flex-row justify-between border p-4">
                  <div>
                    <button onClick={() => setShowModal(true)}>
                      <div className="flex flex-row gap-x-2">
                        <div className="flex items-center text-[#3268B9] hover:underline">
                          Patiala
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="flex flex-row gap-x-2">
                    <button>
                      <div className="flex items-center text-[#3268B9]">
                        Lowest Price
                      </div>
                    </button>
                  </div>
                </div> */}

                {/* Medicine Listing */}
                {data &&
                  data.map((medicine, index) => {
                    return (
                      <div className="border flex flex-row justify-between p-2">
                        {/* site icon */}
                        <div className="flex flex-row gap-x-6 items-center">
                          <div className=" text-xl inline text-[#2E2D28] font-medium">
                            {medicine._source.Medicine_Name}
                          </div>

                          <div className="items-center text-sm ">
                            {medicine._source.Manufacturer}
                          </div>
                          {/* <div>{medicine._source.Quantity}</div> */}
                        </div>

                        {/* price */}

                        <div className="flex flex-row gap-x-3 items-right">
                          <div className="text-xl  text-[#2E2D28] font-bold">
                            ₹ {medicine._source.Real_Price}
                          </div>
                          <a href={medicine._source.Medicine_Link}>
                            <div className="min-w-[160px] max-h-[48px] p-2 bg-transparent hover:bg-gray-200 font-semibold border border-[#e2e8f0] rounded-lg text-[#087e7d] text-center cursor-pointer">
                              Get Free Savings
                            </div>
                          </a>
                        </div>
                      </div>
                    );
                  })}

                <Pincode
                  isVisible={showModal}
                  onClose={() => setShowModal(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
