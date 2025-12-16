"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { getFirstDynamicReason } from "next/dist/server/app-render/dynamic-rendering"

export default function Home() {
  const [inputValue, setInputValue] = useState("")
  const [displayValue, setDisplayValue] = useState("")

  function DBF(tal1: number, tal2: number, operand: string): number {
    let Svaret=0

    switch (operand) {
        case '+': {
          Svaret = tal1+tal2
          break
        }
        case '-': {
          Svaret = tal1-tal2
          break
        }
        case '*': {
          Svaret = tal1*tal2
          break
        }
        case '/': {
          Svaret = tal1/tal2
          break
        }
      }

    return Svaret
  }

  const handleButtonClick = () => {
    if (inputValue === "") {
      setDisplayValue("Vänligen ange ett tal eller uttryck.")
    }
    else {
      const operander = inputValue.match(/([+\-*/])/g) || ['+']
      let tal = inputValue.match(/\d+\.?\d*/g)?.map(Number) || []
      let svar = 0
 
      while (tal.length > 1) {
        svar=DBF(tal[0], tal[1], operander[0])
        tal.shift()
        tal[0]=svar
      }
      
      setDisplayValue(svar.toString())
    }
  }

  

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          "avancerad" kalkylator 
        </h1>
        
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="skriv in ett tal eller uttryck"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleButtonClick()
              }
            }}
          />
          
          <Button 
            onClick={handleButtonClick}
            className="w-full"
          >
            Beräkna
          </Button>
        </div>

        {displayValue && (
          <div className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-center">
            <p className="text-2xl font-semibold text-white break-words">
              {displayValue} 
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

