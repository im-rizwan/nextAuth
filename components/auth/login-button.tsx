"use client";
import { useRouter } from "next/navigation";

interface LoginButtonProps {
children: React.ReactNode;
mode?: "modal" | "redirect",
asChild?: boolean,

}   

export const LoginButton = ({
children,
mode ='redirect',
asChild,
}: LoginButtonProps) => {

    const router = useRouter();
    const onClick = () => {
        router.push("/auth/login");
        console.log("log in button clicked");
        
    }
    if(mode === "modal") {
        return (
            <span>
                TODO: Implement Modal
            </span>
        )
    }
    return (
        <span onClick={onClick}>
            {children}
        </span>
    )
};