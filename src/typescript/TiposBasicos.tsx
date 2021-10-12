export const TiposBasicos = () => {

    const nombre: string = 'Daniel'
    const edad: number = 34
    const estadoActivo:boolean = true

    const poderes: string[]=[]

    return (
        <>
        <h3>Tipos basicos</h3>    
        {nombre}, {edad},{(estadoActivo) ?'activo':'no activo'}
        <br />
        {poderes.join(', ')}        
        </>
    )
}
