import AppHeader from "../../components/layout/AppHeader";

export default function DashboardPage() {
  return (
    <main className="min-h-screen p-8">
      <AppHeader />

      <h1 className="text-3xl font-bold mb-4">
        Dashboard Lapinus
      </h1>

      <p>
        Bem-vindo ao painel principal.
      </p>
    </main>
  );
}