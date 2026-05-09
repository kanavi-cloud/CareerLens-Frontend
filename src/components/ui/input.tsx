/**
 * [ Input Component 가이드 ]
 *
 * 1. 기능:
 *    - 기본적으로 일반 <input />과 모든 속성이 같습니다. (type, value, onChange 등)
 *    - focus 상태일 때 부드러운 테두리 효과(Ring)가 들어갑니다.
 *
 * 2. 스타일 커스텀:
 *    - 너비를 조절하고 싶으면 부모 요소에서 조절하거나 `className="w-[300px]"`을 직접 줍니다.
 *    - 파일 업로드 스타일도 내장되어 있어 <Input type="file" />로 쓰면 예쁘게 나옵니다.
 */

import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  );
}

export { Input };
