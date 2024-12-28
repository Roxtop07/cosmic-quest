/// <reference types="vite/client" />

declare module '*.mp4' {
  const mp4Source: string;
  export default mp4Source;
}

declare module '*.jpg' {
  const jpgSrc: string;
  export default jpgSrc;
}