# LUNASSA 商品图更新说明

本版本已把你上传的产品图加入到网站中：

1. Moonlit Blue Halo Necklace（月光蓝宝石镶钻项链）
2. Azure Halo Bracelet（天蓝椭圆宝石镶钻手链）
3. Green Gourd Jade Necklace（绿玉葫芦镶钻项链）
4. Blue Cloud Tablet Necklace（冰蓝九珠方牌项链）

图片位置：
public/images/products/

关键代码：
- data/products.ts：新增商品数据和图片路径
- components/ProductImage.tsx：支持真实商品图片
- app/products/[slug]/page.tsx：详情页显示主图和缩略图
- app/globals.css：商品图样式 + 首页左下角文案保留

上传到 GitHub 时，请上传本文件夹里的所有内容到仓库根目录，然后 Commit changes。
