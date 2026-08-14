import { Award } from "lucide-react";
import { customerProfile } from "@/data/account";
import { AccountNav } from "@/components/account/account-nav";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initials =
    customerProfile.firstName.charAt(0) + customerProfile.lastName.charAt(0);

  return (
    <div className="container-page py-8">
      {/* Profile header */}
      <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex items-center gap-4">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-brand text-lg font-semibold text-primary-foreground">
            {initials}
          </span>
          <div>
            <h1 className="font-display text-2xl font-semibold tracking-tight text-foreground">
              {customerProfile.firstName} {customerProfile.lastName}
            </h1>
            <p className="text-sm text-muted-foreground">{customerProfile.email}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-xl bg-brand-tint px-4 py-2.5 text-sm">
          <Award size={18} className="text-brand" />
          <span className="tnum font-semibold text-brand-deep">
            {customerProfile.loyaltyPoints.toLocaleString()} points
          </span>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[240px_1fr]">
        <aside>
          <AccountNav />
        </aside>
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}
