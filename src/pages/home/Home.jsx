import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { userData } from "../../dummyData";
import WidgetRealTime from "../../components/widget/WidgetRealTime";
import WidgetHistory from "../../components/widget/WidgetHistory";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <div className="homeWidgets">
        <WidgetRealTime/>
        <WidgetHistory/>
      </div>
      <Chart data={userData} title="Grafik Penilaian Ladang" grid dataKey="Rata-rata Harian"/>
    </div>
  );
}
