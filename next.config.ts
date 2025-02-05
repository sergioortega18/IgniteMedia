// next.config.js
module.exports = {
  TrailingSlash: true,
  generateStaticParams: async function (
    _defaultPathMap: any,
    { dev, dir, outDir, distDir, buildId }: any
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      // Agrega aquí todas las rutas de tu aplicación
    }
  },
}