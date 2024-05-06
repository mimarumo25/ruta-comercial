import SideNav from "../ui/dashboard/sidenav";
import VerticalMnenu from "../ui/verticalMenu"


export const metadata = {
    title: "Dashboard",
    description: "Dashboard de la aplicacion Ruta Comercial",
};

export default function RootLayout({ children }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden ">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="w-full">
                <div><VerticalMnenu/></div>
                <div className="flex-grow p-6 md:overflow-auto md:p-12">{children}</div>
            </div>
        </div>
    );
}