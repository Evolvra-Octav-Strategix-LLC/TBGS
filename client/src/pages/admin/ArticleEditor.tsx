import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'wouter';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { MarkdownEditor } from '@/components/MarkdownEditor';
import { useToast } from '@/hooks/use-toast';
import { 
  SaveIcon, 
  EyeIcon, 
  ArrowLeftIcon, 
  TagIcon,
  XIcon,
  CheckIcon,
  PlusIcon
} from 'lucide-react';
import { apiRequest } from '@/lib/queryClient';

interface ArticleEditorProps {
  user: any;
}

export default function ArticleEditor({ user }: ArticleEditorProps) {
  const { id } = useParams();
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const isEditing = id !== 'new';

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    metaTitle: '',
    metaDescription: '',
    keywords: '',
    featuredImage: '',
    categoryId: '',
    status: 'draft' as 'draft' | 'published',
  });

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [newTagName, setNewTagName] = useState('');
  const [showNewTag, setShowNewTag] = useState(false);

  const token = localStorage.getItem('adminToken');
  const authHeaders = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  // Fetch article if editing
  const { data: article, isLoading: articleLoading } = useQuery({
    queryKey: [`/api/admin/articles/${id}`],
    queryFn: async () => {
      if (!isEditing) return null;
      const response = await fetch(`/api/admin/articles/${id}`, {
        headers: authHeaders,
      });
      if (!response.ok) throw new Error('Failed to fetch article');
      return response.json();
    },
    enabled: isEditing,
  });

  // Fetch categories
  const { data: categories = [] } = useQuery({
    queryKey: ['/api/admin/categories'],
    queryFn: async () => {
      const response = await fetch('/api/admin/categories', {
        headers: authHeaders,
      });
      if (!response.ok) throw new Error('Failed to fetch categories');
      return response.json();
    },
  });

  // Fetch tags
  const { data: tags = [] } = useQuery({
    queryKey: ['/api/admin/tags'],
    queryFn: async () => {
      const response = await fetch('/api/admin/tags', {
        headers: authHeaders,
      });
      if (!response.ok) throw new Error('Failed to fetch tags');
      return response.json();
    },
  });

  // Create tag mutation
  const createTagMutation = useMutation({
    mutationFn: async (tagData: { name: string; slug: string }) => {
      const response = await fetch('/api/admin/tags', {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify(tagData),
      });
      if (!response.ok) throw new Error('Failed to create tag');
      return response.json();
    },
    onSuccess: (newTag) => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/tags'] });
      setSelectedTags(prev => [...prev, newTag.id]);
      setNewTagName('');
      setShowNewTag(false);
      toast({
        title: 'Tag aangemaakt',
        description: `Tag "${newTag.name}" is succesvol aangemaakt.`,
      });
    },
    onError: (error: any) => {
      toast({
        title: 'Tag aanmaken mislukt',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  // Save article mutation
  const saveArticleMutation = useMutation({
    mutationFn: async (data: any) => {
      const url = isEditing ? `/api/admin/articles/${id}` : '/api/admin/articles';
      const method = isEditing ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: authHeaders,
        body: JSON.stringify({ ...data, tagIds: selectedTags }),
      });
      if (!response.ok) throw new Error('Failed to save article');
      return response.json();
    },
    onSuccess: (savedArticle) => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/articles'] });
      toast({
        title: isEditing ? 'Artikel bijgewerkt' : 'Artikel opgeslagen',
        description: `Artikel "${savedArticle.title}" is succesvol ${isEditing ? 'bijgewerkt' : 'opgeslagen'}.`,
      });
      if (!isEditing) {
        navigate(`/admin/articles/${savedArticle.id}/edit`);
      }
    },
    onError: (error: any) => {
      toast({
        title: 'Opslaan mislukt',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  // Load article data when editing
  useEffect(() => {
    if (article) {
      setFormData({
        title: article.title || '',
        slug: article.slug || '',
        excerpt: article.excerpt || '',
        content: article.content || '',
        metaTitle: article.metaTitle || '',
        metaDescription: article.metaDescription || '',
        keywords: article.keywords || '',
        featuredImage: article.featuredImage || '',
        categoryId: article.categoryId || '',
        status: article.status || 'draft',
      });
      
      if (article.tags) {
        setSelectedTags(article.tags.map((tag: any) => tag.id));
      }
    }
  }, [article]);

  // Auto-generate slug from title
  useEffect(() => {
    if (formData.title && !isEditing) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      setFormData(prev => ({ ...prev, slug }));
    }
  }, [formData.title, isEditing]);

  const handleSave = (status?: 'draft' | 'published') => {
    const dataToSave = { ...formData };
    if (status) {
      dataToSave.status = status;
    }
    saveArticleMutation.mutate(dataToSave);
  };

  const handleCreateTag = () => {
    if (!newTagName.trim()) return;
    
    const slug = newTagName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    
    createTagMutation.mutate({ name: newTagName.trim(), slug });
  };

  const toggleTag = (tagId: string) => {
    setSelectedTags(prev => 
      prev.includes(tagId) 
        ? prev.filter(id => id !== tagId)
        : [...prev, tagId]
    );
  };

  const removeTag = (tagId: string) => {
    setSelectedTags(prev => prev.filter(id => id !== tagId));
  };

  if (articleLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Artikel laden...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => navigate('/admin')}
                data-testid="button-back"
              >
                <ArrowLeftIcon className="h-4 w-4 mr-2" />
                Terug
              </Button>
              <h1 className="text-xl font-semibold text-gray-900">
                {isEditing ? 'Artikel Bewerken' : 'Nieuw Artikel'}
              </h1>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                onClick={() => handleSave('draft')}
                disabled={saveArticleMutation.isPending}
                data-testid="button-save-draft"
              >
                <SaveIcon className="h-4 w-4 mr-2" />
                Concept Opslaan
              </Button>
              <Button
                onClick={() => handleSave('published')}
                disabled={saveArticleMutation.isPending}
                data-testid="button-publish"
              >
                <EyeIcon className="h-4 w-4 mr-2" />
                {formData.status === 'published' ? 'Update' : 'Publiceren'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Artikel Inhoud</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Titel *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Bijv: Daklekkage Herkennen en Voorkomen"
                    data-testid="input-title"
                  />
                </div>

                <div>
                  <Label htmlFor="slug">URL Slug</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                    placeholder="daklekkage-herkennen-voorkomen"
                    data-testid="input-slug"
                  />
                </div>

                <div>
                  <Label htmlFor="excerpt">Samenvatting</Label>
                  <Textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                    placeholder="Korte beschrijving voor in overzichten..."
                    rows={3}
                    data-testid="textarea-excerpt"
                  />
                </div>

                <div>
                  <Label>Inhoud *</Label>
                  <MarkdownEditor
                    value={formData.content}
                    onChange={(content) => setFormData(prev => ({ ...prev, content }))}
                    placeholder="Schrijf je artikel hier..."
                    className="mt-2"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Status Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Status
                  <Badge 
                    className={formData.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                  >
                    {formData.status === 'published' ? 'Gepubliceerd' : 'Concept'}
                  </Badge>
                </CardTitle>
              </CardHeader>
            </Card>

            {/* Category */}
            <Card>
              <CardHeader>
                <CardTitle>Categorie</CardTitle>
              </CardHeader>
              <CardContent>
                <Select
                  value={formData.categoryId}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, categoryId: value }))}
                  data-testid="select-category"
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Kies een categorie" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category: any) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TagIcon className="h-4 w-4 mr-2" />
                  Tags
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Selected tags */}
                {selectedTags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {selectedTags.map(tagId => {
                      const tag = tags.find((t: any) => t.id === tagId);
                      return tag ? (
                        <Badge
                          key={tagId}
                          variant="secondary"
                          className="cursor-pointer hover:bg-red-100"
                          onClick={() => removeTag(tagId)}
                        >
                          {tag.name}
                          <XIcon className="h-3 w-3 ml-1" />
                        </Badge>
                      ) : null;
                    })}
                  </div>
                )}

                {/* Available tags */}
                <div className="max-h-40 overflow-y-auto space-y-1">
                  {tags.map((tag: any) => (
                    <div
                      key={tag.id}
                      className={`flex items-center justify-between p-2 border rounded cursor-pointer hover:bg-gray-50 ${
                        selectedTags.includes(tag.id) ? 'bg-blue-50 border-blue-200' : ''
                      }`}
                      onClick={() => toggleTag(tag.id)}
                    >
                      <span className="text-sm">{tag.name}</span>
                      {selectedTags.includes(tag.id) && (
                        <CheckIcon className="h-4 w-4 text-blue-600" />
                      )}
                    </div>
                  ))}
                </div>

                {/* New tag form */}
                {showNewTag ? (
                  <div className="space-y-2 p-3 border rounded-lg bg-gray-50">
                    <Input
                      value={newTagName}
                      onChange={(e) => setNewTagName(e.target.value)}
                      placeholder="Tag naam..."
                      data-testid="input-new-tag"
                    />
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={handleCreateTag}
                        disabled={createTagMutation.isPending || !newTagName.trim()}
                        data-testid="button-create-tag"
                      >
                        Aanmaken
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setShowNewTag(false);
                          setNewTagName('');
                        }}
                      >
                        Annuleren
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowNewTag(true)}
                    className="w-full"
                    data-testid="button-add-tag"
                  >
                    <PlusIcon className="h-4 w-4 mr-2" />
                    Nieuwe Tag
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* SEO */}
            <Card>
              <CardHeader>
                <CardTitle>SEO Optimalisatie</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="metaTitle">Meta Titel</Label>
                  <Input
                    id="metaTitle"
                    value={formData.metaTitle}
                    onChange={(e) => setFormData(prev => ({ ...prev, metaTitle: e.target.value }))}
                    placeholder="SEO titel..."
                    maxLength={60}
                    data-testid="input-meta-title"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {formData.metaTitle.length}/60 karakters
                  </p>
                </div>

                <div>
                  <Label htmlFor="metaDescription">Meta Beschrijving</Label>
                  <Textarea
                    id="metaDescription"
                    value={formData.metaDescription}
                    onChange={(e) => setFormData(prev => ({ ...prev, metaDescription: e.target.value }))}
                    placeholder="SEO beschrijving..."
                    maxLength={160}
                    rows={3}
                    data-testid="textarea-meta-description"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {formData.metaDescription.length}/160 karakters
                  </p>
                </div>

                <div>
                  <Label htmlFor="keywords">Keywords</Label>
                  <Input
                    id="keywords"
                    value={formData.keywords}
                    onChange={(e) => setFormData(prev => ({ ...prev, keywords: e.target.value }))}
                    placeholder="daklekkage, onderhoud, reparatie"
                    data-testid="input-keywords"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}