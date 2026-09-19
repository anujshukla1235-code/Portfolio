"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CodeBlock({ children, ...props }: any) {
  const [isCopied, setIsCopied] = useState(false);
  
  // Extracting text from children safely
  const extractText = (node: any): string => {
    if (typeof node === 'string') return node;
    if (Array.isArray(node)) return node.map(extractText).join('');
    if (node && node.props && node.props.children) {
      return extractText(node.props.children);
    }
    return '';
  };

  const copyToClipboard = async () => {
    try {
      const text = extractText(children);
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="relative group">
      <button
        onClick={copyToClipboard}
        className="absolute top-3 right-3 p-2 bg-zinc-800 text-zinc-300 rounded-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-zinc-700 hover:text-white"
        aria-label="Copy code"
      >
        {isCopied ? <Check size={16} /> : <Copy size={16} />}
      </button>
      <pre {...props} className="p-4 bg-zinc-950 text-sm overflow-x-auto rounded-lg my-6">
        {children}
      </pre>
    </div>
  );
}
