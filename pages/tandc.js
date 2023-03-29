import Head from 'next/head';
import React from 'react';

export default function terms() {
  return (
    <>
      <div className="">
        <Head>
          <title>Medlr</title>
          <meta name="keywords" content="medicine search" />
        </Head>

        <div className="text-5xl text-center py-6">
          <h1>Terms and Conditions</h1>
        </div>
        <div className="text-xl ">
          <h2 className="py-2 ">
            Welcome to Medlr. By using our platform, you agree to the following
            terms and conditions:
          </h2>
          <ul className="space-y-2.5" style={{ listStyleType: 'disc' }}>
            <li>
              Medlr does not sell or distribute medications directly. Instead,
              we connect consumers with e-pharmacies that offer the products
              they are looking for.
            </li>
            <li>
              Medlr is not responsible for the quality, safety, or efficacy of
              the medications sold by the e-pharmacies listed on our platform.
            </li>
            <li>
              Consumers are solely responsible for verifying the authenticity
              and legality of the medications they purchase through our
              platform.
            </li>
            <li>
              Medlr is not liable for any damages, losses, or expenses incurred
              as a result of using our platform.
            </li>
            <li>
              Medlr is not responsible for any discrepancies between the
              information provided on our platform and the information provided
              by e-pharmacies.
            </li>
            <li>
              Medlr does not endorse or recommend any specific e-pharmacy or
              medication.
            </li>
            <li>
              Medlr is not responsible for any adverse reactions or side effects
              resulting from the use of medication purchased through our
              platform.
            </li>
            <li>
              Medlr may terminate or suspend your account at any time for
              violating our terms and conditions.
            </li>
            <li>
              By using our platform, you agree to comply with all applicable
              laws and regulations related to the purchase and sale of
              prescription medications.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
