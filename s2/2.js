const stations = [
  { id: 'S01', name: 'Trạm Cầu Giấy', active: true, capacityKwh: 120 },
  { id: 'S02', name: 'Trạm Mỹ Đình', active: false, capacityKwh: 90 },
  { id: 'S03', name: 'Trạm Tây Hồ', active: true, capacityKwh: 150 },
  { id: 'S04', name: 'Trạm Long Biên', active: false, capacityKwh: 80 }
];

const activeStations = stations.filter(station => station.active);
console.log('Danh sách trạm đang hoạt động:', activeStations);

const totalCapacity = stations.reduce((sum, station) => sum + station.capacityKwh, 0);
console.log('Tổng công suất toàn hệ thống:', totalCapacity, 'kWh');

const targetStation = stations.find(station => station.id === 'S03');
console.log('Thông tin trạm S03:', targetStation);