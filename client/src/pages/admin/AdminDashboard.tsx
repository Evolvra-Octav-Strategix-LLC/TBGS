import { useQuery } from "@tanstack/react-query";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  PlusIcon, 
  FileTextIcon, 
  TagIcon, 
  FolderIcon,
  EditIcon,
  EyeIcon,
  TrashIcon,
  CalendarIcon
} from "lucide-react";
import { useLocation } from "wouter";
import { formatDistanceToNow } from "date-fns";
import { nl } from "date-fns/locale";

interface AdminDashboardProps {
  user: any;
  onLogout: () => void;
}

export default function AdminDashboard({ user, onLogout }: AdminDashboardProps) {
  const [, navigate] = useLocation();
  
  const token = localStorage.getItem("adminToken");
  const authHeaders = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  // Fetch articles
  const { data: articles = [], isLoading: articlesLoading } = useQuery({
    queryKey: ["/api/admin/articles"],
    queryFn: async () => {
      const response = await fetch("/api/admin/articles", {
        headers: authHeaders,
      });
      if (!response.ok) throw new Error("Failed to fetch articles");
      return response.json();
    },
  });

  // Fetch categories
  const { data: categories = [] } = useQuery({
    queryKey: ["/api/admin/categories"],
    queryFn: async () => {
      const response = await fetch("/api/admin/categories", {
        headers: authHeaders,
      });
      if (!response.ok) throw new Error("Failed to fetch categories");
      return response.json();
    },
  });

  // Fetch tags
  const { data: tags = [] } = useQuery({
    queryKey: ["/api/admin/tags"],
    queryFn: async () => {
      const response = await fetch("/api/admin/tags", {
        headers: authHeaders,
      });
      if (!response.ok) throw new Error("Failed to fetch tags");
      return response.json();
    },
  });

  const publishedCount = articles.filter((a: any) => a.status === 'published').length;
  const draftCount = articles.filter((a: any) => a.status === 'draft').length;

  const getStatusColor = (status: string) => {
    return status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold text-gray-900">TBGS Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welkom, {user.name}</span>
              <Button
                variant="outline"
                onClick={onLogout}
                data-testid="button-logout"
              >
                Uitloggen
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Totaal Artikelen</p>
                  <p className="text-2xl font-bold text-gray-900">{articles.length}</p>
                </div>
                <FileTextIcon className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Gepubliceerd</p>
                  <p className="text-2xl font-bold text-green-600">{publishedCount}</p>
                </div>
                <EyeIcon className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Concepten</p>
                  <p className="text-2xl font-bold text-yellow-600">{draftCount}</p>
                </div>
                <EditIcon className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Categorieën</p>
                  <p className="text-2xl font-bold text-purple-600">{categories.length}</p>
                </div>
                <FolderIcon className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <PlusIcon className="h-5 w-5 mr-2" />
                Nieuw Artikel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Maak een nieuw kennisbank artikel met de markdown editor
              </p>
              <Button
                onClick={() => navigate("/admin/articles/new")}
                className="w-full"
                data-testid="button-new-article"
              >
                Artikel Schrijven
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FolderIcon className="h-5 w-5 mr-2" />
                Categorieën Beheren
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Beheer je artikel categorieën zoals TDS, TSS, TOS, TBS
              </p>
              <Button
                variant="outline"
                onClick={() => navigate("/admin/categories")}
                className="w-full"
                data-testid="button-manage-categories"
              >
                Categorieën
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TagIcon className="h-5 w-5 mr-2" />
                Tags Beheren
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Organiseer artikelen met tags zoals "daklekkage", "onderhoud"
              </p>
              <Button
                variant="outline"
                onClick={() => navigate("/admin/tags")}
                className="w-full"
                data-testid="button-manage-tags"
              >
                Tags
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Articles */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recente Artikelen</CardTitle>
            <Button
              variant="outline"
              onClick={() => navigate("/admin/articles")}
              data-testid="button-view-all-articles"
            >
              Alle Artikelen
            </Button>
          </CardHeader>
          <CardContent>
            {articlesLoading ? (
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            ) : articles.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <FileTextIcon className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>Nog geen artikelen</p>
                <Button
                  className="mt-4"
                  onClick={() => navigate("/admin/articles/new")}
                  data-testid="button-create-first-article"
                >
                  Eerste Artikel Schrijven
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {articles.slice(0, 5).map((article: any) => (
                  <div 
                    key={article.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-medium text-gray-900">{article.title}</h3>
                        <Badge className={getStatusColor(article.status)}>
                          {article.status === 'published' ? 'Gepubliceerd' : 'Concept'}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        {formatDistanceToNow(new Date(article.updatedAt), { 
                          addSuffix: true,
                          locale: nl 
                        })}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigate(`/admin/articles/${article.id}/edit`)}
                        data-testid={`button-edit-article-${article.id}`}
                      >
                        <EditIcon className="h-4 w-4" />
                      </Button>
                      {article.status === 'published' && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => window.open(`/kennisbank/${article.slug}`, '_blank')}
                          data-testid={`button-view-article-${article.id}`}
                        >
                          <EyeIcon className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}