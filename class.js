class Weather {
  constructor(
    city,
    currentCel,
    currentFah,
    condition,
    feelsCel,
    feelsFah,
    humidity,
    windKm,
    windM,
    windDir,
    date,
    time
  ) {
    this.city = city;
    this.currentCel = currentCel;
    this.currentFah = currentFah;
    this.condition = condition;
    this.feelsCel = feelsCel;
    this.feelsFah = feelsFah;
    this.humidity = humidity;
    this.windKm = windKm;
    this.windM = windM;
    this.windDir = windDir;
    this.date = date;
    this.time = time;
  }
}

export { Weather };
