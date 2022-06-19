import React from "react"

export const ControlSubheader: React.FC = () => (
  <div className="border-b border-gray-700 shadow bg-off-black w-full">
    {/* Regular Menu Links */}
    <div className="hidden md:flex flex-row items-center justify-end py-2 max-w-2xl mx-auto">
      <a className="text-md font-bold text-brand-yellow" href="/doc/resume.pdf">
        Download PDF
      </a>
    </div>
  </div>
)
