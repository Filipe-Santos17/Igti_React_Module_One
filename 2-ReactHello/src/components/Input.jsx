export default function Input({
    inputId,
    labelDescription,
    typeInput,
    inputValue,
    inputHandle,
    autoFocus
}) {
  return (
    <div className="flex flex-col my-4">
        <label htmlFor="inputName" className="text-sm mb-1">{labelDescription}</label>
        <input 
            autoFocus={autoFocus}
            id={inputId} 
            className="border p-1" 
            type={typeInput}
            value={inputValue}
            onChange={inputHandle}
        />
    </div>
  )
}
