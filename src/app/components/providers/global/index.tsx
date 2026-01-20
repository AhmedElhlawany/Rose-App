import ReactQueryProvider from "../../react-quary.provider";
import NextAuthProvider from "./components/next-auth.provider";

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <ReactQueryProvider>
            <NextAuthProvider>
                {children}
            </NextAuthProvider>
        </ReactQueryProvider>

    )
}