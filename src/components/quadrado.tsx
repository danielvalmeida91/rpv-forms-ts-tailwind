interface IQuadrado {
    ehArredondado: boolean
    ehAzul?: boolean
    // width: string
    // height: string
}

export function Quadrado({ ehArredondado = false, ehAzul }: IQuadrado) {
    return (
        <>
            <div className={`${ehAzul === true ? "bg-blue-400" : "bg-black"} w-[100px] h-[100px] text-zinc-50 ${ehArredondado === true ? 'rounded-2xl' : ''}`}>Teste</div>
        </>
    )
}