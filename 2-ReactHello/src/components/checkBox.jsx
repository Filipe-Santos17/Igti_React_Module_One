export default function CheckBox({
    inputId,
    labelDescription,
    typeInput,
    inputValue,
    inputHandle,
    autoFocus
}) {
  return (
    <div className="flex flex-row space-x-4 items-start my-4">
        <input 
            autoFocus={autoFocus}
            id={inputId} 
            className="border p-1" 
            type={typeInput}
            value={inputValue}
            onChange={inputHandle}
        />
        <label htmlFor="inputName" className="text-sm mb-1">{labelDescription}</label>
    </div>
  )
}
