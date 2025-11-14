
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-sgi-white text-sgi-dark-gray pt-32 pb-20">
      <div className="max-w-screen-lg mx-auto px-4">
        <h1 className="text-4xl font-bold text-sgi-deep-blue mb-8">Privacy Policy</h1>
        <div className="prose lg:prose-xl">
          <p>
            This Privacy Policy describes how Sinjoh Group International ("we," "us," or "our") collects, uses, and discloses your personal information when you visit our website.
          </p>
          <h2 className="text-2xl font-bold mt-6">Information We Collect</h2>
          <p>
            We may collect personal information that you provide to us directly, such as your name, email address, phone number, and any other information you choose to provide when you fill out a contact form or subscribe to our newsletter.
          </p>
          <h2 className="text-2xl font-bold mt-6">How We Use Your Information</h2>
          <p>
            We use the information we collect to:
            <ul>
              <li>Respond to your inquiries and fulfill your requests.</li>
              <li>Send you marketing communications, if you have opted in to receive them.</li>
              <li>Improve our website and services.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </p>
          <h2 className="text-2xl font-bold mt-6">Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
          </p>
          <h2 className="text-2xl font-bold mt-6">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at contact@sinjohgroup.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
