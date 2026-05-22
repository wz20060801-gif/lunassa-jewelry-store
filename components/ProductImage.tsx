import type { Product } from '@/data/products';

type ProductImageProps = {
  product?: Product;
  tone?: Product['imageTone'];
  className?: string;
  label?: string;
  large?: boolean;
};

const toneText: Record<Product['imageTone'], string> = {
  jade: 'Jade Light',
  pearl: 'Pearl Moon',
  gold: 'Gold Clover',
  onyx: 'Ink Stone',
  rose: 'Lotus Rose',
  silver: 'Silver Ripple'
};

export function ProductImage({ product, tone, className = '', label, large = false }: ProductImageProps) {
  const finalTone = tone ?? product?.imageTone ?? 'jade';

  return (
    <div className={`product-art tone-${finalTone} ${large ? 'product-art-large' : ''} ${className}`}>
      <div className="art-glow" />
      <div className="art-orbit art-orbit-one" />
      <div className="art-orbit art-orbit-two" />
      <div className="art-gem">
        <span />
      </div>
      <div className="art-chain" />
      <p>{label ?? product?.name ?? toneText[finalTone]}</p>
    </div>
  );
}
