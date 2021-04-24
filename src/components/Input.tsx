import React from "react";

interface InputProps {
  value: string;
  onChange: (newValue: string) => void;
  label?: string;
  placeholder?: string;
  maxLength?: number;
}

export const TextInput: React.FC<InputProps> = ({
  value,
  onChange,
  label,
  placeholder,
}) => {
  return (
    <div className="mb-4 flex flex-col">
      {label && (
        <label className="text-brand-yellow font-bold mb-0 pb-0 uppercase text-xs">
          {label}
        </label>
      )}
      <input
        className="mt-0 border-4 border-brand-yellow shadow rounded-sm text-xl bg-gray-900 text-brand-white px-2 py-1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export const TextArea: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  label,
  maxLength,
}) => {
  return (
    <div className="mb-4 flex flex-col">
      {label && (
        <label className="text-brand-yellow font-bold mb-0 pb-0 uppercase text-xs">
          {label}
        </label>
      )}
      <textarea
        rows={12}
        className="mt-0 border-4 border-brand-yellow shadow rounded-sm text-xl bg-gray-900 text-brand-white px-2 py-1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </div>
  );
};
