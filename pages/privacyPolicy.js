import Head from 'next/head';
import React from 'react';

export default function privacyPolicy() {
  return (
    <>
      <div className="">
        <Head>
          <title>Medlr</title>
          <meta name="keywords" content="medicine search" />
        </Head>

        <div className="text-5xl text-center py-6">
          <h1>Privacy Policy</h1>
        </div>
        <div className="text-xl px-11">
          <h2 className="py-2 ">
            At Medlr, we take your privacy seriously. This privacy policy
            outlines how we collect, use, and protect your personal information.
          </h2>
          <ul className="space-y-2.5" style={{ listStyleType: 'disc' }}>
            <li>
                <span className="font-semibold">Information we collect:</span>We collect information such as your name,
              email address, phone number, and prescription information when you
              use our platform.
            </li>
            <li>
                <span className="font-semibold">How we use your information:</span>
               We use your information to provide
              you with access to our platform, to improve our services, and to
              communicate with you about our products and promotions.
            </li>
            <li>
            <span className="font-semibold">How we protect your information:</span>
               We use industry-standard security
              measures to protect your information from unauthorized access or
              disclosure.
            </li>
            <li>
            <span className="font-semibold">Sharing your information:</span>
               We do not share your personal
              information with third parties without your consent, except as
              required by law.
            </li>

            <li>
            <span className="font-semibold">Your rights:</span>
               You have the right to access, modify, and delete your
              personal information at any time. You can do so by contacting us
              through our website's contact form.
            </li>
            <li>
            <span className="font-semibold">Changes to this policy:</span>
               We may update this privacy policy from
              time to time. If we make any material changes, we will notify you
              via email or through our website.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
