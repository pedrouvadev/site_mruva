import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Marketing from "./pages/Marketing";
import Development from "./pages/Development";
import ProjectManagement from "./pages/ProjectManagement";
import AI from "./pages/AI";
import Fullstack from "./pages/Fullstack";
import Services from "./pages/Services";
import English from "./pages/English";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/sobre" component={About} />
      <Route path="/marketing" component={Marketing} />
      <Route path="/desenvolvimento" component={Development} />
      <Route path="/gestao" component={ProjectManagement} />
      <Route path="/ia" component={AI} />
      <Route path="/fullstack" component={Fullstack} />
      <Route path="/servicos" component={Services} />
      <Route path="/ingles" component={English} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
