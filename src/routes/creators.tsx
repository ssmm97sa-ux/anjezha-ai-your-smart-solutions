import { createFileRoute } from "@tanstack/react-router";
import { CreatorHero, CreatorTrust, CreatorCatalog, CreatorExamples, CreatorFaq } from "@/components/creator-sections";

export const Route = createFileRoute("/creators")({
  head: () => ({ meta: [
    { title: "أنجزها للمبدعين | نصوص وخطط محتوى بالدرهم الإماراتي" },
    { name: "description", content: "خدمات مكتوبة لليوتيوبرز وصناع المحتوى: عناوين وأوصاف وأفكار وخطط محتوى وMedia Kit. تبدأ من 19 AED، بدون مونتاج فيديو." },
    { property: "og:title", content: "أنجزها للمبدعين | أفكارك تصبح كلمات" },
    { property: "og:description", content: "باقات نصوص وخطط ليوتيوب وتيك توك والبودكاست والمشاريع الصغيرة. مخرجات مكتوبة فقط، بأسعار AED واضحة." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: CreatorsPage,
});

function CreatorsPage() {
  return <><CreatorHero category /><CreatorTrust /><CreatorCatalog /><CreatorExamples /><CreatorFaq /></>;
}