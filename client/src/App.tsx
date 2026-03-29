import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Marketing from "./pages/Marketing";
import Development from "./pages/Development";
import ProjectManagement from "./pages/ProjectManagement";
import AI from "./pages/AI";
import Services from "./pages/Services";
import En from "./pages/en";
import MarketingEn from "./pages/en/MarketingEn";
import DevelopmentEn from "./pages/en/DevelopmentEn";
import ProjectManagementEn from "./pages/en/ProjectManagementEn";
import AIEn from "./pages/en/AIEn";
import ServicesEn from "./pages/en/ServicesEn";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/marketing" component={Marketing} />
      <Route path="/desenvolvimento" component={Development} />
      <Route path="/gestao" component={ProjectManagement} />
      <Route path="/ia" component={AI} />
      <Route path="/servicos" component={Services} />
      <Route path="/en" component={En} />
      <Route path="/en/marketing" component={MarketingEn} />
      <Route path="/en/development" component={DevelopmentEn} />
      <Route path="/en/management" component={ProjectManagementEn} />
      <Route path="/en/ai" component={AIEn} />
      <Route path="/en/services" component={ServicesEn} />
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
