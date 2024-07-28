import { useEffect, useState } from "react"
import Aula from "@/core/model/Aula" /** Modelo Importado  */ 
import listaDeAulas from "../data/listaDeAulas" /** Dados mocado  */ 

export default function useAulas(){ /** Criando Nosso Hook  */ 
    const [aulas, setAulas] = useState<Aula[]>(listaDeAulas) /** 1. Criando nosso controle de lista */ 
    const [duracaoTotal, setDuracaoTotal] = useState<number>(0) /** 2. Criando nosso estado e inicializando com 0 */ 

    function filtrarAulas(status?: string | null){ /** 3. Criando nosso filtro  */ 
        const aulasFiltradas: Aula[] = listaDeAulas.filter( 
            (aula) => aula.status === status || !status 
        )
        setAulas(aulasFiltradas) /** Setando o resultado do filtro  */ 
    }
    useEffect(() => { /** 4. Carregando nassa lista criada no estado  */ 
        calcularDuracaoTotal(aulas)
    }, [aulas])
    function calcularDuracaoTotal(aulas: Aula[]){ /** 5. Calculando os itens de uma lista  */ 
        const duracaoTotal = aulas.reduce((acc, aula) => acc + aula.duracao, 0)
        setDuracaoTotal(duracaoTotal)
    }
    return{ 
        aulas, /** 6. retorna a lista state  */ 
        duracaoTotal, /** 7. retorna total em uma lista */ 
        filtrarAulas /** 8. retorna a lista filtrada  */ 
    }
}
