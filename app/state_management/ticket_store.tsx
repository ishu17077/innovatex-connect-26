"use client"
import { useContext, useMemo } from "react"
import { createContext } from "react"
import { create } from "zustand"

interface TicketState {
    isAvailable: boolean
    redirectUrl: string
}

const TicketContext = createContext<TicketStore | null>(null)

function createTicketStore() {
    console.log(process.env.NEXT_PUBLIC_TICKET_AVAILABLE)
    return create<TicketState>(() => ({
        isAvailable: (Number(process.env.NEXT_PUBLIC_TICKET_AVAILABLE ?? 1)) !== 0 ? true : false,
        redirectUrl: (process.env.NEXT_PUBLIC_TICKET_REDIRECT_URL ?? "/dashboard")
    }))
}

export function TicketProvider({ children }: { children: React.ReactNode }) {
    const store = useMemo(() => createTicketStore(), [])
    return (<TicketContext.Provider value={store}>{children}</TicketContext.Provider>)
}

export default function GetTicketStore(): TicketStore {
    const context = useContext(TicketContext)
    if (!context) {
        throw Error("GetTicketStore must be used inside of a TicketProvider")
    }
    return context
}



export type TicketStore = ReturnType<typeof createTicketStore>