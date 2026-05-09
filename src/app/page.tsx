/**
 * [ CareerLens Main - Premium SaaS Style ]
 *
 * 변경 포인트:
 * 1. 폰트 대비: 제목은 아주 크고 굵게(text-6xl, font-black), 설명은 가독성 좋게(text-lg).
 * 2. 부드러운 컬러: 순수 검정 대신 Slate-900을 사용하여 눈의 피로도를 낮춤.
 * 3. 카드 디자인: 테두리를 없애고 미세한 그림자(shadow-sm)와 백그라운드 컬러로 구분.
 */

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Target,
  Sparkles,
  ChevronRight,
  Globe2,
  Compass,
  BarChart3,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFFFF] text-slate-900">
      {/* --- 네비게이션: 더 얇고 투명하게 --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-slate-100 bg-white/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Target className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">CareerLens</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {["채용공고", "맞춤추천", "준비로드맵", "자료실"].map((menu) => (
              <Link
                key={menu}
                href="#"
                className="text-[15px] font-medium text-slate-500 hover:text-blue-600 transition-colors"
              >
                {menu}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-slate-500 font-medium">
              로그인
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-5">
              시작하기
            </Button>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* --- 히어로 섹션: 압도적인 타이포그래피 --- */}
        <section className="relative pt-40 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full animate-bounce">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-bold">
                AI 기반 해외취업 서포터 출시
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-slate-900">
              해외취업의 막막함,
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                데이터로 선명하게
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
              CareerLens는 단순한 정보 제공을 넘어, 당신의 역량을 분석하고
              <br className="hidden md:block" />
              목표 국가에 도달하는 최적의 경로를 설계합니다.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="h-16 px-10 text-lg font-extrabold bg-blue-600 rounded-2xl shadow-lg shadow-blue-200 hover:scale-105 transition-transform"
              >
                내 적합도 진단하기
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-16 px-10 text-lg font-bold border-slate-200 rounded-2xl hover:bg-slate-50"
              >
                공고 먼저보기
              </Button>
            </div>
          </div>
        </section>

        {/* --- 핵심 기능: 그리드 레이아웃 스타일 변경 --- */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 카드 1 */}
            <div className="group p-8 rounded-[32px] bg-slate-50 hover:bg-blue-600 transition-all duration-500">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-10 group-hover:rotate-12 transition-transform">
                <BarChart3 className="text-blue-600 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                AI 역량 분석
              </h3>
              <p className="text-slate-500 leading-relaxed group-hover:text-blue-100 transition-colors">
                단순 매칭이 아닙니다. 글로벌 채용 데이터와 당신의 이력을 정밀
                대조하여 합격 가능성을 도출합니다.
              </p>
            </div>

            {/* 카드 2 */}
            <div className="group p-8 rounded-[32px] bg-slate-50 hover:bg-blue-600 transition-all duration-500">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-10 group-hover:rotate-12 transition-transform">
                <Compass className="text-blue-600 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                커스텀 로드맵
              </h3>
              <p className="text-slate-500 leading-relaxed group-hover:text-blue-100 transition-colors">
                비자 발급부터 현지 적응까지. 당신의 상황에 딱 맞는 단계별
                체크리스트를 생성해 드립니다.
              </p>
            </div>

            {/* 카드 3 */}
            <div className="group p-8 rounded-[32px] bg-slate-50 hover:bg-blue-600 transition-all duration-500">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-10 group-hover:rotate-12 transition-transform">
                <Globe2 className="text-blue-600 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                국가별 인사이트
              </h3>
              <p className="text-slate-500 leading-relaxed group-hover:text-blue-100 transition-colors">
                흩어져 있는 해외 취업 정보를 한곳에 모았습니다. 신뢰할 수 있는
                최신 자료실을 이용해 보세요.
              </p>
            </div>
          </div>
        </section>

        {/* --- CTA 섹션: 하단 강조 --- */}
        <section className="px-6 py-20">
          <div className="max-w-5xl mx-auto bg-slate-900 rounded-[40px] p-12 md:p-20 text-center space-y-8 overflow-hidden relative">
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                지금 바로 글로벌 커리어를
                <br />
                시작할 준비가 되셨나요?
              </h2>
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full h-14 px-8 font-bold text-blue-600 hover:bg-white"
              >
                CareerLens 무료 체험하기{" "}
                <ChevronRight className="ml-1 w-5 h-5" />
              </Button>
            </div>
            {/* 장식용 배경 원 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full -mr-20 -mt-20 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full -ml-20 -mb-20 blur-3xl" />
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-slate-100 text-center">
        <p className="text-sm text-slate-400 font-medium">
          © 2024 CareerLens. Designed for Next Generation Careers.
        </p>
      </footer>
    </div>
  );
}
