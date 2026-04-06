declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
declare global {
  type CSSModule = { readonly [key: string]: string };
}
