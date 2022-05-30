export default function onlineOff({isOnline = true}) {
    const colorLeter = isOnline ? 'bg-green-200': 'bg-red-200';
    return (
        <span className={`${colorLeter} p-2 text-white`}>
            {isOnline ? 'Online' : 'Offline'}
        </span>
    )
}
