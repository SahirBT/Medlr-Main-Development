import Head from "next/head"

export default function about() {
  return (
    <div>
			<Head>
        <title>About</title>
        <meta name='keywords' content='medicine search'/>
      </Head>
			{/* <h1>About</h1>
       */}
       <div className="absolute h-max  left-0 bg-gray-300">
         <h1>About Medler</h1>
         <span>
          One-Stop Shop For Easy Comparison  <br />
          Shopping And Negotiations For  <br />
          Prescription Medicines 
         </span>

       </div>
    </div>
  );
}