import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "./theme-provider"

export function ModeToggle() {
    const { setTheme, theme } = useTheme()

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")}
            className="absolute top-5 right-5">
            {theme === "dark" ?
                <Moon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:-rotate-0" /> :
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:-rotate-90" />
            }
        </Button>

    )
}