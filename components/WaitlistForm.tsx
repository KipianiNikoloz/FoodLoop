"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { initialWaitlistState, joinWaitlist } from "@/app/actions/waitlist";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type WaitlistFormProps = {
  id: string;
  variant?: "hero" | "footer";
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="submitButton" type="submit" disabled={pending}>
      {pending ? "იგზავნება..." : "შემომიერთდი სიაში"}
    </Button>
  );
}

export function WaitlistForm({ id, variant = "hero" }: WaitlistFormProps) {
  const [state, formAction] = useActionState(joinWaitlist, initialWaitlistState);
  const isPositive = state.status === "success" || state.status === "duplicate";

  return (
    <form id={id} className={`waitlistForm waitlistForm-${variant}`} action={formAction}>
      <RadioGroup className="roleGroup" aria-label="აირჩიეთ როლი">
        <RadioGroupItem name="role" value="user" defaultChecked>
          მომხმარებელი
        </RadioGroupItem>
        <RadioGroupItem name="role" value="partner">
          ბიზნესი
        </RadioGroupItem>
      </RadioGroup>
      <div className="emailRow">
        <label className="srOnly" htmlFor={`${id}-email`}>
          ელფოსტა
        </label>
        <Input
          id={`${id}-email`}
          name="email"
          type="email"
          placeholder="თქვენი ელ. ფოსტა"
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
