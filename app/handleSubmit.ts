"use server";
import { redirect } from "next/navigation";

export async function handleSubmit(formData: FormData) {
  const message = formData.get("message")?.toString() || "";
  if (message.toLowerCase().includes("contact")) {
    redirect("/contact");
  }
  // Optionally, handle other logic here
}
