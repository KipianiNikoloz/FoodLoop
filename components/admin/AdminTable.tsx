import { Badge } from "@/components/ui/badge";
import type { WaitlistSignupRow } from "@/lib/admin-waitlist";

type AdminTableProps = {
  rows: WaitlistSignupRow[];
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("ka-GE", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function AdminTable({ rows }: AdminTableProps) {
  return (
    <section className="adminTableSection" aria-labelledby="admin-table-title">
      <div className="adminTableHeader">
        <h2 id="admin-table-title">მოლოდინის სიის ჩანაწერები</h2>
        <Badge variant="paper">ჯერ უახლესი</Badge>
      </div>

      {rows.length > 0 ? (
        <div className="adminTableWrap">
          <table className="adminTable">
            <thead>
              <tr>
                <th>ელფოსტა</th>
                <th>როლი</th>
                <th>წყარო</th>
                <th>ენა</th>
                <th>მიღების დრო</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <td>
                    <a href={`mailto:${row.email}`}>{row.email}</a>
                  </td>
                  <td>{row.role}</td>
                  <td>{row.source}</td>
                  <td>{row.locale}</td>
                  <td>{formatDate(row.created_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="adminEmpty">
          <h3>ელფოსტები ჯერ არ მიგვიღია</h3>
          <p>მოლოდინის სიის ჩანაწერები აქ გამოჩნდება, როცა ვიზიტორები საჯარო ფორმას შეავსებენ.</p>
        </div>
      )}
    </section>
  );
}
