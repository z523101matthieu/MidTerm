import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body
                    className="bg-fixed bg-gradient-to-r from-dark-500 to-dark-700 text-white">
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
