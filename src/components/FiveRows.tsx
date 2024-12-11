import { enableConstants } from "../Constants/Enable"
import Toggle from "./Toggle"


const FiveRows = () => {
  return (
    <div className="flex flex-col space-y-4 p-4">
      { enableConstants.map((item, index) => (
        <div key={index} className="flex justify-between items-center">
          <div className="flex space-x-2 items-center">
              <p className="px-3 py-0.5 rounded-xl bg-primary/20 text-xs">{item.text}</p>
              <p className="text-xs">{item.subtext}</p>
          </div>
          <div className="flex items-center space-x-1">
              <Toggle />
          </div>
        </div>
      ))}
    </div>
  )
}

export default FiveRows