// Though this file is optional, there are SO MANY COOL THINGS you can do here.
// Read the docs at https://github.com/nozzle/react-static/blob/master/README.md to learn more!
export default {
  siteRoot:'https://saibotx.github.io/anata-react-static/',
  Document: class CustomHtml extends Component {
  render() {
    const { Html, Head, Body, children, renderMeta } = this.props
    // const script1 = "document.createElement('picture')"
    // const script2 =
    //   "window.lazySizesConfig = window.lazySizesConfig || {}; window.lazySizesConfig.loadMode = 1"
    return (
      <Html lang="de">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
          <title>My Title</title>
          {renderMeta.styleTags}
          {/* <script dangerouslySetInnerHTML={{ __html: script1 }} /> */}
          {/* <script dangerouslySetInnerHTML={{ __html: script2 }} /> */}
          <script src="https://www.paypalobjects.com/api/checkout.js" />
        </Head>
        <Body>{children}</Body>
      </Html>
    )
  }
},
}
