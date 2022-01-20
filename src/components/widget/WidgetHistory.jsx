
export default function WidgetHistory() {
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Riwayat Kegiatan Terakhir</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Pekerja</th>
          <th className="widgetLgTh">Tanggal</th>
          <th className="widgetLgTh">Jenis Pekerjaan</th>
          <th className="widgetLgTh">Lokasi</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Bambang</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">Menyiram</td>
          <td className="widgetLgStatus">Location A</td>
        </tr>
      </table>
    </div>
  );
}
