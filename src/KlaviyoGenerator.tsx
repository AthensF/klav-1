import React, { useState } from 'react';
import { Mail, FileText, Layout, Share2, Shuffle, Plus, PlayCircle, ArrowUp } from 'lucide-react';

export default function KlaviyoGenerator() {
  const [prompt, setPrompt] = useState('');
  const [cards, setCards] = useState(10);
  const [style, setStyle] = useState('Default');

  const examplePrompts = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email flow for abandoned cart recovery",
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Segmentation strategy for Black Friday campaign",
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: <Layout className="w-5 h-5" />,
      title: "Create an email for new subscribers to my newsletter",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <Share2 className="w-5 h-5" />,
      title: "Product recommendation templates",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Create a nudge email for customers with items in cart",
      color: "bg-pink-50 border-pink-200"
    },
    {
      icon: <PlayCircle className="w-5 h-5" />,
      title: "Post-purchase thank you series",
      color: "bg-indigo-50 border-indigo-200"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Header */}
      <div className="border-b bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">Klaviyo Generator</span>
          </div>
          <button className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900">
            ← Back
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-center text-slate-900 mb-3">
          Generate
        </h1>
        <p className="text-center text-slate-600 text-lg mb-12">
          What marketing content would you like to create today?
        </p>

        {/* Type Selection */}
        <div className="flex gap-3 justify-center mb-8">
          {[
            { icon: <Mail />, label: 'Email' },
            { icon: <FileText />, label: 'Flow' },
            { icon: <Share2 />, label: 'SMS' }
          ].map((type, i) => (
            <button
              key={i}
              className={`flex flex-col items-center gap-2 px-8 py-4 rounded-xl border-2 transition-all ${
                i === 0
                  ? 'bg-orange-500 border-orange-500 text-white shadow-lg'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-orange-300'
              }`}
            >
              {React.cloneElement(type.icon, { className: 'w-6 h-6' })}
              <span className="text-sm font-medium">{type.label}</span>
            </button>
          ))}
        </div>

        {/* Prompt Input */}
        <div className="mb-8">
          <form
            className="relative"
            onSubmit={(e) => {
              e.preventDefault();
              if (!prompt.trim()) return;
              const baseUrl = import.meta.env.BASE_URL ?? '/';
              const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
              const targetUrl = new URL('2-klaviyo-agent-ui-animated.html', `${window.location.origin}${normalizedBase}`);
              window.location.href = targetUrl.toString();
            }}
          >
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe what you'd like to create..."
              className="w-full px-6 py-4 pr-16 rounded-xl border-2 border-slate-200 focus:border-orange-400 focus:outline-none resize-none text-slate-700"
              rows={3}
            />
            <button
              type="submit"
              className="absolute bottom-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white shadow-md transition-colors hover:bg-orange-600 disabled:opacity-50"
              disabled={!prompt.trim()}
              aria-label="Submit prompt"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </form>
        </div>

        {/* Example Prompts */}
        <div className="mb-6">
          <p className="text-center text-sm text-slate-500 mb-6">Example prompts</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {examplePrompts.map((example, i) => (
              <button
                key={i}
                className={`flex items-start gap-3 p-4 rounded-xl border-2 ${example.color} hover:shadow-md transition-all text-left group`}
                onClick={() => setPrompt(example.title)}
              >
                <div className="text-slate-700 mt-1">{example.icon}</div>
                <span className="text-sm text-slate-700 flex-1">{example.title}</span>
                <Plus className="w-5 h-5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>

        {/* Shuffle Button */}
        <div className="flex justify-center">
          <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-white border border-slate-300 hover:border-orange-400 text-sm font-medium text-slate-700 transition-colors">
            <Shuffle className="w-4 h-4" />
            Shuffle
          </button>
        </div>
      </div>
    </div>
  );
}
