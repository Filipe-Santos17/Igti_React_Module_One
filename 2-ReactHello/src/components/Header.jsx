export default function Header({children,size}) {
    //props são funções/eventos para permitir comunicação entre components
    //{} desestruture as props 
    let fontSize = "text-xl"
    if (size === "large"){
        fontSize = "text-2xl"
    }
    return (
        <header className="bg-green-300 mx-auto py-2">
            <h1 className={`text-center font-semibold ${fontSize}`}>
                {children}
            </h1>
        </header>
    );
}
