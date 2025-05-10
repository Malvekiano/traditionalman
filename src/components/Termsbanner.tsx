'use client';

import { useEffect, useState } from 'react';

export default function TermsBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('termsAccepted');
    if (!accepted) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('termsAccepted', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-300 p-4 shadow-md z-50">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <p className="text-sm text-gray-700">
          Al continuar usando este sitio, aceptas nuestros{' '}
          <a href="/terminos" className="underline text-blue-600">Términos y Condiciones</a>.
        </p>
        <button
          onClick={handleAccept}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}