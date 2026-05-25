import Link from 'next/link';

export default function StoryPage() {
  return (
    <main>
      <section className="page-hero story-hero">
        <div>
          <p className="eyebrow">Brand Story</p>
          <h1>LUNASSA · 东方月色珠宝</h1>
          <p>We translate Chinese cultural symbols into wearable jewelry for global women: quiet, refined, meaningful and never over-decorated.</p>
          <Link className="primary-button" href="/new-arrivals">Shop the story</Link>
        </div>
       <img
  src="/images/publicimageslunassa-brand-story.jpg"
  alt="LUNASSA Jewelry Brand Story"
  style={{
    width: '100%',
    height: 'clamp(430px, 55vw, 670px)',
    objectFit: 'cover',
    display: 'block',
    borderRadius: '34px',
    background: '#f7f5f0'
  }}
/>
      </section>

      <section className="story-grid">
        <article>
          <span>01</span>
          <h2>品牌理念</h2>
          <p>LUNASSA 来源于月光、女性与东方审美的结合。我们希望把中国文化中的温润、克制、含蓄与祝福感，转化为海外消费者也能自然理解的轻奢珠宝。</p>
        </article>
        <article>
          <span>02</span>
          <h2>设计灵感</h2>
          <p>月、玉、云、水纹、竹、莲是核心灵感库。设计上避免符号堆砌，更多使用线条、色彩和比例，让首饰既有文化出处，也适合日常穿搭。</p>
        </article>
        <article>
          <span>03</span>
          <h2>材质工艺</h2>
          <p>目前模板使用环保合金、锆石、仿绿玉髓、珍珠风材质作为商品资料占位。后续可替换为你们真实材质、证书、供应链和工艺图片。</p>
        </article>
        <article>
          <span>04</span>
          <h2>包装服务</h2>
          <p>每件商品可配置品牌礼盒、擦拭布、贺卡和售后卡。独立站要传达“适合送礼”和“值得信任”，而不是单纯打折促销。</p>
        </article>
      </section>

      <section className="consultation-cta">
        <div>
          <p className="eyebrow">Culture abroad</p>
          <h2>高级感来自留白、故事与信任</h2>
          <p>页面节奏刻意慢一点，先让顾客理解品牌，再进入系列、商品详情、预约咨询和购买路径。</p>
        </div>
        <Link className="outline-button" href="/appointment">Book consultation</Link>
      </section>
    </main>
  );
}
