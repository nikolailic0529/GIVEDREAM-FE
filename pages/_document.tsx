import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document'


export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        return await Document.getInitialProps(ctx)
    }
    render (){

        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    />

                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}
