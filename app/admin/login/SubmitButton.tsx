"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

export function AdminLoginSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "იგზავნება..." : "მაგიური ბმულის გაგზავნა"}
    </Button>
  );
}
