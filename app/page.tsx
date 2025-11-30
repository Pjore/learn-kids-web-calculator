"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [inputValue, setInputValue] = useState("")
  const [displayValue, setDisplayValue] = useState("")

  const handleButtonClick = () => {
    if (inputValue === "") {
      setDisplayValue("Vänligen ange ett tal eller uttryck.")
    }
    else {
      const operand = inputValue.match(/([+\-*/])/)![0] ?? ''
      let svar = 0

      switch (operand) {
        case '+': {
          const tal = inputValue.split(operand)
          const tal1=Number(tal[0])
          const tal2=Number(tal[1])
          svar = tal1+tal2
          break
        }
        case '-': {
          const tal = inputValue.split(operand)
          const tal1=Number(tal[0])
          const tal2=Number(tal[1])
          svar = tal1-tal2
          break
        }
        case '*': {
          const tal = inputValue.split(operand)
          const tal1=Number(tal[0])
          const tal2=Number(tal[1])
          svar = tal1*tal2
          break
        }
        case '/': {
          const tal = inputValue.split(operand)
          const tal1=Number(tal[0])
          const tal2=Number(tal[1])
          svar = tal1/tal2
          break
        }
      }
      setDisplayValue(svar.toString())
    }
     

  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          "avancerad" kalkylator (använder bara  plus.)
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
