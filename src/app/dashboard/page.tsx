/**
 * [ Dashboard Page - shadcn/ui Version ]
 *
 * 1. 컴포넌트 위치: @/components/ui/*.tsx (shadcn 표준 경로)
 * 2. 레이아웃 제어:
 *    - Card는 조립식(Header, Content, Footer)으로 구성됩니다.
 *    - 모든 컴포넌트 사이의 간격은 부모 요소의 `space-y-8` 또는 `gap-8`로 제어합니다.
 * 3. 상태 관리:
 *    - useState를 통해 모달(Dialog)의 열림/닫힘을 제어합니다.
 */

"use client";

import { useState } from "react";

// shadcn/ui 공식 컴포넌트 임포트
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50/50 p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* 1. 헤더 섹션: shadcn Card 구성 요소 활용 */}
        <header className="flex justify-between items-center bg-white p-6 rounded-xl border shadow-sm">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              대시보드
            </h1>
            <p className="text-sm text-muted-foreground">
              관리자 권한으로 시스템을 제어하고 멤버를 관리합니다.
            </p>
          </div>
          <Button onClick={() => setIsModalOpen(true)} size="lg">
            새 멤버 추가
          </Button>
        </header>

        {/* 2. 메인 그리드 영역 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 시스템 현황 카드 */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div className="space-y-1">
                <CardTitle>시스템 현황</CardTitle>
                <CardDescription>서버 가동 상태 및 점유율</CardDescription>
              </div>
              <Badge
                variant="outline"
                className="bg-green-50 text-green-700 border-green-200"
              >
                정상
              </Badge>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">CPU 점유율</span>
                  <span className="font-medium">70%</span>
                </div>
                {/* 게이지 바 커스텀 */}
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 transition-all"
                    style={{ width: "70%" }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 빠른 설정 카드 */}
          <Card>
            <CardHeader>
              <CardTitle>빠른 설정</CardTitle>
              <CardDescription>
                특정 사용자를 즉시 검색하거나 필터링합니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">검색어</label>
                <Input placeholder="사용자 이름을 입력하세요..." />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                필터 적용
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* 3. 멤버 추가 모달 (Dialog) */}
        {/* shadcn의 Dialog는 open 속성으로 상태를 제어합니다. */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>새 멤버 초대</DialogTitle>
              <DialogDescription>
                팀에 합류할 멤버의 정보를 입력하세요. 초대 메일이 즉시
                발송됩니다.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">이름</label>
                <Input placeholder="홍길동" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">이메일</label>
                <Input type="email" placeholder="user@example.com" />
              </div>
            </div>
            <DialogFooter className="gap-2 sm:gap-0">
              <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
                취소
              </Button>
              <Button onClick={() => setIsModalOpen(false)}>초대하기</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
