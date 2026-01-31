"use client";

import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface AnalysisResult {
  fiable: boolean;
  score: number;
  explication: string;
}

const FakeNewsDetector: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDetect = async () => {
    if (!input.trim()) {
      setError('Veuillez entrer un texte à analyser.');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch('http://localhost:8000/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ texte: input }),
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data: AnalysisResult = await response.json();
      setResult(data);
    } catch (err) {
      setError('Erreur lors de l\'analyse. Vérifiez que le backend est en cours d\'exécution.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Détecteur de Fake News</h2>
      <textarea
        className="w-full p-4 border border-gray-300 rounded-lg mb-4"
        rows={6}
        placeholder="Collez votre article ou texte ici..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleDetect}
        disabled={loading}
        className="w-full bg-gradient-to-r from-red-600 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-shadow disabled:opacity-50"
      >
        {loading ? 'Analyse en cours...' : 'Analyser'}
      </button>
      {error && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700">{error}</p>
        </div>
      )}
      {result && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center mb-2">
            <div className={`inline-flex items-center justify-center w-6 h-6 mr-2 rounded-full ${
              result.score >= 80 ? 'bg-green-500' : 
              result.score <= 20 ? 'bg-red-500' : 'bg-yellow-500'
            }`}>
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            </div>
            <p className="text-lg font-medium">
              {result.score >= 80 ? '✅ Vérifié' : 
               result.score <= 20 ? '❌ Faux' : '⚠️ Moyen'}
            </p>
          </div>
          <p className="text-sm text-gray-600 mb-2">Score de fiabilité: {result.score}/100</p>
          <p className="text-gray-800">{result.explication}</p>
        </div>
      )}
    </div>
  );
};

export { FakeNewsDetector };