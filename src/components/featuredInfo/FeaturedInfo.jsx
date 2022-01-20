import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Bulan ini</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">90.71/100</span>
          <span className="featuredMoneyRate">
            +5.25 <ArrowUpward  className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Di bandingkan bulan lalu</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Hari Ini</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">83.21/100</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Di bandingkan kemarin</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Minggu Ini</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">88.67</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Dibandingkan minggu kemarin</span>
      </div>
    </div>
  );
}
