import { Popover } from "@headlessui/react"
import classNames from "classnames"
import { Button } from "~/components/apps/Button"
import { labelClasses, formInputClasses } from "./classes"

export const SavedSearches = () => {
  return (
    <div className="flex flex-row items-center gap-5">
      <Popover className="relative">
        <Popover.Button className="px-2 py-1 font-medium rounded-md drop-shadow-lg bg-gray-50">
          Saved Searches
        </Popover.Button>
        <Popover.Panel className="w-96 absolute z-10 top-10 bg-gray-100 p-4 drop-shadow-lg rounded-lg">
          <div className="flex flex-row gap-10 items-center justify-between">
            <p className="text-lg font-medium">Search #1</p>
            <div className="flex flex-row items-center gap-5">
              <button className="border border-green-500 px-2 py-1 rounded-md font-medium text-gray-800 hover:border-green-600 active:border-green-500">
                Load
              </button>
              <button className="border border-red-500 px-2 py-1 rounded-md font-medium text-gray-800 hover:border-red-600 active:border-red-500">
                Delete
              </button>
            </div>
          </div>
        </Popover.Panel>
      </Popover>
      <Popover className="relative">
        <Popover.Button className="px-2 py-1 font-medium rounded-md drop-shadow-lg bg-gray-50">
          Save Search
        </Popover.Button>
        <Popover.Panel className="absolute w-96 z-10 top-10 bg-gray-100 p-4 drop-shadow-lg rounded-lg">
          <div className="flex flex-col">
            <label className={labelClasses}>Search Label</label>
            <input className={classNames(formInputClasses, "mb-2")} />
            <Button title="Save" />
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  )
}
