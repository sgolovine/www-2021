import classNames from "classnames"

interface Props {
  lightBg?: boolean
}

export const CopyrightText: React.FC<Props> = ({ lightBg }) => {
  const year = new Date().getFullYear().toString()
  const linkClasses = classNames(
    "hover:underline",
    "decoration-2",
    "underline-offset-2",
    {
      "text-gray-800": lightBg,
      "hover:text-gray-400": !lightBg,
      "text-white": !lightBg,
    }
  )

  return (
    <div className="p-4 text-center">
      <a
        className={linkClasses}
        href="https://sunnygolovine.com"
      >{`Copyright ${year}, Sunny Golovine`}</a>
    </div>
  )
}
