import { useState, useEffect } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  BoldIcon, 
  ItalicIcon, 
  ListIcon, 
  LinkIcon, 
  ImageIcon, 
  HeadingIcon,
  CodeIcon,
  QuoteIcon,
  EyeIcon,
  EditIcon
} from 'lucide-react';

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function MarkdownEditor({ value, onChange, placeholder, className }: MarkdownEditorProps) {
  const [activeTab, setActiveTab] = useState('write');

  // Markdown insertion helpers
  const insertMarkdown = (before: string, after = '', placeholder = '') => {
    const textarea = document.getElementById('markdown-textarea') as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    const textToInsert = selectedText || placeholder;
    
    const beforeText = value.substring(0, start);
    const afterText = value.substring(end);
    
    const newValue = beforeText + before + textToInsert + after + afterText;
    onChange(newValue);
    
    // Set cursor position after insertion
    setTimeout(() => {
      const newPosition = start + before.length + textToInsert.length;
      textarea.setSelectionRange(newPosition, newPosition);
      textarea.focus();
    }, 0);
  };

  // Markdown to HTML conversion (basic)
  const markdownToHtml = (markdown: string) => {
    return markdown
      // Headers
      .replace(/^### (.*$)/gm, '<h3 class="text-lg font-semibold mb-2 mt-4">$1</h3>')
      .replace(/^## (.*$)/gm, '<h2 class="text-xl font-bold mb-3 mt-6">$1</h2>')
      .replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold mb-4 mt-8">$1</h1>')
      
      // Bold and Italic
      .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href=\"$2\" class=\"text-blue-600 hover:underline\">$1</a>')
      
      // Images
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src=\"$2\" alt=\"$1\" class=\"max-w-full h-auto rounded my-4\" />')
      
      // Code blocks
      .replace(/```([\s\S]*?)```/g, '<pre class=\"bg-gray-100 p-3 rounded overflow-x-auto my-4\"><code>$1</code></pre>')
      .replace(/`([^`]+)`/g, '<code class=\"bg-gray-100 px-1 rounded\">$1</code>')
      
      // Blockquotes
      .replace(/^> (.+)/gm, '<blockquote class=\"border-l-4 border-gray-300 pl-4 my-4 italic\">$1</blockquote>')
      
      // Lists
      .replace(/^- (.+)/gm, '<li class=\"ml-4\">$1</li>')
      .replace(/(<li.*<\/li>)/gs, '<ul class=\"list-disc my-2\">$1</ul>')
      .replace(/^\d+\. (.+)/gm, '<li class=\"ml-4\">$1</li>')
      
      // Line breaks
      .replace(/\n\n/g, '</p><p class=\"mb-4\">')
      .replace(/\n/g, '<br />');
  };

  const toolbarButtons = [
    {
      icon: BoldIcon,
      label: 'Bold',
      action: () => insertMarkdown('**', '**', 'bold text'),
    },
    {
      icon: ItalicIcon,
      label: 'Italic', 
      action: () => insertMarkdown('*', '*', 'italic text'),
    },
    {
      icon: HeadingIcon,
      label: 'Heading',
      action: () => insertMarkdown('## ', '', 'Heading'),
    },
    {
      icon: ListIcon,
      label: 'List',
      action: () => insertMarkdown('- ', '', 'List item'),
    },
    {
      icon: LinkIcon,
      label: 'Link',
      action: () => insertMarkdown('[', '](url)', 'link text'),
    },
    {
      icon: ImageIcon,
      label: 'Image',
      action: () => insertMarkdown('![', '](image-url)', 'alt text'),
    },
    {
      icon: CodeIcon,
      label: 'Code',
      action: () => insertMarkdown('`', '`', 'code'),
    },
    {
      icon: QuoteIcon,
      label: 'Quote',
      action: () => insertMarkdown('> ', '', 'blockquote'),
    },
  ];

  return (
    <div className={`border rounded-lg ${className}`}>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex items-center justify-between border-b px-3 py-2">
          <TabsList className="grid w-fit grid-cols-2">
            <TabsTrigger value="write" className="flex items-center gap-2">
              <EditIcon className="h-4 w-4" />
              Schrijven
            </TabsTrigger>
            <TabsTrigger value="preview" className="flex items-center gap-2">
              <EyeIcon className="h-4 w-4" />
              Preview
            </TabsTrigger>
          </TabsList>
          
          <div className="flex items-center gap-1">
            <Badge variant="secondary" className="text-xs">
              Markdown
            </Badge>
          </div>
        </div>

        <TabsContent value="write" className="m-0">
          {/* Toolbar */}
          <div className="flex flex-wrap gap-1 p-2 border-b bg-gray-50">
            {toolbarButtons.map((button, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={button.action}
                className="h-8 w-8 p-0"
                title={button.label}
                type="button"
                data-testid={`button-${button.label.toLowerCase()}`}
              >
                <button.icon className="h-4 w-4" />
              </Button>
            ))}
          </div>
          
          {/* Editor */}
          <Textarea
            id="markdown-textarea"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder || "Schrijf je artikel in Markdown...\\n\\n# Hoofdtitel\\n\\n## Subtitel\\n\\n**Vet** en *cursief* tekst.\\n\\n- Lijst item 1\\n- Lijst item 2\\n\\n[Link naar website](https://example.com)"}
            className="min-h-[400px] resize-none border-0 focus:ring-0 font-mono text-sm"
            data-testid="textarea-markdown"
          />
        </TabsContent>

        <TabsContent value="preview" className="m-0">
          <div className="p-4 min-h-[400px] prose max-w-none">
            {value ? (
              <div 
                className="markdown-preview"
                dangerouslySetInnerHTML={{ 
                  __html: `<p class="mb-4">${markdownToHtml(value)}</p>` 
                }}
              />
            ) : (
              <div className="text-gray-500 italic">
                Nog geen inhoud om te tonen. Schrijf wat in de editor om een preview te zien.
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}