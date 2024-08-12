interface HeaderProps {
    label: string;
}
export const Header = ({ label }: HeaderProps) => {
    return (
        <div className="flex flex-col w-full gap-y-4 items-center justify-center">
            <h1 className="text-2xl font-bold">Auth</h1>
            <p className="text-muted-foreground text-sm">{label}</p>
        </div>
    );
};