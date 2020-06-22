class BangunDatar {
  constructor(luas, keliling) {
    this.luas = luas;
    this.keliling = keliling;
  }

  hitungPersegi(s) {
    this.luas = s * s;
    this.keliling = 4 * s;
    return `Luas = ${this.luas}, Keliling = ${this.keliling}`;
  }

  hitungPersegiPanjang(p, l) {
    this.luas = p * l;
    this.keliling = 2 * p + 2 * l;
    return `Luas = ${this.luas}, Keliling = ${this.keliling}`;
  }

  hitungSegitigaSikuSiku(a, t) {
    this.luas = (1 / 2) * a * t;
    this.keliling = a + t + sqrt(a * a + t * t);
    return `Luas = ${this.luas}, Keliling = ${this.keliling}`;
  }

  hitungLingkaran(r) {
    this.luas = Math.PI * r * r;
    this.keliling = 2 * Math.PI * r;
    return `Luas = ${this.luas}, Keliling = ${this.keliling}`;
  }
}

class BangunRuang extends BangunDatar {
  constructor(luas, keliling, volume) {
    super(luas, keliling);
    this.volume = volume;
  }

  hitungKubus(s) {
    super.hitungPersegi(s);
    this.volume = s * this.luas;
    let luasPermukaan = 6 * this.luas;
    let kelilingPermukaan = 3 * this.keliling;
    return `Luas Permukaan = ${luasPermukaan}, Keliling = ${kelilingPermukaan}, Volume = ${this.volume}`;
  }

  hitungBalok(p, l, t) {
    super.hitungPersegiPanjang(p, l);
    this.volume = t * this.luas;
    let luasPermukaan = 2 * (this.luas + p * t + l * t);
    return `Luas Permukaan = ${luasPermukaan}, Volume = ${this.volume}`;
  }
}
