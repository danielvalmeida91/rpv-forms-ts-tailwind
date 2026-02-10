import { twMerge } from "tailwind-merge"

interface IQuadrado {
    className?: string
    // text: string
    children: React.ReactNode
}

export function Quadrado({ className, children }: IQuadrado) {
    return (
        <>
            <div className={twMerge('bg-black w-[100px] h-[100px] text-zinc-50', className)}>{children}</div>
        </>
    )
}