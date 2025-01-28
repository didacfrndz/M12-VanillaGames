import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'assets',
server:{
  /* port: 8080, */ // Podemos definir el puerto de salida
  hot: true
}
})


  

