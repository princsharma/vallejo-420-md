import Image from "next/image";
import { UserRound } from "lucide-react";

import { cn } from "@/lib/utils";

export function DoctorPhotoPlaceholder({
  label,
  photoSrc,
  className = "aspect-[4/3]",
  priority = false,
}: {
  label: string;
  photoSrc?: string;
  className?: string;
  priority?: boolean;
}) {
  if (photoSrc) {
    return (
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-2xl bg-section-green",
          className
        )}
      >
        <Image
          src={photoSrc}
          alt={label}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 480px"
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`${label}, photo coming soon`}
      className={cn(
        "flex w-full items-center justify-center rounded-2xl bg-section-green text-dark-green",
        className
      )}
    >
      <UserRound className="size-12" strokeWidth={1.5} aria-hidden />
    </div>
  );
}
