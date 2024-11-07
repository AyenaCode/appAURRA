import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactList } from "./_components/ContactList";

export default function AdminPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Liste des messages de contact</CardTitle>
        </CardHeader>
        <CardContent>
          <ContactList />
        </CardContent>
      </Card>
    </div>
  );
}
