import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import CreativeLoader from "./components/CreativeLoader";
import WhatsAppButton from "./components/WhatsAppButton";

const Home = lazy(() => import("./pages/Home"));
const Marketing = lazy(() => import("./pages/Marketing"));
const Development = lazy(() => import("./pages/Development"));
const ProjectManagement = lazy(() => import("./pages/ProjectManagement"));
const AI = lazy(() => import("./pages/AI"));
const Services = lazy(() => import("./pages/Services"));
const Ingles = lazy(() => import("./pages/ingles"));
const PromptSpecialist = lazy(() => import("./pages/PromptSpecialist"));
const GrowthMarketing = lazy(() => import("./pages/GrowthMarketing"));
const HomeEn = lazy(() => import("./pages/HomeEn"));
const MarketingEn = lazy(() => import("./pages/en/MarketingEn"));
const DevelopmentEn = lazy(() => import("./pages/en/DevelopmentEn"));
const ProjectManagementEn = lazy(() => import("./pages/en/ProjectManagementEn"));
const AIEn = lazy(() => import("./pages/en/AIEn"));
const ServicesEn = lazy(() => import("./pages/en/ServicesEn"));
const English = lazy(() => import("./pages/en/english"));
const PromptSpecialistEn = lazy(() => import("./pages/en/PromptSpecialistEn"));
const GrowthMarketingEn = lazy(() => import("./pages/en/GrowthMarketingEn"));

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/marketing" component={Marketing} />
      <Route path="/desenvolvimento" component={Development} />
      <Route path="/gestao" component={ProjectManagement} />
      <Route path="/ia" component={AI} />
      <Route path="/servicos" component={Services} />
      <Route path="/servicos/prompt-specialist" component={PromptSpecialist} />
      <Route path="/servicos/growth-marketing" component={GrowthMarketing} />
      <Route path="/ingles" component={Ingles} />
      <Route path="/en" component={HomeEn} />
      <Route path="/en/marketing" component={MarketingEn} />
      <Route path="/en/development" component={DevelopmentEn} />
      <Route path="/en/management" component={ProjectManagementEn} />
      <Route path="/en/ai" component={AIEn} />
      <Route path="/en/services" component={ServicesEn} />
      <Route path="/en/services/prompt-specialist" component={PromptSpecialistEn} />
      <Route path="/en/services/growth-marketing" component={GrowthMarketingEn} />
      <Route path="/en/english" component={English} />
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
          <Suspense fallback={<CreativeLoader />}>
            <Router />
          </Suspense>
          <WhatsAppButton />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
