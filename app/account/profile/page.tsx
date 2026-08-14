import type { Metadata } from "next";
import { ProfileForm } from "@/components/account/profile-form";

export const metadata: Metadata = {
  title: "Profile",
  description: "Update your personal details and communication preferences.",
};

export default function ProfilePage() {
  return (
    <div>
      <h2 className="text-lg font-semibold text-foreground">Profile</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Manage your personal details and preferences.
      </p>
      <div className="mt-5">
        <ProfileForm />
      </div>
    </div>
  );
}
