import { CloseIcon } from "~/icons/Close"

interface Props {
  onClose: () => void
}

export const Announcement: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="flex flex-row items-center justify-between bg-slate-600 p-4">
      <p className="font-medium">
        Check out my new website:{" "}
        <a className="text-brand-yellow" href="https://sunny.gg">
          sunny.gg
        </a>
      </p>
      <button onClick={onClose}>
        <CloseIcon />
      </button>
    </div>
  )
}
