'use client'

import Layout from "@/components/templates/Layout";
import { ElementType, useState } from "react";

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface SelectProps{
    Select: ElementType
}

export default function Cadastro( props: SelectProps){
    const [nome, setNome] = useState('')
    const [sexo, setSexo] = useState('')
    return(
        <Layout>
            <h1>Cadastro</h1>

            <div className="flex">
                    <form className="bg-gray-500 p-3 m-3 flex flex-col gap-3 rounded-t-2xl pt-10 px-10">
                        
                        <input 
                            type="text" 
                            value={nome}
                            onChange={ e => setNome(e.target.value) }
                            placeholder="nome completo"
                            className="p-3" 
                        />

                        <select className="p-3" value={sexo} onChange={ text => setSexo(text.target.value) }>
                            <option value="feminino">feminino</option>
                            <option value="masculino">masculino</option>
                        </select>

                        <p className="mt-5 p-5 bg-gray-600 rounded-t-xl text-white"> 
                            <span className="text-sm"> Nome: {nome} </span> <br />
                            <span className="text-sm"> Sexo: {sexo} </span>
                        </p>
                    </form>

                    <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Cadastre em um Curso</CardTitle>
                        <CardDescription>Seja bem vindo no nosso portal de treinamento</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Nome</Label>
                            <Input id="name" placeholder="Nome completo" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="framework">Cursos</Label>

                            <Select>
                                <SelectTrigger>
                                <SelectValue placeholder="Selecione" />
                                </SelectTrigger>
                                <SelectContent position="popper" >
                                    <SelectItem value="Angular" >Angular</SelectItem>
                                    <SelectItem value="NextJS"  >NextJS</SelectItem>
                                    <SelectItem value="React"   >React</SelectItem>
                                    <SelectItem value="VUE"     >VUE</SelectItem>
                                </SelectContent>
                            </Select>

                            </div>
                        </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">Cancelar</Button>
                        <Button>Cadastrar</Button>
                    </CardFooter>
                    </Card>
            </div>
        </Layout>
    )
}