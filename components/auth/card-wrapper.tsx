"use client";

import { Card,
        CardContent,
        CardHeader,
        CardFooter,
} from "../ui/card";
import BackButton from "./back-button";
import { Header } from "./header";
import Social from "./social";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel:string ;
    backbuttonhref:string;
    backbuttonlabel:string;
    showsocial?:boolean;
}
export const CardWrapper = ({ children, headerLabel, backbuttonhref, backbuttonlabel, showsocial }: CardWrapperProps) => {
return (
    <Card className="w-[400px] shadow-md">
        <CardHeader>
            <Header label={headerLabel}/>


        </CardHeader>
        <CardContent>
        {children}
        </CardContent>
        {showsocial && (
            <CardFooter>
                <Social />
            </CardFooter>
        )}
        <CardFooter>
            <BackButton
            label={backbuttonlabel}
            href={backbuttonhref}
            />
                

        </CardFooter>
        
    </Card>
)
}