import { Switch, Route } from "wouter";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import ArticleEditor from "./ArticleEditor";

export default function AdminApp() {
  const { user, isAuthenticated, isLoading, login, logout } = useAdminAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Laden...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={login} />;
  }

  return (
    <Switch>
      <Route path="/admin" component={() => <AdminDashboard user={user} onLogout={logout} />} />
      <Route path="/admin/articles" component={() => <AdminDashboard user={user} onLogout={logout} />} />
      <Route path="/admin/articles/new" component={() => <ArticleEditor user={user} />} />
      <Route path="/admin/articles/:id/edit" component={() => <ArticleEditor user={user} />} />
      <Route path="/admin/categories" component={() => <AdminDashboard user={user} onLogout={logout} />} />
      <Route path="/admin/tags" component={() => <AdminDashboard user={user} onLogout={logout} />} />
      {/* Default fallback */}
      <Route component={() => <AdminDashboard user={user} onLogout={logout} />} />
    </Switch>
  );
}