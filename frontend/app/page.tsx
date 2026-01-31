import { Shield } from "lucide-react";
import { FakeNewsDetector } from "@/components/FakeNewsDetector";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30">
      {/* Hero Header */}
      <header className="relative overflow-hidden">
        {/* Enhanced background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-yellow-500/5 to-green-600/5" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-red-500/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-green-600/10 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-2xl" />
        
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            {/* Burkina Faso Flag - Enhanced */}
            <div className="inline-block mb-8 transform hover:scale-105 transition-transform duration-300">
              <div className="relative w-32 h-32 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm">
                {/* Flag layers */}
                <div className="absolute inset-0 flex flex-col">
                  <div className="flex-1 bg-gradient-to-br from-red-600 to-red-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-green-600 to-green-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
                  </div>
                </div>
                
                {/* Yellow star positioned between red and green */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="text-5xl drop-shadow-lg animate-pulse-slow">⭐</div>
                    <div className="absolute inset-0 bg-yellow-300/20 blur-xl rounded-full" />
                  </div>
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
              </div>
            </div>

            {/* Title with enhanced styling */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 bg-clip-text text-transparent drop-shadow-sm">
                Détecteur de Fake News
              </span>
            </h1>
            
            {/* Country badge */}
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-red-600 to-red-700 shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-green-600 to-green-700 shadow-sm" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                Burkina Faso
              </span>
            </div>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              Vérifiez instantanément la fiabilité de vos sources d&apos;information.
              <br />
              <span className="text-lg text-gray-500">Protégez-vous contre la désinformation avec l&apos;intelligence artificielle.</span>
            </p>

            {/* Trust indicators - Enhanced */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              <div className="flex items-center gap-2.5 px-5 py-2.5 bg-white/60 backdrop-blur-sm rounded-full shadow-md border border-gray-200/50 hover:shadow-lg transition-shadow">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-gray-700">Analyse IA Avancée</span>
              </div>
              
              <div className="flex items-center gap-2.5 px-5 py-2.5 bg-white/60 backdrop-blur-sm rounded-full shadow-md border border-gray-200/50 hover:shadow-lg transition-shadow">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="font-semibold text-gray-700">100% Gratuit</span>
              </div>
              
              <div className="flex items-center gap-2.5 px-5 py-2.5 bg-gradient-to-r from-red-500/10 via-yellow-500/10 to-green-600/10 backdrop-blur-sm rounded-full shadow-md border border-gray-200/50 hover:shadow-lg transition-shadow">
                <span className="text-2xl">🇧🇫</span>
                <span className="font-bold bg-gradient-to-r from-red-600 via-yellow-600 to-green-600 bg-clip-text text-transparent">
                  Fièrement Burkinabè
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-20 -mt-8">
        <FakeNewsDetector />
      </main>

      {/* Footer - Enhanced */}
      <footer className="relative border-t border-gray-200 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-yellow-500/5 to-green-600/5" />
        <div className="relative container mx-auto px-4 py-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🇧🇫</span>
              <span className="text-lg font-bold bg-gradient-to-r from-red-600 via-yellow-600 to-green-600 bg-clip-text text-transparent">
                Burkina Faso
              </span>
            </div>
            <p className="text-center text-gray-600 font-medium">
              Fait avec <span className="text-red-500 animate-pulse">❤️</span> pour le peuple Burkinabè
            </p>
            <p className="text-sm text-gray-500 font-semibold">
              Ensemble contre la désinformation • Pour une information de qualité
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
