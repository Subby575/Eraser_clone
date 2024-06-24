import React, { useState, useRef } from 'react';

interface InviteLinkPopupProps {
  link: string;
}

const InviteLinkPopup: React.FC<InviteLinkPopupProps> = ({ link }) => {
  const [copySuccess, setCopySuccess] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const copyToClipboard = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand('copy');
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 2000);
    }
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md w-80 text-center">
      <h3 className="mb-2 font-semibold">Share <span className='text-blue-900 font-bold'>SlateFlow</span> with others:</h3>
      <div className="flex items-center mt-4">
        <input
          ref={inputRef}
          type="text"
          value={link}
          readOnly
          className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none"
        />
        <button
          onClick={copyToClipboard}
          className="p-2 bg-sky-50 text-black rounded-r-lg focus:outline-none hover:bg-sky-100"
        >
          {copySuccess ? <p className="text-sky-500">{copySuccess}</p>:"Copy"}
        </button>
      </div>
      {/* {copySuccess && <p className="mt-2 text-green-500">{copySuccess}</p>} */}
    </div>
  );
};

export default InviteLinkPopup;
