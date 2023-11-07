import Head from "next/head"
import TitleApp from "../titleApp/titleApp"

interface LayoutProps {
    title: string
    showButtonBack?: boolean
    children: React.ReactNode
}

// Componente para plantilla general de la aplicación
export default function Layout({
    title,
    showButtonBack,
    children
}: LayoutProps) {
  return (
        <>
            <Head>
                {title}
            </Head>
            <TitleApp title={title} showButtonBack={showButtonBack}/>
            {children}
        </>
    )
}
