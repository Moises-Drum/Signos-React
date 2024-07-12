    import React from "react";
    import Titulo from "../Titulo"
    import '../ListaDeSignos/style.css'
    import ItemLista from "../ItemLista"

    const ListaDeSignos = () => {
    return (
        <>
            <header>
                <Titulo/>
            </header>

            <main>
                <ItemLista signo="Aquário" dataInicio="21/01" dataFim="19/02"/>
                <ItemLista signo="Peixes" dataInicio="20/02" dataFim="20/03"/>
                <ItemLista signo="Áries" dataInicio="21/03" dataFim="20/04"/>
                <ItemLista signo="Touro" dataInicio="21/04" dataFim="20/05"/>
                <ItemLista signo="Gêmeos" dataInicio="21/05" dataFim="20/06"/>
                <ItemLista signo="Câncer" dataInicio="21/06" dataFim="22/07"/>
                <ItemLista signo="Leão" dataInicio="23/07" dataFim="22/08"/>
                <ItemLista signo="Virgem" dataInicio="23/08" dataFim="22/09"/>
                <ItemLista signo="Libra" dataInicio="23/09" dataFim="22/10"/>
                <ItemLista signo="Escorpião" dataInicio="23/10" dataFim="21/11"/>
                <ItemLista signo="Sagitário" dataInicio="22/11" dataFim="21/12"/>
                <ItemLista signo="Capricórnio" dataInicio="22/12" dataFim="20/01"/>

            </main>
        </>
        
    );}

    export default ListaDeSignos;
