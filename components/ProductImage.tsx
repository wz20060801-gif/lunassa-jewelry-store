import type { Product } from '@/data/products';

type ProductImageProps = {
  product?: Product;
  tone?: Product['imageTone'];
  className?: string;
  label?: string;
  large?: boolean;
  imageIndex?: number;
};

const toneText: Record<Product['imageTone'], string> = {
  jade: 'Jade Light',
  pearl: 'Pearl Moon',
  gold: 'Gold Clover',
  onyx: 'Ink Stone',
  rose: 'Lotus Rose',
  silver: 'Silver Ripple'
};

export function ProductImage({
  product,
  tone,
  className = '',
  label,
  large = false,
  imageIndex = 0
}: ProductImageProps) {
  const finalTone = tone ?? product?.imageTone ?? 'jade';
  const imageSrc = product?.images?.[imageIndex] ?? product?.images?.[0];

  if (imageSrc) {
    return (
      <div className={`product-art real-product-photo tone-${finalTone} ${large ? 'product-art-large' : ''} ${className}`}>
        <img
          src={imageSrc}
          alt={label ?? product?.name ?? toneText[finalTone]}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            borderRadius: large ? '34px' : '24px'
          }}
        />
      </div>
    );
  }

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
