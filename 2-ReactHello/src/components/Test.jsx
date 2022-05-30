export default function Test(props) {
    console.log(props)
    return (
        <Test //todo esse conteúdo é enviado atraves de props
            number={10}
            string="Teste"
            visible //todo boolean, ja é true por padrão
            data={{ a: 1, b: 2 }} 
            onClick={() => { console.log("function") }} //exemplo de envio de função
        />
    );
}
