import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thbaht'
})
export class ThaiBahtPipe implements PipeTransform {

  transform(value: number): string {
    if (isNaN(value)) { return ''; }

    const baht = Math.floor(value);
    const satang = Math.round((value - baht) * 100);

    let output = this.convert(baht);
    if (satang > 0) {
      output += 'บาท';
      output += this.convert(satang);
      output += 'สตางค์';
    } else {
      output += 'บาทถ้วน';
    }

    return output;
  }

  convert(number: number): string {
    let thaiNum: string[] = ['', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า'];
    let thaiUnit: string[] = ['', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน', 'ล้าน'];
    let exceptions: { [key: string]: string } = { 'หนึ่งสิบ': 'สิบ', 'สองสิบ': 'ยี่สิบ', 'สิบหนึ่ง': 'สิบเอ็ด' };

    if (number === 0) { return ''; }
    const digits = number.toString().split('').map(Number).reverse();
    let output = '';

    digits.forEach((digit, index) => {
      if (digit === 0 && index % 6 === 0 && index > 0) {
        output = 'ล้าน' + output;
      }

      if (digit !== 0) {
        output = thaiNum[digit] + thaiUnit[index % 6] + output;
      }
    });

    for (const [search, replace] of Object.entries(exceptions)) {
      output = output.replace(search, replace);
    }

    return output;
  }
}
