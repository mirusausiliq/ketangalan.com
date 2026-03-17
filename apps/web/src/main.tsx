import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { Provider as ChakraProvider } from "@/components/ui/provider"
import App from '@/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </HelmetProvider>
  </StrictMode>,
)
