import { useEffect, useState } from "react"

import Aula from "@/core/model/Aula" /** Modelo Importado  */ 
import listaDeAulas from "../data/listaDeAulas" /** Dados mocado  */ 

export default function useAulas(){ /** Criando Nosso Hook  */ 
    const [aulas, setAulas] = useState<Aula[]>(listaDeAulas) /** Criando nosso controle de lista */ 
    const [duracaoTotal, setDuracaoTotal] = useState<number>(0) /** Criando nosso estado e inicializando com 0 */ 

    function filtrarAulas(status?: string | null){ /** Criando nosso filtro  */ 
        const aulasFiltradas: Aula[] = listaDeAulas.filter( 
            (aula) => aula.status === status || !status 
        )
        setAulas(aulasFiltradas) /** Setando o resultado do filtro  */ 
    }

    useEffect(() => { /** Carregando nassa lista criada no estado  */ 
        calcularDuracaoTotal(aulas)
    }, [aulas])

    function calcularDuracaoTotal(aulas: Aula[]){ /** Calculando os itens de uma lista  */ 
        const duracaoTotal = aulas.reduce((acc, aula) => acc + aula.duracao, 0)
        setDuracaoTotal(duracaoTotal)
    }

    return{ 
        aulas, /** retorna a lista state  */ 
        duracaoTotal, /** retorna total em uma lista */ 
        filtrarAulas /** retorna a lista filtrada  */ 
    }
}
