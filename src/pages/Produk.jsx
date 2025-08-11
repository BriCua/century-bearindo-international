import ProductDisplay from "../components/ProductDisplay";
import BackButton from "../components/BackButton";

export default function Produk() {
  return (
    <>
      <title>Produk - PT. Century Bearindo International</title>
      <meta name="description" content="Jelajahi berbagai produk unggulan kami, termasuk bearings, housing, bearing otomotif, wiper blades, maintenance tools, dan banyak lagi."/>
      <meta name="keywords" content="produk bearing, jual bearing, bearing industri, bearing otomotif, wiper blades, maintenance tools, hydraulic tools, pneumatic control, conveyor belts, v-belts, motor, gearboxes" />
      <BackButton target="/#produk-section" />
      <div>
        <ProductDisplay />
      </div>
    </>
  );
}