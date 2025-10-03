import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Mail, FileText, Layout, Share2, Shuffle, Plus, PlayCircle, ArrowUp } from 'lucide-react';
export default function KlaviyoGenerator() {
    const [prompt, setPrompt] = useState('');
    const [cards, setCards] = useState(10);
    const [style, setStyle] = useState('Default');
    const examplePrompts = [
        {
            icon: _jsx(Mail, { className: "w-5 h-5" }),
            title: "Email flow for abandoned cart recovery",
            color: "bg-orange-50 border-orange-200"
        },
        {
            icon: _jsx(FileText, { className: "w-5 h-5" }),
            title: "Segmentation strategy for Black Friday campaign",
            color: "bg-purple-50 border-purple-200"
        },
        {
            icon: _jsx(Layout, { className: "w-5 h-5" }),
            title: "Create an email for new subscribers to my newsletter",
            color: "bg-blue-50 border-blue-200"
        },
        {
            icon: _jsx(Share2, { className: "w-5 h-5" }),
            title: "Product recommendation templates",
            color: "bg-green-50 border-green-200"
        },
        {
            icon: _jsx(Mail, { className: "w-5 h-5" }),
            title: "Create a nudge email for customers with items in cart",
            color: "bg-pink-50 border-pink-200"
        },
        {
            icon: _jsx(PlayCircle, { className: "w-5 h-5" }),
            title: "Post-purchase thank you series",
            color: "bg-indigo-50 border-indigo-200"
        }
    ];
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 to-orange-50", children: [_jsx("div", { className: "border-b bg-white shadow-sm", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center", children: _jsx(Mail, { className: "w-5 h-5 text-white" }) }), _jsx("span", { className: "text-xl font-bold text-slate-900", children: "Klaviyo Generator" })] }), _jsx("button", { className: "px-4 py-2 text-sm text-slate-600 hover:text-slate-900", children: "\u2190 Back" })] }) }), _jsxs("div", { className: "max-w-5xl mx-auto px-6 py-12", children: [_jsx("h1", { className: "text-5xl font-bold text-center text-slate-900 mb-3", children: "Generate" }), _jsx("p", { className: "text-center text-slate-600 text-lg mb-12", children: "What marketing content would you like to create today?" }), _jsx("div", { className: "flex gap-3 justify-center mb-8", children: [
                            { icon: _jsx(Mail, {}), label: 'Email' },
                            { icon: _jsx(FileText, {}), label: 'Flow' },
                            { icon: _jsx(Share2, {}), label: 'SMS' }
                        ].map((type, i) => (_jsxs("button", { className: `flex flex-col items-center gap-2 px-8 py-4 rounded-xl border-2 transition-all ${i === 0
                                ? 'bg-orange-500 border-orange-500 text-white shadow-lg'
                                : 'bg-white border-slate-200 text-slate-700 hover:border-orange-300'}`, children: [React.cloneElement(type.icon, { className: 'w-6 h-6' }), _jsx("span", { className: "text-sm font-medium", children: type.label })] }, i))) }), _jsx("div", { className: "mb-8", children: _jsxs("form", { className: "relative", onSubmit: (e) => {
                                e.preventDefault();
                                if (!prompt.trim())
                                    return;
                                const baseUrl = import.meta.env.BASE_URL ?? '/';
                                const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
                                const targetUrl = new URL('2-klaviyo-agent-ui-animated.html', `${window.location.origin}${normalizedBase}`);
                                window.location.href = targetUrl.toString();
                            }, children: [_jsx("textarea", { value: prompt, onChange: (e) => setPrompt(e.target.value), placeholder: "Describe what you'd like to create...", className: "w-full px-6 py-4 pr-16 rounded-xl border-2 border-slate-200 focus:border-orange-400 focus:outline-none resize-none text-slate-700", rows: 3 }), _jsx("button", { type: "submit", className: "absolute bottom-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white shadow-md transition-colors hover:bg-orange-600 disabled:opacity-50", disabled: !prompt.trim(), "aria-label": "Submit prompt", children: _jsx(ArrowUp, { className: "h-5 w-5" }) })] }) }), _jsxs("div", { className: "mb-6", children: [_jsx("p", { className: "text-center text-sm text-slate-500 mb-6", children: "Example prompts" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: examplePrompts.map((example, i) => (_jsxs("button", { className: `flex items-start gap-3 p-4 rounded-xl border-2 ${example.color} hover:shadow-md transition-all text-left group`, onClick: () => setPrompt(example.title), children: [_jsx("div", { className: "text-slate-700 mt-1", children: example.icon }), _jsx("span", { className: "text-sm text-slate-700 flex-1", children: example.title }), _jsx(Plus, { className: "w-5 h-5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" })] }, i))) })] }), _jsx("div", { className: "flex justify-center", children: _jsxs("button", { className: "flex items-center gap-2 px-5 py-2 rounded-lg bg-white border border-slate-300 hover:border-orange-400 text-sm font-medium text-slate-700 transition-colors", children: [_jsx(Shuffle, { className: "w-4 h-4" }), "Shuffle"] }) })] })] }));
}
