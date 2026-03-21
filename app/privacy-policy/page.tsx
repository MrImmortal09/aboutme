import React from 'react';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for our messaging application',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
        
        <p className="mb-4 text-sm text-gray-500">
          <strong>Effective Date:</strong> {new Date().toLocaleDateString()}<br />
          <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
        </p>

        <p className="mb-6">
          Welcome to our messaging application (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your information when you use our messaging application and related services (collectively, the &quot;Service&quot;).
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">1. Information We Collect</h2>
        <p className="mb-4">
          We believe in data minimization and only collect the information absolutely essential to provide you with our Service.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Email Address:</strong> Used solely as your account identifier, for essential account-related communication, and to facilitate your connection with other users on the platform.</li>
          <li><strong>Password:</strong> Your password is encrypted using industry-standard hashing algorithms before it is stored in our database. We <strong>never</strong> store or have access to your plain-text password.</li>
          <li><strong>Messaging Data:</strong> All messages are transmitted securely. We store your message history on our servers so you can access your conversations across devices. However, we do not monitor or use the content of your messages for any purpose other than delivering them to the intended recipient.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>To Provide the Service:</strong> To create your account, authenticate your login, and enable you to send and receive messages.</li>
          <li><strong>To Maintain Security:</strong> To protect your account from unauthorized access, monitor for fraudulent activity, and ensure the overall security of the platform.</li>
          <li><strong>To Communicate:</strong> To send essential account support messages, security alerts, and technical notices. We will not use your email for marketing without your explicit consent.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">3. How We Protect Your Data</h2>
        <p className="mb-4">Security is our top priority. We implement strict technical and organizational measures to safeguard your data:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Password Encryption:</strong> Passwords are cryptographically hashed and salted. Even in the event of a data breach, your raw password remains mathematically infeasible to decrypt.</li>
          <li><strong>Data Transmission Security:</strong> All data transmitted between your device and our servers is encrypted in transit using Transport Layer Security (TLS/SSL).</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">4. Sharing Your Information</h2>
        <p className="mb-6">
          We respect your privacy and <strong>do not sell, rent, or trade your personal information to third parties.</strong> We may only disclose your information in exceptional circumstances, such as legal compliance or protecting the rights of our users.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">5. Your Data Rights</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Right to Access:</strong> You can request a copy of the personal data we hold about you.</li>
          <li><strong>Right to Deletion:</strong> You have the right to permanently delete your account at any time. Upon account deletion, your email and hashed password will be permanently removed from our active servers.</li>
          <li><strong>Right to Rectification:</strong> You can update or correct your email address at any time through the app settings.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">6. Changes to This Privacy Policy</h2>
        <p className="mb-6">
          We may update this Privacy Policy from time to time. If we make significant changes, we will notify you by sending a notice to the email address associated with your account or by placing a prominent notice within the app.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">7. Contact Us</h2>
        <p className="mb-6">
          If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please contact our support team.
        </p>
      </div>
    </div>
  );
}
