import { DataGrid } from "@mui/data-grid";
import { DeleteOutline,Edit } from "@mui/icons-material";
import { historyRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function History() {
  const [data, setData] = useState(historyRows);

  const columns = [
    { field: "id", headerName: "No", width: 100 },
    {
      field: "product",
      headerName: "Pekerja",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "pekerjaan", headerName: "Jenis Pekerjaan", width: 180 },
    { field: "lokasi", headerName: "Lokasi", width: 180 },
    {
      field: "waktu",
      headerName: "Tanggal",
      width: 160,
    },
    {
      field: "desc",
      headerName: "Deskripsi",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Edit color='primary'/>
            <DeleteOutline color='error'/>
          </>
        );
      },
    },
  ];

  return (
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10} 
      />
  );
}
