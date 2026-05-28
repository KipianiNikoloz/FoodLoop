import { signOutAdmin } from "@/app/admin/actions";
import { Button } from "@/components/ui/button";

export function AdminTopbar() {
  return (
    <header className="adminTopbar">
      <div>
        <p className="adminEyebrow">FoodLoop ადმინი</p>
        <h1>მიღებული ელფოსტები</h1>
      </div>
      <form action={signOutAdmin}>
        <Button type="submit" variant="secondary">
          გამოსვლა
        </Button>
      </form>
    </header>
  );
}

export function AdminStats({ count, shown, userEmail }: { count: number; shown: number; userEmail: string | undefined }) {
  return (
    <section className="adminStats" aria-label="მოლოდინის სიის შეჯამება">
      <article>
        <span>სულ მიღებული</span>
        <strong>{count}</strong>
      </article>
      <article>
        <span>ნაჩვენებია უახლესი</span>
        <strong>{shown}</strong>
      </article>
      <article>
        <span>შესული ხართ როგორც</span>
        <strong>{userEmail}</strong>
      </article>
    </section>
  );
}
