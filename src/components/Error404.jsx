import React from "react";
import Button from "../components/Button"; // Button faylının yolu uyğunlaşdırılmalıdır

export default function Error404() {

  return (
    <div className="min-h-screen bg-[#f4f4f4] flex flex-col items-center justify-center text-center px-4">
      {/* Main Message */}
      <div className="max-w-xl">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">SƏHİFƏ MÖVCUD DEYİL!</h1>
        <p className="text-gray-600 mb-6">
          Bu səhifə mövcud deyil, yaxud da pozulub. <br />
          Ana səhifəyə qayıdıb, alış-verişə davam edə bilərsiniz.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            label="Davam et"
            className="bg-orange-500 hover:bg-orange-600 py-3 px-6"
          />
          <Button
            label="Əlaqə"
            className="bg-orange-500 hover:bg-orange-600 py-3 px-6"
          />
        </div>
      </div>
    </div>
  );
}
