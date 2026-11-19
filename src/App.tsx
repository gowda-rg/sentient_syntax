import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => (
  <>
    <Toaster
      position="bottom-center"
      toastOptions={{
        classNames: {
          toast: "hire-card !bg-[var(--glass-fill)] border-[var(--glass-border)] text-[var(--fg)] font-sans",
        },
      }}
    />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;