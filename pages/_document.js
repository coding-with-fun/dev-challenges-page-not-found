import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <meta charset="utf-8" />
                <h1>404 | Page not found</h1>

                <meta name="robots" content="index, follow" />

                <meta
                    name="google-site-verification"
                    content="ZHKCY88o4eaR5g3pqRBVa9cwWC3RZjtKmWC-UfhqqFo"
                />

                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9850066484245602"
                    crossOrigin="anonymous"
                />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500;800&family=Space+Mono:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
