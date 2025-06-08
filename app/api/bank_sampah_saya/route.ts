// Dummy data handler, buat nyoba nyoba
import { NextResponse } from 'next/server';

export async function GET() {
  const data = [
    {
      id: 1,
      nama: 'Rizge Kumpeni',
      jam_buka: '08:00',
      jam_tutup: '17:00'
    },
    {
      id: 2,
      nama: 'TPASA',
      jam_buka: '06:00',
      jam_tutup: '20:00'
    },
    {
      id: 3,
      nama: 'BSampah2018',
      jam_buka: '22:00',
      jam_tutup: '23:00'
    }
  ];
  return NextResponse.json(data);
}
