import NextDocument from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () => originalRenderPage({
        enchanceApp: (App) => props => sheet.collectStyles(<App {...props} />)
      })
      const initalProps = await NextDocument.getInitialProps(ctx);
      return {
        ... initalProps,
        styles: (
          <>
            {initalProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    }
  }
}
