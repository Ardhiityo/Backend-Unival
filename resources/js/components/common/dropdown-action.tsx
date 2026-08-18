import { EllipsisVerticalIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Fragment } from "react";
import { Button } from "../ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type DropdownActionProps = {
    menus: {
        label: ReactNode;
        variant: "default" | "destructive";
        action: () => void;
        type: "button" | "link";
    }[];
};

const DropwdownAction = ({ menus }: DropdownActionProps) => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger render={
                    <Button variant="outline" size="icon" className="size-8">
                        <EllipsisVerticalIcon />
                    </Button>
                }>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center">
                    {menus.map((menu, index) => (
                        <Fragment key={`menu-${index}`}>
                            <DropdownMenuItem
                                variant={menu.variant}
                                onClick={menu.action}
                            >
                                {menu.label}
                            </DropdownMenuItem>
                            {menus.length - 1 !== index && <DropdownMenuSeparator />}
                        </Fragment>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};

export default DropwdownAction;
