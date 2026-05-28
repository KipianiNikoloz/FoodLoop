import { signOutAdmin } from "@/app/admin/actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function AdminDenied() {
  return (
    <main className="adminShell">
      <section className="adminDenied" aria-labelledby="admin-denied-title">
        <Badge variant="tomato">403</Badge>
        <h1 id="admin-denied-title">წვდომა შეზღუდულია</h1>
        <p>ეს ანგარიში ადმინისტრატორების სიაში არ არის დამატებული.</p>
        <form action={signOutAdmin}>
          <Button type="submit" variant="secondary">
            გამოსვლა
          </Button>
        </form>
      </section>
    </main>
  );
}
