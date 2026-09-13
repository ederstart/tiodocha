export function GATag() {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX" />
      <script dangerouslySetInnerHTML={{ __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXX');
      `}} />
    </>
  )
}
