import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
            />

            <Script strategy="lazyOnload" id="Analytics Script">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');
                `}
            </Script>

            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
