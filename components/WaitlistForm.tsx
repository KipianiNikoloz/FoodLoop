"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { initialWaitlistState, joinWaitlist } from "@/app/actions/waitlist";

type WaitlistFormProps = {
  id: string;
  variant?: "hero" | "footer";
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="submitButton" type="submit" disabled={pending}>
      {pending ? "იგზავნება..." : "სიაში ჩაწერა"}
    </button>
  );
}

export function WaitlistForm({ id, variant = "hero" }: WaitlistFormProps) {
  const [state, formAction] = useActionState(joinWaitlist, initialWaitlistState);
  const isPositive = state.status === "success" || state.status === "duplicate";

  return (
    <form id={id} className={`waitlistForm waitlistForm-${variant}`} action={formAction}>
      <div className="roleGroup" aria-label="აირჩიეთ როლი">
        <label>
          <input type="radio" name="role" value="user" defaultChecked />
          <span>მომხმარებელი</span>
        </label>
        <label>
          <input type="radio" name="role" value="partner" />
          <span>ბიზნესი</span>
        </label>
      </div>
      <div className="emailRow">
        <label className="srOnly" htmlFor={`${id}-email`}>
          ელფოსტა
        </label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          placeholder="თქვენი ელფოსტა"
          autoComplete="email"
          required
        />
        <SubmitButton />
      </div>
      <p className={isPositive ? "formMessage formMessage-positive" : "formMessage"} aria-live="polite">
        {state.message}
      </p>
    </form>
  );
}
